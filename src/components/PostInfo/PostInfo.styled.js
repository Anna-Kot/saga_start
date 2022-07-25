import styled from 'styled-components';

export const BorderWrraper = styled.div`
  width: 900px;
  height: 88px;
  border: 1px solid #d2d0d0;
  border-radius: 10px;
  margin-bottom: 20px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
  letter-spacing: 0.2px;

  &:hover {
    border: 1px solid black;
  }

  p {
    font: 400 16px/20px 'Montserrat';
    color: #7e7e7e;
    position: absolute;
    top: 15px;
    left: 15px;
    margin: 0;
  }

  h2 {
    font: 700 16px/20px 'Montserrat';
    color: #212121;
    position: absolute;
    top: 51px;
    left: 15px;
    text-transform: uppercase;
    margin: 0;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 87px;
  height: 24px;
  position: absolute;
  top: 11px;
  right: 11px;
`;
