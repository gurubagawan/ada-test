import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import { Spinner } from 'react-bootstrap';

const SubBox = styled.div`
  margin-left: 40%;
  align-self: flex-start !important;
  font-size: 14px;
  text-align: left;
`;

const SubItemBox = ({ node, onClick }) => {
  const [loading, setLoaded] = useState(true);
  const [nodeData, setData] = useState({});
  const [subinfo, setSubs] = useState([]);
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
  }, []);

  if (!nodeData) return <Spinner />;

  return <SubBox onClick={onClick}>{nodeData.title}</SubBox>;
};

export default SubItemBox;
