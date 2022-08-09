import React from 'react';

import * as s from './PopupButtonsBlock.styled';

const PopupButtonsBlock = ({ showDeletePopup, setShowDeletePopup, handleDeleteFromPosts }) => {
  const handleCloseDeletePopup = () => {
    setShowDeletePopup(!showDeletePopup);
  };

  return (
    <s.ButtonsContainer>
      <s.CancelButton onClick={handleCloseDeletePopup}>Cancel</s.CancelButton>
      <s.SaveButton onClick={handleDeleteFromPosts}>Confirm</s.SaveButton>
    </s.ButtonsContainer>
  );
};

export default PopupButtonsBlock;
