import React, { useState, useEffect } from 'react';
import { Row, Container, Col, Spinner } from 'react-bootstrap';
import './App.css';
import ExpandedView from './expanded-view/expanded-view';
import SideBar from './sidebar/side-bar';

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

  function OnSubmit(e) {
    e.preventDefault();
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
        console.log(response);
        setNodes(response);
        setLoading(false);
      });
  }

  if (loading) return <Spinner />;
  return (
    <div className="App">
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
              />
              <button type="submit" />
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
    </div>
  );
}

export default App;
