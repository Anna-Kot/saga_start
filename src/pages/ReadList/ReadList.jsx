import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import SideBar from '../../containers/SideBar';
import Title from '../../components/Title';
import PostInfo from '../../components/PostInfo';

import * as s from './ReadList.styled';

const ReadList = () => {
  const posts = useSelector(state => state.Posts.posts);
  console.log(posts);
  const readListPosts = useSelector(state => state.Posts.readListPosts);
  console.log(readListPosts);

  const navigate = useNavigate();

  const handleOpenPostById = id => navigate(`/posts/${id}`);

  // useEffect(() => {
  //   onLoad();
  // }, []);

  return (
    <>
      <SideBar />
      <s.MainWrraper>
        <Title title="Read List" />
        <s.PostsColumn>
          {readListPosts.map(post => (
            <PostInfo key={post.id} post={post} handleOpenPostById={handleOpenPostById} type="readList" />
          ))}
        </s.PostsColumn>
      </s.MainWrraper>
      ;
    </>
  );
};

export default ReadList;
