import React from 'react';
import { useNavigate } from 'react-router-dom';

import * as s from './SideBar.styled';
import SideBarButton from '../../components/SideBarButton';
import { ReactComponent as ListBarIcon } from '../../assets/svg/ListBar.svg';
import { ReactComponent as ClipIcon } from '../../assets/svg/Clip.svg';
import { ReactComponent as PlusPost } from '../../assets/svg/PlusPost.svg';

const SideBar = () => {
  const navigate = useNavigate();
  return (
    <s.MainWrraper>
      <SideBarButton IconComponent={ListBarIcon} type="IconButton" text="All Posts" />
      <SideBarButton IconComponent={ClipIcon} type="IconButton" text="Read List" />

      <SideBarButton markerColor="#42b883" type="MarkerButton" text="Classic" />
      <SideBarButton markerColor="#64c4ed" type="MarkerButton" text="English" />
      <SideBarButton markerColor="#ffbbcc" type="MarkerButton" text="Fiction" />

      <SideBarButton IconComponent={PlusPost} type="IconButton" text="Add new post" />
    </s.MainWrraper>
  );
};

export default SideBar;
