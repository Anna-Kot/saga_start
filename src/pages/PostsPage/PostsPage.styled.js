import styled from 'styled-components';

export const MainWrraper = styled.div`
  width: 1639px;
  height: 100%;
  background-color: #f5f5f5;
`;
export const PostsColumn = styled.div`
  width: 930px;
  height: 840px;
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow-y: scroll;
  margin-left: 229px;

  &::-webkit-scrollbar {
    display: none;
  }
`;
