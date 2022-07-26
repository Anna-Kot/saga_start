import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import SideBar from '../../containers/SideBar';
import Title from '../../components/Title';

import * as s from './CurrentPost.styled';

import { ReactComponent as ArrowBack } from '../../assets/svg/ArrowBack.svg';

const CurrentPost = () => {
  const navigate = useNavigate();
  // const params = useParams();
  const { id } = useParams();
  // console.log(params);
  console.log(id);

  return (
    <>
      <SideBar />
      <s.MainWrraper>
        <ArrowBack onClick={() => navigate('/posts')} />
        <Title />
      </s.MainWrraper>
    </>
  );
};

export default CurrentPost;
