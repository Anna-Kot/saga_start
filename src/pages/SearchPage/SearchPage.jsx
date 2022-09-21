import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import SideBar from '../../containers/SideBar';
import loadingImg from '../../assets/img/loadingSearch.gif';
import PostInfo from '../../components//PostInfo';
import { loadSearchPostsStart } from '../../store/post/actions';

import * as s from './SearchPage.styled';

const SearchPage = () => {
  const loading = useSelector(state => state.Posts.loadingSearchPost);
  const filterSearchPost = useSelector(state => state.Posts.filterSearchPost);
  console.log(filterSearchPost);
  const navigate = useNavigate();

  const handleOpenPostById = id => navigate(`/posts/${id}`);
  const dispatch = useDispatch();
  let search = '';

  function processSearch(event) {
    search = event.currentTarget.value.toLowerCase();
    console.log(search);
    dispatch(loadSearchPostsStart(search));
  }
  return (
    <>
      <SideBar />
      <s.MainWrraper>
        <s.InputBlock>
          <s.InputSearch type="text" placeholder="Search..." onKeyUp={processSearch} />
          {loading && <s.LoadingImg src={loadingImg} alt="loading..." />}
        </s.InputBlock>

        <s.PostsColumn>
          {filterSearchPost.map(post => (
            <PostInfo key={post.id} id={post.id} post={post} handleOpenPostById={handleOpenPostById} />
          ))}
        </s.PostsColumn>
      </s.MainWrraper>
    </>
  );
};

export default SearchPage;
