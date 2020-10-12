import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Spinner from '../spinner';

const SubBox = styled.div`
  margin-left: 10%;
  align-self: flex-start !important;
  font-size: 14px;
  text-align: left;
`;

function SubLevelTwoBox({ node, onClick }) {
  const [nodeData, setData] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/nodes/${node}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('something went wrong');
        }
      })
      .then((responseJson) => {
        setData(responseJson[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [node]);

  if (!nodeData) return <Spinner />;

  return <SubBox onClick={onClick}>{nodeData.title}</SubBox>;
}

export default SubLevelTwoBox;
