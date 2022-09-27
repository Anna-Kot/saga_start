import React from 'react';

import * as s from './Performance.styled';

const Performance = () => {
  const TITLES_COLUMN = [
    'Total Paid',
    'Cleared Balance',
    'Pending Balance',
    'Percentage Paid',
    'Performance',
    'NSF/Fees',
  ];
  return (
    <s.MainWrraper>
      <s.TittleBlock>
        {TITLES_COLUMN.map(title => {
          return <s.Title key={title}>{title}</s.Title>;
        })}
      </s.TittleBlock>
      <s.ValueBlock>
        <s.Value>$21,000.00</s.Value>
        <s.Value>$105,000</s.Value>
        <s.Value>$104,000</s.Value>
        <s.Value>16.8%</s.Value>
        <s.Value>106%</s.Value>
        <s.Value>2/$100</s.Value>
      </s.ValueBlock>
    </s.MainWrraper>
  );
};

export default Performance;
