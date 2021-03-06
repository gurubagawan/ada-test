import React from 'react';
import styled from 'styled-components';
import Spinner from '../spinner';
import { ImageCard } from './image-card';
import TextCard from './text-card';

const TitleBox = styled.div`
  font-size: 20px;
  margin-bottom: 20px;
  color: #21313c;
  font-weight: 500;
`;

const ExpandedView = ({ post, searchVal }) => {
  if (!post) return <Spinner />;
  const expandedList = post.content.map((item, i) => {
    if (item.type === 'text') {
      return <TextCard searchVal={searchVal} bodyText={item.body} key={i} />;
    } else if (item.type === 'image') {
      return <ImageCard key={i} url={item.url} />;
    }
  });
  return (
    <div>
      <TitleBox>{post.title}</TitleBox>
      {expandedList}
    </div>
  );
};

export default ExpandedView;
