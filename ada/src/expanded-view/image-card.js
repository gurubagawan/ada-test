import React from 'react';
import { Card, Image } from 'react-bootstrap';

export const ImageCard = ({ url }) => {
  return <Image rounded style={{ height: 300, width: 'auto' }} src={url} />;
};
