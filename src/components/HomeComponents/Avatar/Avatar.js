import React from 'react';
import AvatarStyle from './styles';
import image from '../../../styles/images/Josh_Loftis_copy-min.jpg';

export default () => (
  <AvatarStyle>
    <span className="before" />
    <img src={image} alt="Josh Loftis" width={170} height={170} />
    <span className="after" />
  </AvatarStyle>
);
