import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import SideBar from '../../containers/SideBar';
import PostInfo from '../../components//PostInfo';
import Title from '../../components/Title';
import { loadPosts } from '../../store/post/actions';

import * as s from './FilterPosts.styled';

const FilterPosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.Posts.posts);

  const handleLoadPosts = id => {
    dispatch(loadPosts());
  };

  const navigate = useNavigate();

  const handleOpenPostById = id => navigate(`/posts/${id}`);

  useEffect(() => {
    handleLoadPosts();
  }, []);
  return (
    <>
      <SideBar />
      <s.MainWrraper>
        <Title title="Classic" />
        <s.PostsColumn>
          {posts.map(post => (
            <PostInfo key={post.id} post={post} handleOpenPostById={handleOpenPostById} />
          ))}
        </s.PostsColumn>
      </s.MainWrraper>
    </>
  );
};

export default FilterPosts;
