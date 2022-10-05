import React from 'react';

import * as s from './Splits.styled';

const Splits = () => {
  const HEADER_TABLE = [
    'Status',
    'Start Date',
    'End Date',
    'No. Payments',
    'Frequency',
    'Payment Amount',
    'Account',
    'Funder Account',
    'Payments/NSF',
  ];

  const INFO_BLOCK = [
    {
      status: 'Pending',
      startDate: '03/02/2022',
      endDate: 'Open',
      paymentsN: 'Open',
      frequency: 'Daily',
      paymentAmount: '$1000.00',
      account: 'Bank of America - 8454',
      funderAccount: 'Fifth Third - Fox',
      paymentsNSF: '0/0',
    },
    {
      status: 'Pending',
      startDate: '03/02/2022',
      endDate: 'Open',
      paymentsN: 'Open',
      frequency: 'Daily',
      paymentAmount: '$1000.00',
      account: 'Bank of America - 8454',
      funderAccount: 'Fifth Third - Fox',
      paymentsNSF: '0/0',
    },
  ];

  return (
    <s.MainWrraper>
      <s.HeaderBlock>
        {HEADER_TABLE.map(header => {
          return <s.Header key={header}>{header}</s.Header>;
        })}
      </s.HeaderBlock>
      {INFO_BLOCK.map(
        ({ status, startDate, endDate, paymentsN, frequency, paymentAmount, account, funderAccount, paymentsNSF }) => {
          return (
            <s.InfoBlock key={funderAccount} className="last-line">
              <s.Info>{status}</s.Info>
              <s.Info>{startDate}</s.Info>
              <s.Info>{endDate}</s.Info>
              <s.Info>{paymentsN}</s.Info>
              <s.Info>{frequency}</s.Info>
              <s.Info>{paymentAmount}</s.Info>
              <s.Info>{account}</s.Info>
              <s.Info>{funderAccount}</s.Info>
              <s.Info>{paymentsNSF}</s.Info>
              <button>Update Plan</button>
            </s.InfoBlock>
          );
        },
      )}
    </s.MainWrraper>
  );
};

export default Splits;
