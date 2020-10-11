import React, { useState, useEffect } from 'react';
import SideItemContainer from './side-item';

function SideBar({ changePost, nodes }) {
  const [expandedNode, setExpand] = useState(-1);

  const ItemsList = nodes.map((node, i) => {
    return (
      <SideItemContainer
        onClick={() => {
          setExpand(i);
          changePost(node.id);
        }}
        setExpand={() => setExpand(i)}
        // Giving the children access to change post so that they can change post when clicked
        changePost={(id) => changePost(id)}
        key={i}
        node={node}
        expanded={i === expandedNode}
      />
    );
  });
  return <div>{ItemsList}</div>;
}

export default SideBar;
