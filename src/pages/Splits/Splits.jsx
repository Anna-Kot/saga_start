import React from 'react';
import Select, { components } from 'react-select';
import { ReactComponent as ArrowDropdown } from '../../assets/svg/ArrowDropdown.svg';

import * as s from './Splits.styled';
const customStyles = {
  menu: (provided, state) => ({
    ...provided,
    maxWidth: '158px',
  }),
  control: base => ({
    ...base,
    font: '400 16px/18px Roboto',
    boxShadow: 'none',
    borderColor: 'hsl(0, 0%, 80%)',
    marginTop: '5px',
    maxWidth: '158px',
  }),
  valueContainer: provided => ({
    ...provided,
    padding: '5px 5px 2px 5px',
  }),
  indicatorSeparator: provided => ({
    ...provided,
    width: '0px',
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    transform: state.selectProps.menuIsOpen && 'rotate(180deg)',
  }),
};
const DropdownIndicator = props => {
  return (
    <components.DropdownIndicator {...props}>
      <ArrowDropdown label="ArrowDropdown" />
    </components.DropdownIndicator>
  );
};
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

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
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
      <Select
        styles={customStyles}
        options={options}
        components={{ DropdownIndicator }}
        placeholder="Select Source"
        className="select-active"
      />
    </s.MainWrraper>
  );
};

export default Splits;
