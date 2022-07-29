import React from 'react';
import { useDispatch } from 'react-redux';

import { setReadListPost } from '../../store/post/actions';
import EditingButton from '../../components/EditingButton';

import * as s from './EditingButtonContainer.styled';
import { ReactComponent as PinPost } from '../../assets/svg/PinPost.svg';
import { ReactComponent as EditPost } from '../../assets/svg/EditPost.svg';
import { ReactComponent as DeletePost } from '../../assets/svg/DeletePost.svg';

const EditingButtonContainer = ({ post }) => {
  const dispatch = useDispatch();

  const addPostToList = (event, count) => {
    event.stopPropagation();
    dispatch(setReadListPost(post));
  };

  return (
    <s.ButtonsContainer className="editing-button">
      <EditingButton IconComponent={PinPost} onClickButton={addPostToList} />
      <EditingButton IconComponent={EditPost} />
      <EditingButton IconComponent={DeletePost} />
    </s.ButtonsContainer>
  );
};

export default EditingButtonContainer;
