import styled from 'styled-components';

import { OPACITY_BLACK } from '../../styles/Globals.styled';

export const BackdropContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${OPACITY_BLACK};
  z-index: 101;
`;
