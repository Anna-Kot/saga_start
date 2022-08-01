import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import SideBar from '../../containers/SideBar';
import Title from '../../components/Title';
import PostInfo from '../../components/PostInfo';

import * as s from './ReadList.styled';

const ReadList = () => {
  const navigate = useNavigate();
  const readList = useSelector(state => state.Posts.readListPosts);
  console.log(readList);
  const handleOpenPostById = id => navigate(`/posts/${id}`);

  return (
    <>
      <SideBar />
      <s.MainWrraper>
        <Title title="Read List" />
        {!readList.length < 1 ? '' : <p>Please, add the Post to Read List</p>}
        <s.PostsColumn>
          {readList &&
            readList.map(post => (
              <PostInfo id={post.id} post={post} handleOpenPostById={handleOpenPostById} type="readList" />
            ))}
        </s.PostsColumn>
      </s.MainWrraper>
      ;
    </>
  );
};

export default ReadList;
