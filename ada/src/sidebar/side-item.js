import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import SubItemBox from './sub-item';

function SideItemContainer({
  node: { title, id },
  expanded,
  onClick,
  changePost,
  connections,
}) {
  const [nodeData, setData] = useState({});
  const [expandedNode, setExpand] = useState(-1);

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
  }, [id]);

  // This is what I was able to make for a recursive function. Any feedback would be appreciated on how to go further. From her to line 67
  const makeSubBox = (index) => {
    return (
      <SubItemBox
        onClick={() => {
          setExpand(index);
          changePost(index);
        }}
        expanded={true}
        changePost={(id) => changePost(id)}
        node={index}
      />
    );
  };

  let arrayofThings = [];

  function eachRecursive(obj) {
    console.log(obj);
    for (var k in obj) {
      // console.log(obj[k]);
      if (Array.isArray(obj[k])) {
        console.log(obj[k]);
        eachRecursive(obj[k]);
        // console.log('bottom');
      } else {
        console.log(obj[k]);
        arrayofThings.push(makeSubBox(obj[k]));
      }
    }
    console.log(arrayofThings);
    return arrayofThings;
  }

  // a clean variable to compare to see if connections exists. If connections doesn't exist, map lower down will break without check
  const hasConnections = nodeData.connections !== null;

  const mySubs = (nodeInfo) =>
    nodeInfo.connections.map((item, i) => {
      return (
        <SubItemBox
          onClick={() => {
            setExpand(i);
            changePost(item);
          }}
          expanded={expandedNode === i}
          changePost={(id) => changePost(id)}
          node={item}
        />
      );
    });

  return (
    <Card style={{ marginBottom: 5 }}>
      <div onClick={onClick}>{title}</div>
      <div>{expanded && hasConnections && mySubs(nodeData)}</div>

      {/* <div>{expanded && hasConnections && eachRecursive([[1, 2], 3, 4])}</div> */}
    </Card>
  );
}

export default SideItemContainer;
