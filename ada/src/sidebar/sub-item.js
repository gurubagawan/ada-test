import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Spinner } from 'react-bootstrap';
import SubLevelTwoBox from './sub-item-2';

const SubBox = styled.div`
  margin-left: 40%;
  align-self: flex-start !important;
  font-size: 14px;
  text-align: left;
`;

function SubItemBox({ node, onClick, expanded, changePost }) {
  const [nodeData, setData] = useState({});
  const [expandedNode, setExpand] = useState(-1);

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

  const level2Subs = (nodeInfo) =>
    nodeInfo.connections.map((item, i) => {
      return (
        <SubLevelTwoBox
          onClick={() => {
            setExpand(i);
            changePost(item);
          }}
          expanded={expandedNode === i}
          node={item}
        />
      );
    });

  const hasConnections = nodeData.connections !== null;

  if (!nodeData) return <Spinner />;

  return (
    <SubBox>
      <div onClick={onClick}>{nodeData.title}</div>
      {expanded && hasConnections && (
        <div style={{ marginTop: 2.5 }}>{level2Subs(nodeData)}</div>
      )}
    </SubBox>
  );
}

export default SubItemBox;
