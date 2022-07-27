import React from 'react';

import * as s from './Title.styled';

const Title = ({ title }) => {
  return <s.TitleWrapper>{title}</s.TitleWrapper>;
};

export default Title;
