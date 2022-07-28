import styled from 'styled-components';
import { SILVER } from '../../styles/Globals.styled';

export const MainWrraper = styled.div`
  position: relative;
  width: 1640px;
  height: 100%;
  padding: 70px 510px 0 230px;
`;
export const PostsColumn = styled.div`
  width: 930px;
  height: 820px;
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;
