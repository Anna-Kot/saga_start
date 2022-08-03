import styled from 'styled-components';
import { SILVER } from '../../styles/Globals.styled';

export const MainWrraper = styled.div`
  position: relative;
  width: 1640px;
  height: 100%;
  padding: 70px 510px 0 230px;

  .arrow-back {
    cursor: pointer;
    position: absolute;
    left: 70px;
    top: 70px;
  }

  p {
    width: 900px;
    text-align: justify;
    font: 500 24px/36px 'Montserrat';
    letter-spacing: 0.2px;
    color: ${SILVER};
    margin-top: 55px;
  }
`;
export const ButtonWrraper = styled.div`
  width: 914px;
  height: 50px;
  position: relative;
`;
export const LoadingBlock = styled.div`
  position: absolute;
  width: 70%;
  left: 0px;
  top: 0px;
  height: 100%;
  text-align: center;
  background-color: white;
  z-index: 3;
  padding-top: 120px;
`;
export const LoadingText = styled.h1`
  position: absolute;
  left: 43%;
  margin-top: 83px;
`;
