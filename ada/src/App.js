import React, { useState } from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import './App.css';
import ExpandedView from './expanded-view/expanded-view';
import SideBar from './sidebar/side-bar';

function App() {
  const [focusedPost, changePost] = useState(0);
  return (
    <div className="App">
      <Container>
        <Row>
          <Col xs lg={3}>
            <SideBar chagnePost={changePost()} />
          </Col>
          <Col xs lg={9}>
            <ExpandedView id={2} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
