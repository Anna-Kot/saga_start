import React from 'react';
import { useSelector } from 'react-redux';

import * as s from './SideBarButton.styled';

/* 
  IconButton
  MarkerButton
*/
const SidebarButton = ({ type, IconComponent = () => null, text = '', markerColor = '', onClickHandler }) => {
  const count = useSelector(state => state.Posts.countOfList);

  if (type === 'IconButton') {
    if (text === 'Read List') {
      return (
        <s.ButtonContainer onClick={onClickHandler}>
          <IconComponent />
          <s.ButtonText>{text}</s.ButtonText>
          <s.NumberOfList>{count}</s.NumberOfList>
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
      <s.ButtonContainer onClick={onClickHandler}>
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
