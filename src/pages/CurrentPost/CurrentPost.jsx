import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux/es/exports';

import SideBar from '../../containers/SideBar';
import Title from '../../components/Title';
import EditingButtonContainer from '../../components/EditingButtonContainer/EditingButtonContainer';
import TagsContainer from '../../components/TagsContainer/TagsContainer';
import { loadCurrentPost, clearCurrentPost, removeSinglePostStart } from '../../store/post/actions';
import loadingImg from '../../assets/img/loading.gif';
import BackdropPopup from '../../components/BackdropPopup';
import PopupButtonsBlock from '../../components/PopupButtonsBlock';

import * as s from './CurrentPost.styled';

import { ReactComponent as ArrowBack } from '../../assets/svg/ArrowBack.svg';

const CurrentPost = () => {
  const dispatch = useDispatch();
  const post = useSelector(state => state.Posts.openedPost);
  const loading = useSelector(state => state.Posts.loadingCurrentPost);

  const navigate = useNavigate();

  const { id } = useParams();
  // console.log(id);
  // const params = useParams();
  // console.log(params);

  const handleLoadSinglePost = id => {
    // const payload = {
    //   postId: id,
    // };
    // dispatch(loadCurrentPost(payload));
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

  useEffect(() => {
    handleLoadSinglePost(id);
    return () => {
      dispatch(clearCurrentPost(post));
    };
  }, []);

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
          <EditingButtonContainer post={post} handleShowDeletePopup={handleShowDeletePopup}></EditingButtonContainer>
        </s.ButtonWrraper>
        <p>{post?.body}</p>
      </s.MainWrraper>
      {showDeletePopup && (
        <BackdropPopup>
          <s.PopupBlock>
            <p>Are you sure you want to remove this post?</p>
            <PopupButtonsBlock
              setShowDeletePopup={setShowDeletePopup}
              showDeletePopup={showDeletePopup}
              handleDeleteFromPosts={handleDeleteFromPosts}
            ></PopupButtonsBlock>
          </s.PopupBlock>
        </BackdropPopup>
      )}
    </>
  );
};

export default CurrentPost;
