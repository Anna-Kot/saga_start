import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 24px;
  height: 24px;
  position: absolute;
  top: 11px;
  right: 11px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  border-radius: 5px;
  padding: 3px;

  &:hover {
    background-color: #d3eae1;
    border-radius: 5px;
  }
`;
