import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import SideBar from '../../containers/SideBar';
import PostInfo from '../../components//PostInfo';
import Title from '../../components/Title';

import * as s from './FilterPosts.styled';

const FilterPosts = () => {
  const filterPosts = useSelector(state => state.Posts.filterPosts);
  const filterTitle = useSelector(state => state.Posts.filterTitle);
  console.log(filterPosts);
  const navigate = useNavigate();

  const handleOpenPostById = id => navigate(`/posts/${id}`);

  return (
    <>
      <SideBar />
      <s.MainWrraper>
        <Title title={filterTitle} />
        <s.PostsColumn>
          {filterPosts &&
            filterPosts.map(post => <PostInfo key={post.id} post={post} handleOpenPostById={handleOpenPostById} />)}
        </s.PostsColumn>
      </s.MainWrraper>
    </>
  );
};

export default FilterPosts;
