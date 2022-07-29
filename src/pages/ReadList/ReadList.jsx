import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import SideBar from '../../containers/SideBar';
import Title from '../../components/Title';
import PostInfo from '../../components/PostInfo';

import * as s from './ReadList.styled';

const ReadList = () => {
  const navigate = useNavigate();
  const list = useSelector(state => state.Posts.readListPosts);

  const handleOpenPostById = id => navigate(`/posts/${id}`);

  return (
    <>
      <SideBar />
      <s.MainWrraper>
        <Title title="Read List" />
        <s.PostsColumn>
          {list &&
            list.map(post => (
              <PostInfo id={post.id} post={post} handleOpenPostById={handleOpenPostById} type="readList" />
            ))}
        </s.PostsColumn>
      </s.MainWrraper>
      ;
    </>
  );
};

export default ReadList;
