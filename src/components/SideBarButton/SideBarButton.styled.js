import styled from 'styled-components';

export const ButtonContainer = styled.button`
  width: 100%;
  height: 50px;
  padding: 15px 20px;
  border-radius: 6px;

  display: flex;
  align-items: center;
  border: none;
  background: transparent;
  cursor: pointer;

  margin-bottom: 8px;

  &:nth-of-type(2) {
    margin-bottom: 35px;
  }

  &:last-of-type {
    margin-top: 35px;
  }

  &:hover {
    background: #ffffff;
  }
`;

export const ButtonIcon = styled.span`
  display: inline-block;
  max-width: 20px;
`;

export const CircleIcon = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin: 2px 3px 0px 5px;
`;

export const ButtonText = styled.div`
  margin-left: 20px;
  font: 700 16px/19px 'Lato';
  letter-spacing: 0.2px;
  color: #212121;
`;
