import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import SideBar from '../../containers/SideBar';
import PostInfo from '../../components//PostInfo';
import Title from '../../components/Title';
import { setFilterPosts } from '../../store/post/actions';

import * as s from './FilterPosts.styled';

const FilterPosts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const posts = useSelector(state => state.Posts.posts);
  const filterPosts = useSelector(state => state.Posts.filterPosts);
  const filterTitle = useSelector(state => state.Posts.filterTitle);
  console.log(filterPosts);

  const handleOpenPostById = id => navigate(`/posts/${id}`);

  useEffect(() => {
    dispatch(setFilterPosts(filterTitle));
  }, [posts]);

  return (
    <>
      <SideBar />
      <s.MainWrraper>
        <Title title={filterTitle} />
        <s.PostsColumn>
          {filterPosts.map(post => (
            <PostInfo key={post.id} post={post} handleOpenPostById={handleOpenPostById} />
          ))}
        </s.PostsColumn>
      </s.MainWrraper>
    </>
  );
};

export default FilterPosts;
