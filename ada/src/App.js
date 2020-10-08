import React, { useState, useEffect } from 'react';
import { Row, Container, Col, Spinner } from 'react-bootstrap';
import './App.css';
import ExpandedView from './expanded-view/expanded-view';
import SideBar from './sidebar/side-bar';
import styled from 'styled-components';

const MainBox = styled.div`
  padding-top: 50px;
  background: #f4f1ee;
  height: 100%;
  width: 100%;
  position: fixed;
`;

function App() {
  const [focusedPost, changePost] = useState(0);
  const [nodeItem, setNode] = useState({});
  const [searchVal, setSearch] = useState('');
  const [nodes, setNodes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/nodes/${focusedPost}`)
      .then((res) => res.json())
      .then((result) => {
        setNode(result[0]);
      });
  }, [focusedPost]);

  useEffect(() => {
    fetch('http://localhost:5000/nodes')
      .then((res) => res.json())
      .then((result) => {
        setNodes(result);
        setLoading(false);
      });
  }, []);

  function OnSubmit() {
    setLoading(true);
    fetch('http://localhost:5000/nodes/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: searchVal }),
    })
      .then((res) => res.json())
      .then((response) => {
        setNodes(response);
        setLoading(false);
      });
  }

  if (loading) return <Spinner />;
  return (
    <MainBox className="App">
      <Container>
        <Row>
          <Col xs lg={3}>
            <form onSubmit={OnSubmit}>
              <input
                onChange={(e) => setSearch(e.target.value)}
                name="searchVal"
                value={searchVal}
                component="input"
                type="text"
                style={{
                  width: '100%',
                  border: '1px solid rgba(0,0,0,.125)',
                  borderRadius: '0.25em',
                  marginBottom: 5,
                }}
              />
            </form>
            <SideBar changePost={changePost} nodes={nodes} />
          </Col>
          <Col xs lg={9}>
            {focusedPost !== 0 && (
              <ExpandedView searchVal={searchVal} post={nodeItem} />
            )}
          </Col>
        </Row>
      </Container>
    </MainBox>
  );
}

export default App;
