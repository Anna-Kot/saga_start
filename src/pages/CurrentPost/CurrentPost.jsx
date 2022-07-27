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

  console.log(post);

  const navigate = useNavigate();

  const { id } = useParams();
  console.log(id);

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
        <Title />
        <s.ButtonWrraper>
          <TagsContainer tagsList={post?.tags}></TagsContainer>
          <EditingButtonContainer></EditingButtonContainer>
        </s.ButtonWrraper>
        <p>
          Dave wasn't exactly sure how he had ended up in this predicament. He ran through all the events that had lead
          to this current situation and it still didn't make sense. He wanted to spend some time to try and make sense
          of it all, but he had higher priorities at the moment. The first was how to get out of his current situation
          of being naked in a tree with snow falling all around and no way for him to get down.
        </p>
      </s.MainWrraper>
    </>
  );
};

export default CurrentPost;
