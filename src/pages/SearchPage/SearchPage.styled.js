import styled from 'styled-components';
import { LIGHT_BLUE } from '../../styles/Globals.styled';

export const MainWrraper = styled.div`
  position: relative;
  width: 1640px;
  height: 100%;
  background-color: #ffffff;
  padding: 70px 0 0 230px;
`;

export const InputSearch = styled.input`
  width: 900px;
  height: 20px;
  border: none;
  outline: none;
  border-bottom: 2px solid ${LIGHT_BLUE};
  font: 400 20px/25px 'Montserrat';
  letter-spacing: 0.2px;
`;

export const PostsColumn = styled.div`
  width: 930px;
  height: 100vh;
  /* height: 820px; */
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
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
