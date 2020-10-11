import React from 'react';
import { Image } from 'react-bootstrap';

export const ImageCard = ({ url }) => {
  return <Image rounded width="75%" src={url} />;
};
