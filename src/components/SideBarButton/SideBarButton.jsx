import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setFilterPosts } from '../../store/post/actions';

import * as s from './SideBarButton.styled';

/* 
  IconButton
  MarkerButton
*/
const SidebarButton = ({
  type = '',
  text = '',
  tag = '',
  markerColor = '',
  activeButton,
  setActiveButton,
  handleShowCreatePopup,
  showCreatePopup,
  onNavigate = () => null,
  IconComponent = () => null,
}) => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.Posts.countOfList);
  const filterPosts = useSelector(state => state.Posts.filterPosts);
  // console.log(filterPosts);
  const handleButtonOnClick = () => {
    if (text === 'Add new post') {
      handleShowCreatePopup();
    } else {
      setActiveButton(text);
      onNavigate();
      console.log(tag);
      console.log(filterPosts);
      if (tag !== null) {
        dispatch(setFilterPosts(tag));
      }
    }
  };

  return (
    <s.ButtonContainer onClick={handleButtonOnClick} activeButton={activeButton === text} tag={tag}>
      {type === 'IconButton' ? <IconComponent /> : <s.CircleIcon style={{ background: markerColor }} />}
      <s.ButtonText>{text}</s.ButtonText>
      {text === 'Read List' && <s.NumberOfList>{count}</s.NumberOfList>}
    </s.ButtonContainer>
  );
};

export default SidebarButton;
