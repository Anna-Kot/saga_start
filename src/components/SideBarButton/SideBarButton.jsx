import React from 'react';
import { useNavigate } from 'react-router-dom';

import * as s from './SideBarButton.styled';

/* 
  IconButton
  MarkerButton
*/
const SidebarButton = ({ type, IconComponent = () => null, text = '', markerColor = '' }) => {
  const navigate = useNavigate();
  if (type === 'IconButton') {
    if (text === 'Read List') {
      return (
        <s.ButtonContainer
          onClick={() => {
            navigate('/readlist');
          }}
        >
          <IconComponent />
          <s.ButtonText>{text}</s.ButtonText>
          <s.NumberOfList>15</s.NumberOfList>
        </s.ButtonContainer>
      );
    }
    if (text === 'Add new post') {
      return (
        <s.ButtonContainer>
          <IconComponent />
          <s.ButtonText style={{ color: '#868686' }}>{text}</s.ButtonText>
        </s.ButtonContainer>
      );
    }
    return (
      <s.ButtonContainer
        onClick={() => {
          navigate('/posts');
        }}
      >
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
