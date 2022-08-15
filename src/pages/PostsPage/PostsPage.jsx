import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import PostInfo from '../../components//PostInfo';
import Title from '../../components/Title';
import SideBar from '../../containers/SideBar';
import loadingImg from '../../assets/img/loading.gif';
import PopupUpdateCreatePost from '../../components/PopupUpdateCreatePost';

import * as s from './PostsPage.styled';

const PostsPage = ({ bgBtnColor = '#1C67F0' }) => {
  const posts = useSelector(state => state.Posts.posts);
  console.log(posts);
  const loading = useSelector(state => state.Posts.loading);

  const navigate = useNavigate();

  const handleOpenPostById = id => navigate(`/posts/${id}`);

  const [showCreatePopup, setShowCreatePopup] = useState(false);
  const handleShowCreatePopup = event => {
    event.stopPropagation();
    setShowCreatePopup(!showCreatePopup);
  };

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
        <s.TestCreate onClick={handleShowCreatePopup} />
        <Title title="All Posts" />
        <s.PostsColumn>
          {posts.map(post => (
            <PostInfo key={post.id} id={post.id} post={post} handleOpenPostById={handleOpenPostById} />
          ))}
        </s.PostsColumn>
      </s.MainWrraper>
      {showCreatePopup && (
        <PopupUpdateCreatePost
          setShowCreatePopup={setShowCreatePopup}
          showCreatePopup={showCreatePopup}
          bgBtnColor={bgBtnColor}
        ></PopupUpdateCreatePost>
      )}
    </>
  );
};

export default PostsPage;
