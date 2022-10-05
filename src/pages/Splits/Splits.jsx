import React from 'react';

import * as s from './Splits.styled';

const Splits = () => {
  const HEADER_TABLE = ['Split Source', 'Amount', 'Split', 'Split Amount', 'Recipient'];

  const INFO_BLOCK = [
    {
      source: 'Orgination Fee',
      amount: '$5000',
      split: '50%',
      splitAmount: '$2,500',
      recipient: 'JP High Risk',
    },
    {
      source: 'ISO Commission',
      amount: '$8,000 (8%)',
      split: '1 pt',
      splitAmount: '$1,000',
      recipient: 'Fox Capital',
    },
    {
      source: 'PSF',
      amount: '$2,500',
      split: '',
      splitAmount: '$2,000',
      recipient: 'Blue Brick Funders',
    },
  ];

  return (
    <s.MainWrraper>
      <s.HeaderBlock>
        {HEADER_TABLE.map(header => {
          return <s.Header key={header}>{header}</s.Header>;
        })}
      </s.HeaderBlock>
      {INFO_BLOCK.map(({ source, amount, split, splitAmount, recipient }) => {
        return (
          <s.InfoBlock key={source} className="last-line">
            <s.Info>{source}</s.Info>
            <s.Info>{amount}</s.Info>
            <s.Info>{split}</s.Info>
            <s.Info>{splitAmount}</s.Info>
            <s.Info>{recipient}</s.Info>
            <s.EditBtn></s.EditBtn>
            <s.CloseBtn></s.CloseBtn>
          </s.InfoBlock>
        );
      })}
    </s.MainWrraper>
  );
};

export default Splits;
