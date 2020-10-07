import React, { useState, useEffect } from 'react';
import Spinner from '../spinner';
import { ImageCard, TextCard } from './cards';

const ExpandedView = ({ post }) => {
  const [loading, setLoading] = useState(false);
  console.log(post);
  // const [nodeItem, setNode] = useState({});

  // useEffect(() => {
  //   fetch(`http://localhost:5000/nodes/${id}`)
  //     .then((res) => res.json())
  //     .then((result) => {
  //       console.log(result);
  //       setNode(result[0]);
  //       setLoading(false);
  //     });
  // }, [id]);

  if (!post) return <Spinner />;

  const expandedList = post.content.map((item, i) => {
    if (item.type === 'text') {
      return <TextCard body={item.body} key={i} />;
    } else if (item.type === 'image') {
      return <ImageCard url={item.url} />;
    }
  });
  return <div>{expandedList}</div>;
};

export default ExpandedView;
