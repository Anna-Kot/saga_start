import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { deleteCountReadListPost, deleteReadListPost } from '../../store/post/actions';

import { ReactComponent as CloseButton } from '../../assets/svg/CloseButton.svg';

import * as s from './ClosePostListButton.styled';

const ClosePostListButton = ({ handleDeletePostFromList }) => {
  // const readListPosts = useSelector(state => state.Posts.readListPosts);

  // const handleRemoveItem = e => {
  //   const id = e.target.getAttribute('id');
  //   updateList(list.filter(item => item.id !== id));
  // };

  //   const [list, updateList] = useState(readListPosts);
  // const dispatch = useDispatch();

  // console.log('readListPosts', readListPosts);

  // const deletePostFromList = (e, count) => {
  //   const id = e.target.getAttribute('id');
  //   updateList(list.filter(item => item.id !== id));
  //   e.stopPropagation();
  //   dispatch(deleteCountReadListPost(count));
  // };
  return (
    <s.ButtonContainer className="editing-button" onClick={handleDeletePostFromList}>
      <CloseButton />
    </s.ButtonContainer>
  );
};

export default ClosePostListButton;
