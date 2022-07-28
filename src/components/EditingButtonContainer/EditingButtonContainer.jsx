import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setCountReadListPost } from '../../store/post/actions';
import EditingButton from '../../components/EditingButton';

import * as s from './EditingButtonContainer.styled';
import { ReactComponent as PinPost } from '../../assets/svg/PinPost.svg';
import { ReactComponent as EditPost } from '../../assets/svg/EditPost.svg';
import { ReactComponent as DeletePost } from '../../assets/svg/DeletePost.svg';

const EditingButtonContainer = ({ post }) => {
  const dispatch = useDispatch();
  // const posts = useSelector(state => state.Posts.posts);
  // const count = useSelector(state => state.Posts.countOfList);
  const readListPosts = useSelector(state => state.Posts.readListPosts);
  console.log('readListPosts', readListPosts);
  // console.log('count', count);
  // console.log('posts', posts);

  const addPostToList = (event, count) => {
    event.stopPropagation();
    dispatch(setCountReadListPost(count));
    console.log(post.id);
    console.log(post);
    readListPosts.push(post);
  };
  return (
    <s.ButtonsContainer className="editing-button">
      <EditingButton IconComponent={PinPost} onClickButton={addPostToList} />
      <EditingButton IconComponent={EditPost} />
      <EditingButton IconComponent={DeletePost} />
    </s.ButtonsContainer>
  );
};

export default EditingButtonContainer;
