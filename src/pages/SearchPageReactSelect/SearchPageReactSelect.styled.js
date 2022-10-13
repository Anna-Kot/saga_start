import styled from 'styled-components';

export const MainWrraper = styled.div`
  position: relative;
  width: 1640px;
  height: 100%;
  background-color: #ffffff;
  padding: 70px 70px 0 230px;

  .select {
    width: 70%;
  }
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
