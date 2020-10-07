import React, { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import SideItemContainer from './side-item';

const SideBar = ({}) => {
  const [loading, setLoading] = useState(true);
  const [expandedNode, setExpand] = useState(-1);
  const [nodes, setNodes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/nodes')
      .then((res) => res.json())
      .then((result) => {
        setNodes(result);
        setLoading(false);
      });
  });

  // const displayAllPosts = postIDs.map((id, i) => {
  //   if (i == 0) return <BlogItem key={i} itemID={id} mainPost={true} />;
  //   else if (i < 30 * page) return <BlogItem key={i} itemID={id} />;
  // });

  const ItemsList = nodes.map((node, i) => {
    return (
      <SideItemContainer
        onClick={() => {
          console.log('ran');
          setExpand(i);
        }}
        key={i}
        title={node.title}
        expanded={i === expandedNode}
        id={node.id}
      />
    );
  });
  if (loading) return <Spinner></Spinner>;
  return <div>{ItemsList}</div>;
};

export default SideBar;
