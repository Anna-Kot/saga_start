import styled from 'styled-components';
import { BLUE, WHITE } from '../../styles/Globals.styled';

export const TagsWrapper = styled.div`
  position: absolute;
  top: 12px;
  width: auto;
  height: 25px;
  display: flex;
  justify-content: flex-start;
  padding: 2px 0;
`;
export const TagBlock = styled.div`
  width: auto;
  height: 20px;
  padding: 4px 12px;
  background: ${BLUE};
  opacity: 0.5;
  border-radius: 20px;
  margin-right: 8px;
  text-transform: uppercase;
  color: ${WHITE};
  font: 700 10px/12px 'Inter';
  letter-spacing: 0.2px;
`;
