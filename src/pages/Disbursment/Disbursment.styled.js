import styled from 'styled-components';

export const MainWrraper = styled.div`
  width: 1016px;
  height: 296px;
  /* height: 333px; */
  box-sizing: border-box;
  background: #ffffff;
  border: 1px solid #000000;
  border-top: none;
  border-radius: 0px;
  padding: 17px 34px 36px 29px;
  /* padding: 17px 34px 19px 29px; */
  margin: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const HeaderBlock = styled.div`
  display: grid;
  grid-template-columns: 248px 167px 143px auto;
  border-bottom: 1px solid #cfcfcf;
  padding-bottom: 6px;
`;

export const Header = styled.div`
  font: 900 18px/21px Roboto;
  color: #000000;
`;

export const InfoBlock = styled.div`
  display: grid;
  border-bottom: 1px solid #cfcfcf;
  font: 400 18px/21px Roboto;
  grid-template-columns: 248px 167px 143px auto;
  padding-bottom: 6px;
  box-sizing: border-box;
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
`;

export const TotalBlock = styled.div`
  display: grid;
  font: 400 18px/21px Roboto;
  grid-template-columns: 248px 167px 143px auto;
  /* border-bottom: 1px solid #cfcfcf; */
  box-sizing: border-box;
  padding-bottom: 6px;
  /* for small table */
  padding-top: 6px;
  /* // */

  .title-bold {
    font: 700 18px/21px Roboto;
  }
`;
export const TotalRemainder = styled.div`
  display: grid;
  font: 400 18px/21px Roboto;
  grid-template-columns: 248px 167px 143px;
  position: relative;

  .underline:nth-child(1) {
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
