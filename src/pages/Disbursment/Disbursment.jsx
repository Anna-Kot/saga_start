import React from 'react';

import * as s from './Disbursment.styled';

const Disbursment = () => {
  const HEADER_TABLE = ['Transaction', '% of funding', 'Amount', 'Info'];

  const INFO_BLOCK = [
    {
      title: 'Funded Amount',
      percent: '',
      amount: '$100,000',
      info: '',
    },
    {
      title: 'Orgination Fee',
      percent: '5%',
      amount: '($5,000)',
      info: '',
    },
    {
      title: 'Underwriting Fee',
      percent: '',
      amount: '($295)',
      info: '',
    },
    {
      title: 'Fox Balance Transfer',
      percent: '',
      amount: '($16,500)',
      info: 'Advance 434454534',
    },
    {
      title: 'PSF',
      percent: '',
      amount: '($2,500)',
      info: '',
    },
  ];

  const TOTAL_REMAINDER = [
    {
      title: 'Disbursed from Fox Chase',
      persent: '',
      amount: '$40,000',
    },
    {
      title: 'Total Remaining',
      persent: '',
      amount: '$35,000',
    },
  ];

  return (
    <s.MainWrraper>
      <s.HeaderBlock>
        {HEADER_TABLE.map(header => {
          return <s.Header key={header}>{header}</s.Header>;
        })}
      </s.HeaderBlock>
      {INFO_BLOCK.map(({ title, percent, amount, info }) => {
        return (
          <s.InfoBlock key={title}>
            <s.Title>{title}</s.Title>
            <s.PerCent>{percent}</s.PerCent>
            <s.Amount>{amount}</s.Amount>
            <s.Info>{info}</s.Info>
          </s.InfoBlock>
        );
      })}
      <s.TotalBlock>
        <s.Title className="title-bold">Total Net Fund</s.Title>
        <s.PerCent></s.PerCent>
        <s.Amount>$75,410</s.Amount>
        <s.Info></s.Info>
      </s.TotalBlock>
      {/* {TOTAL_REMAINDER.map(({ title, percent, amount }) => {
        return (
          <s.TotalRemainder key={title}>
            {title === 'Disbursed from Fox Chase' ? (
              <s.Title className="underline">{title}</s.Title>
            ) : (
              <s.Title>{title}</s.Title>
            )}
            <s.PerCent>{percent}</s.PerCent>
            <s.Amount>{amount}</s.Amount>
            {title === 'Total Remaining' && <button>Add Disbursment</button>}
          </s.TotalRemainder>
        );
      })} */}
    </s.MainWrraper>
  );
};

export default Disbursment;
