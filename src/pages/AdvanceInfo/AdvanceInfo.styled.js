import styled from 'styled-components';

export const Pr = styled.div`
  background: lightblue;
`;

export const MainWrraper = styled.div`
  width: 535px;
  height: 296px;
  box-sizing: border-box;
  background: #ffffff;
  border: 1px solid #000000;
  border-top: none;
  border-radius: 0px;
  /* padding: 26px 0px 17px 29px; */
  padding: 26px 16px 17px 29px;
  margin: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TittleBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.div`
  font: 500 18px/21px Roboto;
  color: #000000;
`;

export const ValueBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* margin-left: 145px; */
  position: relative;

  .edit-button {
    position: absolute;
    bottom: 1px;
    right: 93px;
  }
`;

export const Value = styled.div`
  font: 400 18px/21px Roboto;
  color: #000000;
  display: flex;

  /* .edit-button {
    padding: 0;
    margin: 0;
    margin-left: 6px;
    margin-top: -1px;
  } */
`;
