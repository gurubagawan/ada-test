import React from 'react';

export const TextCard = ({ body }) => {
  return <div style={{ padding: 10 }}>{body}</div>;
};

export const ImageCard = ({ url }) => {
  return <img style={{ padding: 10 }} width="75%" src={url} />;
};
