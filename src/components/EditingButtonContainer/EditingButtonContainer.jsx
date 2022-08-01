import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setReadListPost } from '../../store/post/actions';
import EditingButton from '../../components/EditingButton';

import * as s from './EditingButtonContainer.styled';
import { ReactComponent as PinPost } from '../../assets/svg/PinPost.svg';
import { ReactComponent as PinPostRed } from '../../assets/svg/PinPostRed.svg';
import { ReactComponent as EditPost } from '../../assets/svg/EditPost.svg';
import { ReactComponent as DeletePost } from '../../assets/svg/DeletePost.svg';

const EditingButtonContainer = ({ post }) => {
  const readList = useSelector(state => state.Posts.readListPosts);

  const dispatch = useDispatch();
  // const [addReadPost, setAddReadPost] = useState(readList);

  const addPostToList = event => {
    event.stopPropagation();
    console.log(post);
    const result = readList.find(({ id }) => id === post.id);
    console.log(result);
    if (readList.length < 10) {
      if (!result) {
        dispatch(setReadListPost(post));
      } else {
        alert('You can`t added dublicate');
      }
    } else {
      alert('Sorry, you can added to Read List only 10 posts');
    }
  };

  return (
    <s.ButtonsContainer className="editing-button">
      <EditingButton IconComponent={readList.length < 10 ? PinPost : PinPostRed} onClickButton={addPostToList} />
      <EditingButton IconComponent={EditPost} />
      <EditingButton IconComponent={DeletePost} />
    </s.ButtonsContainer>
  );
};

export default EditingButtonContainer;
