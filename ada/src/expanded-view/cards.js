import React from 'react';
import { Card, Image } from 'react-bootstrap';

export function TextCard({ body, searchVal }) {
  if (!searchVal)
    return (
      <Card
        style={{ marginBottom: 10, color: '#21313C' }}
        body
        border="secondary"
      >
        {body}
      </Card>
    );
  const textArray = body.split(searchVal);
  return (
    <Card
      style={{ marginBottom: 10, color: '#21313C' }}
      body
      border="secondary"
    >
      {textArray.map((item, index) => (
        <>
          {item}
          {index !== textArray.length - 1 && <b>{searchVal}</b>}
        </>
      ))}
    </Card>
  );
}

export const ImageCard = ({ url }) => {
  return <Image rounded width="75%" src={url} />;
};
