import styled from 'styled-components';

export const MainWrraper = styled.div`
  width: 1016px;
  min-height: 296px;
  /* height: auto; */
  box-sizing: border-box;
  background: #ffffff;
  border: 1px solid #000000;
  border-top: none;
  border-radius: 0px;
  padding: 17px 34px 0px 29px;
  display: flex;
  flex-direction: column;
  margin: 30px;
`;

export const HeaderBlock = styled.div`
  border-bottom: 1px solid #cfcfcf;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1.55fr 1.11fr 3.19fr;
  margin-bottom: 6px;
  box-sizing: border-box;
  gap: 10px;
  height: 30px;
`;

export const Header = styled.div`
  font: 500 18px/21px Roboto;
  color: #000000;
`;

export const InfoBlock = styled.div`
  /* border-bottom: 1px solid #cfcfcf; */
  font: 400 18px/21px Roboto;
  box-sizing: border-box;

  display: grid;
  grid-template-columns: 1.5fr 1fr 1.55fr 1.11fr 3.19fr;
  gap: 10px;
  height: 31px;
  margin-top: 6px;
  position: relative;
  border-bottom: 1px solid #cfcfcf;
  margin-bottom: 6px;

  &.last-line:last-child {
    border-bottom: none;
  }

  button {
    right: 0px;
    box-sizing: border-box;
    top: 0px;
    padding: 3px 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 8px;
    background: #000000;
    color: #ffffff;
    position: absolute;
  }

  .select-active:hover {
    border: 1px solid red;
  }
`;
export const Info = styled.div`
  color: #000000;
`;
export const EditBtn = styled.div`
  position: absolute;
  width: 21px;
  height: 21px;
  background: #000000;
  right: 25px;
  box-sizing: border-box;
  top: 0px;
  border-radius: 50%;
`;
export const CloseBtn = styled.div`
  position: absolute;
  width: 21px;
  height: 21px;
  background: #ff0000;
  right: 0px;
  box-sizing: border-box;
  top: 0px;
  border-radius: 50%;
`;
