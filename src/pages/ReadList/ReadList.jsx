import React from 'react';

import SideBar from '../../containers/SideBar';
import Title from '../../components/Title';

import * as s from './ReadList.styled';

const ReadList = () => {
  return (
    <>
      <SideBar />
      <s.MainWrraper>
        <Title title="Read List" />
      </s.MainWrraper>
      ;
    </>
  );
};

export default ReadList;
