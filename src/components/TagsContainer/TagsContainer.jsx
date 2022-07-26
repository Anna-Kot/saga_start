import React from 'react';

import * as s from './TagsContainer.styled';

const TagsContainer = ({ post }) => {
  return (
    <s.TagsWrapper className="tag-wrapper">
      {/* <s.TagBlock>{post.tags[0]}</s.TagBlock>
      <s.TagBlock>{post.tags[1]}</s.TagBlock>
      <s.TagBlock>{post.tags[2]}</s.TagBlock> */}
      <s.TagBlock>History</s.TagBlock>
      <s.TagBlock>American</s.TagBlock>
      <s.TagBlock>Crime</s.TagBlock>
    </s.TagsWrapper>
  );
};

export default TagsContainer;
