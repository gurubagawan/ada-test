import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import SubItemBox from './sub-item';

function SideItemContainer({
  node: { title, id },
  expanded,
  onClick,
  changePost,
}) {
  const [loading, setLoaded] = useState(true);
  const [nodeData, setData] = useState({});
  const [subinfo, setSubs] = useState([]);

  // This component will run for every single node, so it stores the node in it's own state
  useEffect(() => {
    fetch(`http://localhost:5000/nodes/${id}`)
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

  // a clean variable to compare to see if connections exists. If connections doesn't exist, map lower down will break without check
  const hasConnections = nodeData.connections !== null;

  const mySubs = (nodeInfo) =>
    nodeInfo.connections.map((item, i) => {
      return (
        <SubItemBox
          onClick={() => {
            console.log(item);
            changePost(item);
          }}
          node={item}
        />
      );
    });

  return (
    <Card style={{ marginBottom: 5 }}>
      <div onClick={onClick}>{title}</div>
      {expanded && hasConnections && (
        <div style={{ marginTop: 2.5 }}>{mySubs(nodeData)}</div>
      )}
    </Card>
  );
}

export default SideItemContainer;
