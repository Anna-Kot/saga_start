import React from 'react';
import { ReactComponent as EditButton } from '../../assets/svg/EditButton.svg';

import * as s from './AdvanceInfo.styled';

const AdvanceInfo = () => {
  const TITLES_COLUMN = [
    'Advance ID',
    'Funded Amount',
    'Factor Rate',
    'Payback Amount',
    'Expected Term',
    'Expected End Date',
    'Commission',
    'UCC',
  ];

  return (
    <s.Pr>
      <s.MainWrraper>
        <s.TittleBlock>
          {TITLES_COLUMN.map(title => {
            return <s.Title key={title}>{title}</s.Title>;
          })}
        </s.TittleBlock>
        <s.ValueBlock>
          <s.Value>FA453454055</s.Value>
          <s.Value>$100,000</s.Value>
          <s.Value>1.25</s.Value>
          <s.Value>$125,000</s.Value>
          <s.Value>125 Days (6.25 Months)</s.Value>
          <s.Value>09/03/2022</s.Value>
          <s.Value>8% / $8000</s.Value>
          <s.Value>
            Not Filed
            {/* <EditButton className="edit-button" alt="edit" /> */}
          </s.Value>
          <EditButton className="edit-button" alt="edit" />
        </s.ValueBlock>
      </s.MainWrraper>
    </s.Pr>
  );
};

export default AdvanceInfo;
