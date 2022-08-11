import styled from 'styled-components';

export const ButtonsContainer = styled.div`
  width: 800px;
  height: 100px;
  background: #f4f4f7;
  padding: 18px 50px 22px 334px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  border-radius: 0px 0px 30px 30px;

  div {
    width: 200px;
    height: 60px;
    border-radius: 16px;
    font: 500 18px/22px 'Inter';
    text-align: center;
    padding-top: 19px;
    cursor: pointer;
  }
`;

export const CancelButton = styled.div`
  background: transparent;
  color: #9a9caf;

  &:hover {
    background: #e9e9ee;
  }
`;
export const SaveButton = styled.div`
  /* background: #e00000; */
  color: #ffffff;
`;
