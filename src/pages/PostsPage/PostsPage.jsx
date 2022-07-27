import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import PostInfo from '../../components//PostInfo';
import Title from '../../components/Title';
import SideBar from '../../containers/SideBar';

import * as s from './PostsPage.styled';

const PostsPage = ({ onLoad }) => {
  const posts = useSelector(state => state.Posts.posts);
  console.log(posts);

  const navigate = useNavigate();

  const handleOpenPostById = id => navigate(`/posts/${id}`);

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <>
      <SideBar />
      <s.MainWrraper>
        {/* PostsPage */}
        <Title title="All Posts" />
        <s.PostsColumn>
          {posts.map(post => (
            <PostInfo key={post.id} post={post} handleOpenPostById={handleOpenPostById} />
          ))}
        </s.PostsColumn>
      </s.MainWrraper>
    </>
  );
};

export default PostsPage;
