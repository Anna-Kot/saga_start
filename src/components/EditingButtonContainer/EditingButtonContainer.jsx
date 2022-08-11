import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setReadListPost } from '../../store/post/actions';
import EditingButton from '../../components/EditingButton';
import * as s from './EditingButtonContainer.styled';
import { ReactComponent as PinPost } from '../../assets/svg/PinPost.svg';
import { ReactComponent as PinPostRed } from '../../assets/svg/PinPostRed.svg';
import { ReactComponent as EditPost } from '../../assets/svg/EditPost.svg';
import { ReactComponent as DeletePost } from '../../assets/svg/DeletePost.svg';

const LENGTH_MESSAGE = 'Sorry, you can added to Read List only 10 posts';
const DUPLICATE_MESSAGE = 'You can`t added duplicate';

const EditingButtonContainer = ({ post, handleShowDeletePopup, handleShowUpdatePopup }) => {
  const dispatch = useDispatch();
  const readList = useSelector(state => state.Posts.readListPosts);

  const addPostToList = event => {
    event.stopPropagation();

    if (readList.length >= 10) return alert(LENGTH_MESSAGE);

    const isDuplicate = readList.find(({ id }) => id === post.id);
    if (isDuplicate) return alert(DUPLICATE_MESSAGE);

    dispatch(setReadListPost(post));

    // if (readList.length < 10) {
    //   if (!result) {
    //     dispatch(setReadListPost(post));
    //   } else {
    //     alert('You can`t added dublicate');
    //   }
    // } else {
    //   alert('Sorry, you can added to Read List only 10 posts');
    // }
  };

  return (
    <s.ButtonsContainer className="editing-button">
      <EditingButton IconComponent={readList.length < 10 ? PinPost : PinPostRed} onClickButton={addPostToList} />
      <EditingButton IconComponent={EditPost} onClickButton={handleShowUpdatePopup} />
      <EditingButton IconComponent={DeletePost} onClickButton={handleShowDeletePopup} />
      {/* <EditingButton IconComponent={DeletePost} onClickButton={handleDeleteFromPosts} /> */}
    </s.ButtonsContainer>
  );
};

export default EditingButtonContainer;
