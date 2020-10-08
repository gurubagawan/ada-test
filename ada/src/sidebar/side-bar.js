import React, { useState, useEffect } from 'react';
import SideItemContainer from './side-item';

const SideBar = ({ changePost, LoadPost, nodes }) => {
  const [expandedNode, setExpand] = useState(-1);
  // console.log(nodes);

  const ItemsList = nodes.map((node, i) => {
    return (
      <SideItemContainer
        onClick={() => {
          setExpand(i);
          changePost(node.id);
        }}
        key={i}
        node={node}
        expanded={i === expandedNode}
      />
    );
  });
  return <div>{ItemsList}</div>;
};

export default SideBar;
