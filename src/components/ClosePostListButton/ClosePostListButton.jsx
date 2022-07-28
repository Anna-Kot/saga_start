import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { deleteCountReadListPost } from '../../store/post/actions';

import { ReactComponent as CloseButton } from '../../assets/svg/CloseButton.svg';

import * as s from './ClosePostListButton.styled';

const ClosePostListButton = () => {
  const readListPosts = useSelector(state => state.Posts.readListPosts);
  //   const [stateList, setStateList] = useState([...readListPosts]);
  const dispatch = useDispatch();

  console.log('readListPosts', readListPosts);

  // const removeItem = id => {
  //     setStateList(prevState => prevState.filter(el => el.id !== id))
  // }

  const deletePostFromList = (event, count) => {
    event.stopPropagation();
    dispatch(deleteCountReadListPost(count));
  };
  return (
    <s.ButtonContainer className="editing-button" onClick={deletePostFromList}>
      <CloseButton />
    </s.ButtonContainer>
  );
};

export default ClosePostListButton;
