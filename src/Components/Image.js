import React from 'react';
import Image from 'react-bootstrap/Image';
import teamPhoto from './team.jpg';

const Photo = () => {
  return (
    <div style={{ width: '100%' }}>
      <Image src={teamPhoto} fluid style={{ width: '100%' }} />
    </div>
  );
};

export default Photo;

