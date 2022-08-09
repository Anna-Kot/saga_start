import styled from 'styled-components';
import { LIGHT_BLACK } from '../../styles/Globals.styled';

export const BorderWrraper = styled.div`
  width: 900px;
  height: 88px;
  border: 2px solid #f3f3f3;
  border-radius: 10px;
  margin-bottom: 20px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
  letter-spacing: 0.2px;

  &:nth-of-type(1) {
    margin-top: 44px;
  }

  h2 {
    font: 700 16px/20px 'Montserrat';
    color: ${LIGHT_BLACK};
    position: absolute;
    top: 51px;
    left: 15px;
    text-transform: uppercase;
    margin: 0;
  }

  .editing-button {
    display: none;
  }

  &:hover {
    border: 2px solid #cdcdcd;

    .editing-button {
      display: flex;
    }
  }

  .tag-wrapper {
    margin-left: 15px;
  }
`;

export const PopupBlock = styled.div`
  width: 800px;
  height: 310px;
  background: #ffffff;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    font: 600 24px/29px 'Inter';
    margin: 50px 0 0 50px;
  }
`;
