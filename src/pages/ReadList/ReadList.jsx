import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import SideBar from '../../containers/SideBar';
import Title from '../../components/Title';
import PostInfo from '../../components/PostInfo';

import { deleteCountReadListPost, deleteReadListPost, deleteReadListPost2 } from '../../store/post/actions';

import * as s from './ReadList.styled';

const ReadList = () => {
  // const posts = useSelector(state => state.Posts.posts);
  // console.log(posts);
  const readListPosts = useSelector(state => state.Posts.readListPosts);
  console.log(readListPosts);

  const navigate = useNavigate();

  const handleOpenPostById = id => navigate(`/posts/${id}`);

  // useEffect(() => {
  //   onLoad();
  // }, []);
  // name={item.name} onClick={handleRemoveItem}

  const [list, updateList] = useState(readListPosts);
  const dispatch = useDispatch();

  console.log('readListPosts', readListPosts);

  const handleDeletePostFromList = (e, count) => {
    const id = e.target.getAttribute('id');
    updateList(list.filter(item => item.id !== id));
    console.log('updateList', updateList);
    console.log('list', list);
    e.stopPropagation();
    dispatch(deleteCountReadListPost(count));
  };
  return (
    <>
      <SideBar />
      <s.MainWrraper>
        <Title title="Read List" />
        <s.PostsColumn>
          {list.map(post => (
            <PostInfo
              id={post.id}
              post={post}
              handleOpenPostById={handleOpenPostById}
              handleDeletePostFromList={handleDeletePostFromList}
              type="readList"
            />
          ))}
        </s.PostsColumn>
      </s.MainWrraper>
      ;
    </>
  );
};

export default ReadList;
