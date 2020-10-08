import React from 'react';

export function TextCard({ body, searchVal }) {
  if (!searchVal) return <div style={{ padding: 10 }}>{body}</div>;
  const textArray = body.split(searchVal);
  return (
    <div style={{ padding: 10 }}>
      {textArray.map((item, index) => (
        <>
          {item}
          {index !== textArray.length - 1 && <b>{searchVal}</b>}
        </>
      ))}
    </div>
  );
}

export const ImageCard = ({ url }) => {
  return <img style={{ padding: 10 }} width="75%" src={url} />;
};
