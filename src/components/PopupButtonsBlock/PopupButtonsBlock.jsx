import React from 'react';

import * as s from './PopupButtonsBlock.styled';

const PopupButtonsBlock = ({
  showDeletePopup,
  setShowDeletePopup,
  handleDeleteFromPosts,
  showUpdatePopup,
  setShowUpdatePopup,
  showCreatePopup,
  setShowCreatePopup,
  sendButton,
  bgBtnColor,
  onClickHandler,
}) => {
  const handleClosePopup = () => {
    if (showDeletePopup) {
      setShowDeletePopup(!showDeletePopup);
    } else if (showUpdatePopup) {
      setShowUpdatePopup(!showUpdatePopup);
    } else if (showCreatePopup) {
      setShowCreatePopup(!showCreatePopup);
    }
  };

  const handleConfirmButton = event => {
    if (showDeletePopup) {
      handleDeleteFromPosts(event);
    } else if (showUpdatePopup) {
      onClickHandler();
      setShowUpdatePopup(!showUpdatePopup);
      // window.location.reload();
    } else if (showCreatePopup) {
      onClickHandler();
      setShowCreatePopup(!showCreatePopup);
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
