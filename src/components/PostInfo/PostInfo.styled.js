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

  &:nth-of-type(1) {
    margin-top: 44px;
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

  .editing-button {
    display: none;
  }

  &:hover {
    border: 1px solid black;

    .editing-button {
      display: flex;
    }
  }

  .tag-wrapper {
    margin-left: 15px;
  }
`;
