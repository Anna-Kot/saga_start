import React from 'react';

import * as s from './EditingButton.styled';

const EditingButton = ({ IconComponent = () => null, onClickButton }) => {
  // console.log(postId);
  return (
    <s.ButtonContainer onClick={onClickButton}>
      <IconComponent />
    </s.ButtonContainer>
  );
};

export default EditingButton;
