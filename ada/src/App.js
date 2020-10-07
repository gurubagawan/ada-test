import React, { useState, useEffect } from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import './App.css';
import ExpandedView from './expanded-view/expanded-view';
import SideBar from './sidebar/side-bar';

function App() {
  const [focusedPost, changePost] = useState(0);
  const [nodeItem, setNode] = useState({});

  const LoadPost = () => {
    useEffect(() => {
      fetch(`http://localhost:5000/nodes/${focusedPost}`)
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          setNode(result[0]);
          // setLoading(false);
        });
    }, []);
  };
  console.log(nodeItem, focusedPost);
  return (
    <div className="App">
      <Container>
        <Row>
          <Col xs lg={3}>
            <SideBar changePost={changePost} LoadPost={LoadPost} />
          </Col>
          <Col xs lg={9}>
            {focusedPost !== 0 && <ExpandedView id={focusedPost} />}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
