import React, { useEffect } from 'react';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import SideBar from '../../containers/SideBar';
import PostInfo from '../../components//PostInfo';
import { loadSearchPostsStartSelect, clearSearchPostSelect } from '../../store/post/actions';
import { postMapper } from '../../utils/mappers';

import * as s from './SearchPageReactSelect.styled';

const SearchPageReactSelect = () => {
  const filterSearchPostSelect = useSelector(state => state.Posts.filterSearchPostSelect);
  const posts = useSelector(state => state.Posts.posts);
  console.log(posts);
  console.log(filterSearchPostSelect);
  const navigate = useNavigate();

  const handleOpenPostById = id => navigate(`/posts/${id}`);
  const dispatch = useDispatch();
  let search = '';
  function processSearch(event) {
    search = event.label;
    console.log(search);
    dispatch(loadSearchPostsStartSelect(search));
  }
  // const postMapper = post => ({
  //   label: post.title,
  //   value: post.id,
  // });
  const postOptions = posts.map(postMapper);

  useEffect(() => {
    return () => {
      dispatch(clearSearchPostSelect(filterSearchPostSelect));
    };
  }, []);

  return (
    <>
      <SideBar />
      <s.MainWrraper>
        <Select options={postOptions} className="select" onChange={processSearch} />
        <s.PostsColumn>
          {filterSearchPostSelect.map(post => (
            <PostInfo key={post.id} id={post.id} post={post} handleOpenPostById={handleOpenPostById} />
          ))}
        </s.PostsColumn>
      </s.MainWrraper>
    </>
  );
};

export default SearchPageReactSelect;
