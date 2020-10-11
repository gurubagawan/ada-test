import React, { useState, useEffect } from 'react';
import { Row, Container, Col, Spinner } from 'react-bootstrap';
import './App.css';
import ExpandedView from './expanded-view/expanded-view';
import SideBar from './sidebar/side-bar';
import styled from 'styled-components';

//I generally use styled divs when there is more than 2/3 items. It helps the code to look cleaner in return
const MainBox = styled.div`
  padding-top: 50px;
  background: #f4f1ee;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  padding-bottom: 50px;
`;

function App() {
  const [focusedPost, changePost] = useState(-1);
  const [nodeItem, setNode] = useState({});
  const [searchVal, setSearch] = useState('');
  const [nodes, setNodes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Make a function that loads the detailed view of posts, and does it based by looking for a change in focused post, which is an integer that gets changed onclick
  useEffect(() => {
    fetch(`http://localhost:5000/nodes/${focusedPost}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('something went wrong');
        }
      })
      .then((responseJson) => {
        setNode(responseJson[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [focusedPost]);

  // Load all the nodes for the sidebar on page load. I'm doing it in App, because in the actuall side bar component I'll have account for the connection nodes, so it looks cleaner to have these functions as seperated as possible.
  // This only needs to run on load, so the array of arguments is empty
  useEffect(() => {
    fetch('http://localhost:5000/nodes')
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('something went wrong');
        }
      })
      .then((responseJson) => {
        setNodes(responseJson);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // This is tied to the search box. I thought about using Redux-form for the search box, but seeing as it's only one field, I realized it's relatively simply, and not worth the effort of setting up redux.
  function OnSubmit() {
    setLoading(true);
    fetch('http://localhost:5000/nodes/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: searchVal }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('something went wrong');
        }
      })
      .then((responseJson) => {
        setNodes(responseJson);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // This loading is something I used in a few places on my app. For this page I needed it for the OnSubmit and the Sidebar.
  // By doing this if the respective objects are not loaded yet, it won't error out, and instead just display the spinner.
  // I set Loading true on page load or when the search starts, and then false after objects are loaded.
  if (loading) return <Spinner />;
  return (
    <MainBox className="App">
      <Container>
        <Row>
          <Col xs lg={3}>
            <form onSubmit={OnSubmit}>
              {/* Styled.input errors out a lot so I left inline styling here */}
              <input
                onChange={(e) => setSearch(e.target.value)}
                name="searchVal"
                value={searchVal}
                component="input"
                type="text"
                placeholder="Enter a search term"
                style={{
                  width: '100%',
                  border: '1px solid rgba(0,0,0,.125)',
                  borderRadius: '0.25em',
                  marginBottom: 5,
                  textAlign: 'center',
                }}
              />
            </form>
            <SideBar changePost={changePost} nodes={nodes} />
          </Col>
          <Col xs lg={9}>
            {/* when Focused Post < 0, there is no post to show- the default state- so expanded view doesn't need to show */}
            {focusedPost >= 0 && (
              <ExpandedView searchVal={searchVal} post={nodeItem} />
            )}
          </Col>
        </Row>
      </Container>
    </MainBox>
  );
}

export default App;
