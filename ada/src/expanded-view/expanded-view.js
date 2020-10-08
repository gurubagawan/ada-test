import React, { useState, useEffect } from 'react';
import Spinner from '../spinner';
import { ImageCard, TextCard } from './cards';

const ExpandedView = ({ post, searchVal }) => {
  if (!post) return <Spinner />;
  const expandedList = post.content.map((item, i) => {
    if (item.type === 'text') {
      return <TextCard searchVal={searchVal} body={item.body} key={i} />;
    } else if (item.type === 'image') {
      return <ImageCard url={item.url} />;
    }
  });
  return (
    <div>
      {post.title} <br />
      {expandedList}
    </div>
  );
};

export default ExpandedView;
