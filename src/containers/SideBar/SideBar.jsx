import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as s from './SideBar.styled';
import SideBarButton from '../../components/SideBarButton';
import { ReactComponent as ListBarIcon } from '../../assets/svg/ListBar.svg';
import { ReactComponent as ClipIcon } from '../../assets/svg/Clip.svg';
import { ReactComponent as PlusPost } from '../../assets/svg/PlusPost.svg';
import { ReactComponent as SearchIcon } from '../../assets/svg/Search.svg';

import PopupUpdateCreatePost from '../../components/PopupUpdateCreatePost';

const SIDEBAR_BUTTONS = [
  {
    text: 'All Posts',
    type: 'IconButton',
    IconComponent: ListBarIcon,
    path: '/posts',
    markerColor: null,
    tag: null,
  },
  {
    text: 'Read List',
    type: 'IconButton',
    IconComponent: ClipIcon,
    path: '/readlist',
    markerColor: null,
    tag: null,
  },
  {
    text: 'Search Posts',
    type: 'IconButton',
    IconComponent: SearchIcon,
    path: '/search',
    markerColor: null,
    tag: null,
  },
  {
    text: 'Classic',
    type: 'MarkerButton',
    IconComponent: null,
    path: '/filter-posts',
    markerColor: '#42b883',
    tag: 'Classic',
  },
  {
    text: 'English',
    type: 'MarkerButton',
    IconComponent: null,
    path: '/filter-posts',
    markerColor: '#64c4ed',
    tag: 'English',
  },
  {
    text: 'Fiction',
    type: 'MarkerButton',
    IconComponent: null,
    path: '/filter-posts',
    markerColor: '#ffbbcc',
    tag: 'Fiction',
  },
  {
    text: 'Add new post',
    type: 'IconButton',
    IconComponent: PlusPost,
    path: null,
    markerColor: null,
    tag: null,
  },
];

const SideBar = ({ bgBtnColor = '#1C67F0' }) => {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState('All Posts');

  const handleRedirect = path => {
    if (!path) return;
    navigate(path);
  };

  const [showCreatePopup, setShowCreatePopup] = useState(false);
  const handleShowCreatePopup = () => {
    setShowCreatePopup(!showCreatePopup);
  };

  return (
    <s.MainWrraper>
      {SIDEBAR_BUTTONS.map(({ text, type, tag, path, markerColor, IconComponent }) => {
        return (
          <SideBarButton
            key={text}
            onNavigate={() => handleRedirect(path)}
            IconComponent={IconComponent}
            type={type}
            text={text}
            tag={tag}
            markerColor={markerColor}
            activeButton={activeButton}
            setActiveButton={setActiveButton}
            handleShowCreatePopup={handleShowCreatePopup}
            showCreatePopup={showCreatePopup}
          />
        );
      })}

      {showCreatePopup && (
        <PopupUpdateCreatePost
          setShowCreatePopup={setShowCreatePopup}
          showCreatePopup={showCreatePopup}
          bgBtnColor={bgBtnColor}
        ></PopupUpdateCreatePost>
      )}
    </s.MainWrraper>
  );
};

export default SideBar;
