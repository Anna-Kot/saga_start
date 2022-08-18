import React from 'react';

import BackdropPopup from '../BackdropPopup';
import PopupButtonsBlock from '../PopupButtonsBlock';

import * as s from '../PopupDeletePost/PopupDeletePost.styled';

const PopupDeletePost = ({ setShowDeletePopup, showDeletePopup, handleDeleteFromPosts, id }) => {
  return (
    <BackdropPopup>
      <s.PopupBlock>
        <p>Are you sure you want to remove this post?</p>
        <PopupButtonsBlock
          setShowDeletePopup={setShowDeletePopup}
          showDeletePopup={showDeletePopup}
          handleDeleteFromPosts={handleDeleteFromPosts}
          sendButton="Confirm"
          bgBtnColor="#E00000"
          id={id}
        ></PopupButtonsBlock>
      </s.PopupBlock>
    </BackdropPopup>
  );
};

export default PopupDeletePost;
