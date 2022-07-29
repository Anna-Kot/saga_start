import React from 'react';
import { useDispatch } from 'react-redux';

import EditingButtonContainer from '../EditingButtonContainer/EditingButtonContainer';
import ClosePostListButton from '../ClosePostListButton/ClosePostListButton';
import TagsContainer from '../TagsContainer/TagsContainer';
import { deleteReadListPost } from '../../store/post/actions';
import * as s from '../PostInfo/PostInfo.styled';

const PostInfo = ({ type = 'regular', post, id, handleOpenPostById }) => {
  const dispatch = useDispatch();

  const handleDeletePostFromList = event => {
    event.stopPropagation();

    dispatch(deleteReadListPost(id));
  };

  return (
    <s.BorderWrraper onClick={() => handleOpenPostById(post.id)}>
      <TagsContainer tagsList={post?.tags}></TagsContainer>
      <h2>{post.title}</h2>
      {type === 'readList' ? (
        <ClosePostListButton handleDeletePostFromList={handleDeletePostFromList}></ClosePostListButton>
      ) : (
        <EditingButtonContainer post={post}></EditingButtonContainer>
      )}
    </s.BorderWrraper>
  );
};

export default PostInfo;
