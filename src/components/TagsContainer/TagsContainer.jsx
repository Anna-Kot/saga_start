import React from 'react';

import * as s from './TagsContainer.styled';

const TagsContainer = ({ tagsList }) => {
  // console.log(tagsList);
  return (
    <s.TagsWrapper className="tag-wrapper">
      {tagsList &&
        tagsList.map(tag => {
          return <s.TagBlock key={tag}>{tag}</s.TagBlock>;
        })}
      {/* <s.TagBlock>{post && post.tags[0]}</s.TagBlock>
      <s.TagBlock>{post && post.tags[1]}</s.TagBlock>
      <s.TagBlock>{post && post.tags[2]}</s.TagBlock> */}
      {/* <s.TagBlock>History</s.TagBlock>
      <s.TagBlock>American</s.TagBlock>
      <s.TagBlock>Crime</s.TagBlock> */}
    </s.TagsWrapper>
  );
};

export default TagsContainer;
