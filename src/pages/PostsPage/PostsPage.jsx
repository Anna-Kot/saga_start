import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import PostInfo from '../../components//PostInfo';
import Title from '../../components/Title';

import * as s from './PostsPage.styled';

const PostsPage = ({ onLoad }) => {
  const posts = useSelector(state => state.posts);
  console.log(posts);

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <s.MainWrraper>
      {/* PostsPage */}
      <Title />
      <s.PostsColumn>
        {posts.map(post => (
          <PostInfo key={post.id} post={post} />
        ))}
      </s.PostsColumn>
    </s.MainWrraper>
  );
};

export default PostsPage;
