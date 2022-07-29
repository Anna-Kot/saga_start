import React from 'react';

import EditingButtonContainer from '../EditingButtonContainer/EditingButtonContainer';
import ClosePostListButton from '../ClosePostListButton/ClosePostListButton';
import TagsContainer from '../TagsContainer/TagsContainer';

import * as s from '../PostInfo/PostInfo.styled';

const PostInfo = ({ type = 'regular', post, id, handleOpenPostById, handleDeletePostFromList }) => {
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
