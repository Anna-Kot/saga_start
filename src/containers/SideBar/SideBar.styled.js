import styled from 'styled-components';
import { LIGHT_GRAY } from '../../styles/Globals.styled';

const BaseButtonElement = styled.button`
  position: relative;
  width: 220px;
  height: 50px;
  // margin: 0;
  background-color: transparent;
  // background-color: white;
  border-radius: 6px;
  cursor: pointer;
  border: none;
  // margin-bottom: 8px;
  margin-left: 30px;

  div {
    position: absolute;
    top: 20px;
    left: 24px;
  }
  div.number-lists {
    top: 13px;
    left: inherit;
    right: 41px;
    width: 32px;
    height: 24px;
    text-align: center;
    color: #ffffff;
    background-color: #2b6de6;
    font: 700 14px/17px 'Inter';
    padding: 3px 5px;
    box-sizing: border-box;
    border-radius: 4px;
  }
`;

export const MainWrraper = styled.div`
  width: 281px;
  height: 100%;
  padding: 70px 30px;
  background-color: ${LIGHT_GRAY};
`;

export const NumberOfList = styled.div`
  position: absolute;
  top: 5px;
  right: 10px;
  width: 32px;
  height: 24px;
  text-align: center;
  color: #ffffff;
  background-color: #2b6de6;
  font: 700 14px/17px 'Inter';
  padding: 3px 5px;
  box-sizing: border-box;
  border-radius: 4px;
`;
