import React, { useState, useEffect } from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import './App.css';
import ExpandedView from './expanded-view/expanded-view';
import SideBar from './sidebar/side-bar';

function App() {
  const [focusedPost, changePost] = useState(0);
  const [nodeItem, setNode] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/nodes/${focusedPost}`)
      .then((res) => res.json())
      .then((result) => {
        setNode(result[0]);
      });
  }, [focusedPost]);

  return (
    <div className="App">
      <Container>
        <Row>
          <Col xs lg={3}>
            <SideBar changePost={changePost} />
          </Col>
          <Col xs lg={9}>
            {focusedPost !== 0 && <ExpandedView post={nodeItem} />}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
