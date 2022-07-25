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
  button {
    position: absolute;
    width: 24px;
    height: 24px;
    top: 11px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    padding: 3px 0px;

    &:hover {
      background-color: #d3eae1;
      border-radius: 5px;
    }
    &:nth-of-type(1) {
      right: 74px;
    }
    &:nth-of-type(2) {
      right: 42px;
    }
    &:nth-of-type(3) {
      right: 12px;
    }
  }
`;
