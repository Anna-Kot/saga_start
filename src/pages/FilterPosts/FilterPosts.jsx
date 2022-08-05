import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import SideBar from '../../containers/SideBar';
import PostInfo from '../../components//PostInfo';
import Title from '../../components/Title';
import { setFilterPosts } from '../../store/post/actions';
import loadingImg from '../../assets/img/loading.gif';
import * as s from './FilterPosts.styled';

const FilterPosts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const posts = useSelector(state => state.Posts.posts);
  const loading = useSelector(state => state.Posts.loading);
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
        {loading && (
          <s.LoadingBlock>
            <s.LoadingText>...loading</s.LoadingText>
            <img src={loadingImg} alt="loading..." />
          </s.LoadingBlock>
        )}
        <Title title={filterTitle} />
        <s.PostsColumn>
          {filterPosts.map(post => (
            <PostInfo key={post.id}  id={post.id} post={post} handleOpenPostById={handleOpenPostById} />
          ))}
        </s.PostsColumn>
      </s.MainWrraper>
    </>
  );
};

export default FilterPosts;
