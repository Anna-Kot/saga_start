import React from 'react';

import * as s from './EditingButtonContainer.styled';
import EditingButton from '../../components/EditingButton';
import { ReactComponent as PinPost } from '../../assets/svg/PinPost.svg';
import { ReactComponent as EditPost } from '../../assets/svg/EditPost.svg';
import { ReactComponent as DeletePost } from '../../assets/svg/DeletePost.svg';

const EditingButtonContainer = () => {
  return (
    <s.ButtonsContainer className="editing-button">
      <EditingButton IconComponent={PinPost} />
      <EditingButton IconComponent={EditPost} />
      <EditingButton IconComponent={DeletePost} />
    </s.ButtonsContainer>
  );
};

export default EditingButtonContainer;
