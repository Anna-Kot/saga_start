import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { setFilterSearchPosts } from '../../store/post/actions';
import SideBar from '../../containers/SideBar';
import loadingImg from '../../assets/img/loading.gif';
import PostInfo from '../../components//PostInfo';

import * as s from './SearchPage2.styled';
import { useEffect } from 'react';

const SearchPage2 = () => {
  const posts = useSelector(state => state.Posts.posts);
  const filterSearchPost = useSelector(state => state.Posts.filterSearchPost);
  console.log(posts);
  console.log(filterSearchPost);
  const loading = useSelector(state => state.Posts.loading);

  const navigate = useNavigate();

  const handleOpenPostById = id => navigate(`/posts/${id}`);
  const dispatch = useDispatch();
  let search = '';

  function processSearch(event) {
    search = event.currentTarget.value.toLowerCase();
    console.log(search);
    dispatch(setFilterSearchPosts(search));
  }
  // useEffect(() => {
  //   dispatch(setFilterSearchPosts(search));
  // }, []);

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
        <s.InputSearch type="text" placeholder="Search..." onKeyUp={processSearch} />
        <s.PostsColumn>
          {filterSearchPost.map(post => (
            <PostInfo key={post.id} id={post.id} post={post} handleOpenPostById={handleOpenPostById} />
          ))}
        </s.PostsColumn>
      </s.MainWrraper>
    </>
  );
};

export default SearchPage2;
