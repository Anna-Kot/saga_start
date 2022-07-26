import React from 'react';

import EditingButtonContainer from '../EditingButtonContainer/EditingButtonContainer';
import TagsContainer from '../TagsContainer/TagsContainer';

import * as s from '../PostInfo/PostInfo.styled';

const PostInfo = ({ post, handleOpenPostById }) => {
  return (
    <s.BorderWrraper onClick={() => handleOpenPostById(post.id)}>
      <TagsContainer post={post}></TagsContainer>
      <h2>{post.title}</h2>
      <EditingButtonContainer></EditingButtonContainer>
    </s.BorderWrraper>
  );
};

export default PostInfo;
