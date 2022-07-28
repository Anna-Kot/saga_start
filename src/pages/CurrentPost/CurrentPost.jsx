import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux/es/exports';

import SideBar from '../../containers/SideBar';
import Title from '../../components/Title';
import EditingButtonContainer from '../../components/EditingButtonContainer/EditingButtonContainer';
import TagsContainer from '../../components/TagsContainer/TagsContainer';
import { loadCurrentPost } from '../../store/post/actions';

import * as s from './CurrentPost.styled';

import { ReactComponent as ArrowBack } from '../../assets/svg/ArrowBack.svg';

const CurrentPost = ({ onLoad }) => {
  const dispatch = useDispatch();
  const post = useSelector(state => state.Posts.openedPost);

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

  useEffect(() => {
    handleLoadSinglePost(id);
  }, []);

  return (
    <>
      <SideBar />
      <s.MainWrraper>
        <ArrowBack className="arrow-back" onClick={() => navigate('/posts')} />
        <Title title={post?.title} />
        <s.ButtonWrraper>
          <TagsContainer tagsList={post?.tags}></TagsContainer>
          <EditingButtonContainer></EditingButtonContainer>
        </s.ButtonWrraper>
        <p>{post?.body}</p>
      </s.MainWrraper>
    </>
  );
};

export default CurrentPost;
