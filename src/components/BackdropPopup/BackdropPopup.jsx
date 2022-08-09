import React from 'react';

import * as s from './BackdropPopup.styled';

const BackdropPopup = ({ children }) => {
  return <s.BackdropContainer>{children}</s.BackdropContainer>;
};

export default BackdropPopup;
