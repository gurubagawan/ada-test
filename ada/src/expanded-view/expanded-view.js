import React, { useState, useEffect } from 'react';
import Spinner from '../spinner';
import { ImageCard, TextCard } from './cards';

const ExpandedView = ({ id }) => {
  const [loading, setLoading] = useState(true);
  const [nodeItem, setNode] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/nodes/${id}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setNode(result[0]);
        setLoading(false);
      });
  }, []);

  if (id === 0 || loading) return <Spinner />;

  const expandedList = nodeItem.content.map((item, i) => {
    if (item.type === 'text') {
      return <TextCard body={item.body} key={i} />;
    } else if (item.type === 'image') {
      return <ImageCard url={item.url} />;
    }
  });
  return <div>{expandedList}</div>;
};

export default ExpandedView;
