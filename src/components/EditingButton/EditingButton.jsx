import React from 'react';

import * as s from './EditingButton.styled';

const EditingButton = ({ IconComponent = () => null, onClickButton }) => {
  return (
    <s.ButtonContainer onClick={onClickButton}>
      <IconComponent />
    </s.ButtonContainer>
  );
};

export default EditingButton;
