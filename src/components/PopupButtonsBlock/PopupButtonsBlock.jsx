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
    } else if (showUpdatePopup) {
      setShowUpdatePopup(!showUpdatePopup);
    } else if (showCreatePopup) {
      setShowCreatePopup(!showCreatePopup);
    }
  };

  const handleConfirmButton = event => {
    if (showDeletePopup) {
      handleDeleteFromPosts(event);
      console.log(id);
      dispatch(deleteReadListPost(id));
      console.log(readList.length);
      readList.filter(post => post.id !== id);
    } else if (showUpdatePopup) {
      if (!isValidated) {
        // document.getElementsByClassName('disable').style.backgroundColor = '#7E7E7E';
        event.target.style.background = '#7E7E7E';
        console.log('characters');
      } else {
        onClickHandler();
        setShowUpdatePopup(!showUpdatePopup);
      }

      // window.location.reload();
    } else if (showCreatePopup) {
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
