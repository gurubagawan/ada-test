import React, { useState, useEffect } from 'react';
import SideItemContainer from './side-item';

const SideBar = ({ changePost, LoadPost, nodes }) => {
  const [expandedNode, setExpand] = useState(-1);

  const ItemsList = nodes.map((node, i) => {
    return (
      <SideItemContainer
        onClick={() => {
          setExpand(i);
          changePost(node.id);
        }}
        key={i}
        title={node.title}
        expanded={i === expandedNode}
        id={node.id}
      />
    );
  });
  return <div>{ItemsList}</div>;
};

export default SideBar;
