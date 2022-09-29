import styled from 'styled-components';

export const MainWrraper = styled.div`
  width: 1016px;
  /* height: 296px; */
  height: 333px;
  box-sizing: border-box;
  background: #ffffff;
  border: 1px solid #000000;
  border-top: none;
  border-radius: 0px;
  /* padding: 17px 34px 28px 29px; */
  padding: 17px 34px 10px 29px;
  display: grid;
  margin: 30px;
`;

export const HeaderBlock = styled.div`
  border-bottom: 1px solid #cfcfcf;
  display: grid;
  grid-template-columns: 1.6fr 1.05fr 0.9fr 2.65fr;
  margin-bottom: 6px;
  box-sizing: border-box;
  gap: 10px;
`;

export const Header = styled.div`
  font: 900 18px/21px Roboto;
  color: #000000;
`;

export const InfoBlock = styled.div`
  border-bottom: 1px solid #cfcfcf;
  font: 400 18px/21px Roboto;
  box-sizing: border-box;

  display: grid;
  grid-template-columns: 1.6fr 1.05fr 0.9fr 2.65fr;
  margin-bottom: 6px;
  box-sizing: border-box;
  gap: 10px;
`;

export const Title = styled.div`
  font: 500 18px/21px Roboto;
  color: #000000;
`;
export const PerCent = styled.div`
  color: #000000;
`;
export const Amount = styled.div`
  color: #000000;
`;
export const Info = styled.div`
  color: #000000;
  text-decoration: underline;
`;

export const TotalBlock = styled.div`
  font: 400 18px/21px Roboto;

  display: grid;
  grid-template-columns: 1.6fr 1.05fr 0.9fr 2.65fr;
  margin-bottom: 6px;
  box-sizing: border-box;
  gap: 10px;

  /* margin-top: 7px; */
  border-bottom: 1px solid #cfcfcf;

  .title-bold {
    font: 700 18px/21px Roboto;
  }
`;
export const TotalRemainder = styled.div`
  font: 400 18px/21px Roboto;
  position: relative;
  display: grid;
  grid-template-columns: 1.6fr 1.05fr 0.9fr 2.65fr;
  box-sizing: border-box;
  gap: 10px;
  margin-top: 5px;

  div:nth-child(2) {
    margin-top: 0px;
  }
  .underline {
    text-decoration: underline;
  }

  button {
    left: 556px;
    box-sizing: border-box;
    top: -5px;
    padding: 2px 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 8px;
    background: #000000;
    color: #ffffff;
    position: absolute;
  }
`;
