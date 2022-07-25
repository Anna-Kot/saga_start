import React from 'react';

import * as s from './EditingButton.styled';

const EditingButton = ({ IconComponent = () => null }) => {
  return (
    <s.ButtonContainer>
      <IconComponent />
    </s.ButtonContainer>
  );
};

export default EditingButton;
