import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux/es/exports';

import SideBar from '../../containers/SideBar';
import Title from '../../components/Title';
import EditingButtonContainer from '../../components/EditingButtonContainer/EditingButtonContainer';
import TagsContainer from '../../components/TagsContainer/TagsContainer';
import { loadCurrentPost, clearCurrentPost, removeSinglePostStart } from '../../store/post/actions';
import loadingImg from '../../assets/img/loading.gif';
import PopupDeletePost from '../../components/PopupDeletePost';
import PopupUpdateCreatePost from '../../components/PopupUpdateCreatePost';

import * as s from './CurrentPost.styled';

import { ReactComponent as ArrowBack } from '../../assets/svg/ArrowBack.svg';

const CurrentPost = ({ bgBtnColor = '#1C67F0' }) => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.Posts.posts);
  const post = useSelector(state => state.Posts.openedPost);
  const loading = useSelector(state => state.Posts.loadingCurrentPost);

  const navigate = useNavigate();

  const { id } = useParams();

  const handleLoadSinglePost = id => {
    dispatch(loadCurrentPost({ id }));
  };
  const handleCloseCurrentPost = () => {
    navigate('/posts');
  };
  const handleDeleteFromPosts = event => {
    event.stopPropagation();

    dispatch(removeSinglePostStart(post));
    navigate('/posts');
  };

  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const handleShowDeletePopup = event => {
    event.stopPropagation();
    setShowDeletePopup(!showDeletePopup);
  };
  const [showUpdatePopup, setShowUpdatePopup] = useState(false);
  const handleShowUpdatePopup = event => {
    event.stopPropagation();
    setShowUpdatePopup(!showUpdatePopup);
    console.log(post);
  };

  useEffect(() => {
    handleLoadSinglePost(id);
    return () => {
      dispatch(clearCurrentPost(post));
    };
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
        <ArrowBack className="arrow-back" onClick={handleCloseCurrentPost} />
        <Title title={post?.title} />
        <s.ButtonWrraper>
          <TagsContainer tagsList={post?.tags}></TagsContainer>
          <EditingButtonContainer
            post={post}
            handleShowDeletePopup={handleShowDeletePopup}
            handleShowUpdatePopup={handleShowUpdatePopup}
          ></EditingButtonContainer>
        </s.ButtonWrraper>
        <p>{post?.body}</p>
      </s.MainWrraper>
      {showDeletePopup && (
        <PopupDeletePost
          setShowDeletePopup={setShowDeletePopup}
          showDeletePopup={showDeletePopup}
          handleDeleteFromPosts={handleDeleteFromPosts}
          id={id}
        ></PopupDeletePost>
      )}

      {showUpdatePopup && (
        <PopupUpdateCreatePost
          setShowUpdatePopup={setShowUpdatePopup}
          showUpdatePopup={showUpdatePopup}
          bgBtnColor={bgBtnColor}
          post={post}
        ></PopupUpdateCreatePost>
      )}
    </>
  );
};

export default CurrentPost;
