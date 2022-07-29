import React from 'react';

import { ReactComponent as CloseButton } from '../../assets/svg/CloseButton.svg';

import * as s from './ClosePostListButton.styled';

const ClosePostListButton = ({ handleDeletePostFromList }) => {
  return (
    <s.ButtonContainer className="editing-button" onClick={handleDeletePostFromList}>
      <CloseButton />
    </s.ButtonContainer>
  );
};

export default ClosePostListButton;
