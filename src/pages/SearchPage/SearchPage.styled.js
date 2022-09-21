import styled from 'styled-components';
import { LIGHT_BLUE } from '../../styles/Globals.styled';

export const MainWrraper = styled.div`
  position: relative;
  width: 1640px;
  height: 100%;
  background-color: #ffffff;
  padding: 70px 0 0 230px;
`;

export const InputBlock = styled.div`
  position: relative;
  width: 900px;
  height: 20px;
`;
export const InputSearch = styled.input`
  padding: 0;
  margin: 0;
  width: 900px;
  height: 20px;
  border: none;
  outline: none;
  border-bottom: 2px solid ${LIGHT_BLUE};
  font: 400 20px/25px 'Montserrat';
  letter-spacing: 0.2px;
`;
export const LoadingImg = styled.img`
  position: absolute;
  width: 20px;
  height: auto;
  right: 3px;
  top: -3px;
  z-index: 3;
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
