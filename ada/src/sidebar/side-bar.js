import React, { useState, useEffect } from 'react';
import SideItem from './side-item';

const SideBar = ({}) => {
  const [loading, setLoading] = useState(false);
  const [expandedNode, setExpand] = useState(-1);
  const [nodes, setNodes] = useState([
    {
      id: 1,
      title: 'These are the voyages',
    },
    {
      id: 2,
      title: 'Data on friendship',
    },
    {
      id: 3,
      title: 'Star Trek API',
    },
    {
      id: 4,
      title: 'Maybe Riker',
    },
    {
      id: 5,
      title: 'Maybe Data with Beard',
    },
    {
      id: 6,
      title: 'Borg Hails',
    },
    {
      id: 7,
      title: 'Data or Spock?',
    },
    {
      id: 8,
      title: 'Not Picard! Not anyone, in fact',
    },
    ,
  ]);

  // const displayAllPosts = postIDs.map((id, i) => {
  //   if (i == 0) return <BlogItem key={i} itemID={id} mainPost={true} />;
  //   else if (i < 30 * page) return <BlogItem key={i} itemID={id} />;
  // });

  const ItemsList = nodes.map((node, i) => {
    return (
      <SideItem
        onClick={() => {
          console.log('ran');
          setExpand(i);
        }}
        title={node.title}
        expanded={i === expandedNode}
        id={node.id}
      />
    );
  });

  return <div>{ItemsList};</div>;
};

export default SideBar;
