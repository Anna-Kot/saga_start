import React, { useEffect } from 'react';
import Select, { components } from 'react-select';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import SideBar from '../../containers/SideBar';
import PostInfo from '../../components//PostInfo';
import { loadSearchPostsStartSelect, clearSearchPostSelect } from '../../store/post/actions';
import { postMapper } from '../../utils/mappers';

import * as s from './SearchPageReactSelect.styled';

const customStyles = {
  menu: (provided, state) => ({
    ...provided,
    borderBottom: '1px dotted pink',
    color: state.selectProps.menuColor,
    padding: 20,
  }),
  control: (base, { selectProps: { padding } }) => ({
    ...base,
    boxShadow: 'none',
    border: '2px solid red',
    padding: `${padding ? padding : ''}`,
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    transform: state.selectProps.menuIsOpen && 'rotate(180deg)',
  }),
  singleValue: provided => ({
    ...provided,
    color: '#0f7e21',
  }),
};
const DropdownIndicator = props => {
  return components.DropdownIndicator && <components.DropdownIndicator {...props}></components.DropdownIndicator>;
};

const DropdownIndicatorPlaceholder = () => {
  return null;
};

const SearchPageReactSelect = ({ hideArrow = false }) => {
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
        <Select
          menuColor="purple"
          options={postOptions}
          styles={customStyles}
          components={{
            DropdownIndicator: hideArrow ? DropdownIndicatorPlaceholder : DropdownIndicator,
          }}
          className="select"
          onChange={processSearch}
        />
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
