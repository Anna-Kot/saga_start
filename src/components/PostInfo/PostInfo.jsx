import React from 'react';

import * as s from './PostInfo.styled';
import EditingButton from '../../components/EditingButton';
import { ReactComponent as PinPost } from '../../assets/svg/PinPost.svg';
import { ReactComponent as EditPost } from '../../assets/svg/EditPost.svg';
import { ReactComponent as DeletePost } from '../../assets/svg/DeletePost.svg';

const PostInfo = ({ post, handleOpenPostById }) => {
  return (
    <s.BorderWrraper onClick={() => handleOpenPostById(post.id)}>
      <p>Sourse: CNN</p>
      <h2>{post.title}</h2>
      <s.ButtonsContainer>
        <EditingButton IconComponent={PinPost} />
        <EditingButton IconComponent={EditPost} />
        <EditingButton IconComponent={DeletePost} />
      </s.ButtonsContainer>
    </s.BorderWrraper>
  );
};

export default PostInfo;
