import React from 'react';

import * as s from './SideBarButton.styled';

/* 
  IconButton
  MarkerButton
*/
const SidebarButton = ({ type, IconComponent = () => null, text = '', markerColor = '' }) => {
  if (type === 'IconButton') {
    return (
      <s.ButtonContainer>
        <IconComponent />
        <s.ButtonText>{text}</s.ButtonText>
      </s.ButtonContainer>
    );
  }

  if (type === 'MarkerButton') {
    return (
      <s.ButtonContainer>
        <s.CircleIcon style={{ background: markerColor }} />
        <s.ButtonText>{text}</s.ButtonText>
      </s.ButtonContainer>
    );
  }

  return null;
};

export default SidebarButton;
