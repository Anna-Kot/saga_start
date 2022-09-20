import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteReadListPost } from '../../store/post/actions';

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
  isValidated = true,
  id,
}) => {
  const dispatch = useDispatch();
  const readList = useSelector(state => state.Posts.readListPosts);

  const handleClosePopup = () => {
    if (showDeletePopup) {
      setShowDeletePopup(!showDeletePopup);
    }

    if (showUpdatePopup) {
      setShowUpdatePopup(!showUpdatePopup);
    }

    if (showCreatePopup) {
      setShowCreatePopup(!showCreatePopup);
    }
  };

  const handleConfirmButton = event => {
    if (showDeletePopup) {
      handleDeleteFromPosts(event);
      dispatch(deleteReadListPost(id));
    }

    if (showUpdatePopup) {
      if (!isValidated) {
        event.target.style.background = '#7E7E7E';
      } else {
        onClickHandler();
        setShowUpdatePopup(!showUpdatePopup);
      }
    }

    if (showCreatePopup) {
      onClickHandler();
      setShowCreatePopup(!showCreatePopup);
    }
  };

  return (
    <s.ButtonsContainer>
      <s.CancelButton onClick={handleClosePopup}>Cancel</s.CancelButton>
      <s.SaveButton isValidated={isValidated} bgBtnColor={bgBtnColor} onClick={handleConfirmButton}>
        {sendButton}
      </s.SaveButton>
    </s.ButtonsContainer>
  );
};

export default PopupButtonsBlock;
