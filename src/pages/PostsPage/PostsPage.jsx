import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import PostInfo from '../../components//PostInfo';
import Title from '../../components/Title';
import SideBar from '../../containers/SideBar';
import { loadPosts } from '../../store/post/actions';

import * as s from './PostsPage.styled';

const PostsPage = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.Posts.posts);
  // console.log(posts);
  const handleLoadPosts = id => {
    // const payload = {
    //   postId: id,
    // };

    // dispatch(loadCurrentPost(payload));

    dispatch(loadPosts());
  };

  useEffect(() => {
    handleLoadPosts();
  }, []);

  const navigate = useNavigate();

  const handleOpenPostById = id => navigate(`/posts/${id}`);

  useEffect(() => {
    handleLoadPosts();
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
