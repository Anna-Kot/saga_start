import React from 'react';

import * as s from './PopupButtonsBlock.styled';

const PopupButtonsBlock = ({
  showDeletePopup,
  setShowDeletePopup,
  handleDeleteFromPosts,
  showUpdatePopup,
  setShowUpdatePopup,
  sendButton,
  bgBtnColor,
  onClickHandler,
}) => {
  const handleClosePopup = () => {
    if (showDeletePopup) {
      setShowDeletePopup(!showDeletePopup);
    } else if (showUpdatePopup) {
      setShowUpdatePopup(!showUpdatePopup);
    }
  };

  const handleConfirmButton = event => {
    if (showDeletePopup) {
      handleDeleteFromPosts(event);
    } else if (showUpdatePopup) {
      onClickHandler();
      setShowUpdatePopup(!showUpdatePopup);
      // window.location.reload();
    }
  };

  return (
    <s.ButtonsContainer>
      <s.CancelButton onClick={handleClosePopup}>Cancel</s.CancelButton>
      <s.SaveButton style={{ background: bgBtnColor }} onClick={handleConfirmButton}>
        {sendButton}
      </s.SaveButton>
    </s.ButtonsContainer>
  );
};

export default PopupButtonsBlock;
