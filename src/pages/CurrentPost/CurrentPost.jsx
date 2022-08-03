import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux/es/exports';

import SideBar from '../../containers/SideBar';
import Title from '../../components/Title';
import EditingButtonContainer from '../../components/EditingButtonContainer/EditingButtonContainer';
import TagsContainer from '../../components/TagsContainer/TagsContainer';
import { loadCurrentPost, clearCurrentPost } from '../../store/post/actions';
import loadingImg from '../../assets/img/loading.gif';

import * as s from './CurrentPost.styled';

import { ReactComponent as ArrowBack } from '../../assets/svg/ArrowBack.svg';

const CurrentPost = () => {
  const dispatch = useDispatch();
  const post = useSelector(state => state.Posts.openedPost);
  const loading = useSelector(state => state.Posts.loadingCurrentPost);
  // console.log(post);

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
          <EditingButtonContainer post={post}></EditingButtonContainer>
        </s.ButtonWrraper>
        <p>{post?.body}</p>
      </s.MainWrraper>
    </>
  );
};

export default CurrentPost;
