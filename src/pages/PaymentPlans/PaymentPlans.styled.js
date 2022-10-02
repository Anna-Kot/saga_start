import styled from 'styled-components';

export const MainWrraper = styled.div`
  width: 1575px;
  height: 109px;
  /* height: auto; */
  box-sizing: border-box;
  background: #ffffff;
  border: 1px solid #000000;
  border-top: none;
  border-radius: 0px;
  padding: 20px 20px 0px 27px;
  display: grid;
  margin: 30px;
`;

export const HeaderBlock = styled.div`
  border-bottom: 1px solid #cfcfcf;
  display: grid;
  grid-template-columns: 0.78fr 1.18fr 0.95fr 1.3fr 1fr 1.56fr 1.83fr 2.33fr 2.19fr;
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
  grid-template-columns: 0.78fr 1.18fr 0.95fr 1.3fr 1fr 1.56fr 1.83fr 2.33fr 2.19fr;
  gap: 10px;
  height: 35px;
  padding-top: 3px;
  position: relative;

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
`;
export const Info = styled.div`
  color: #000000;
`;
