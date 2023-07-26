import styled from 'styled-components';
import { getRandomColor } from '../../helpers/methods';

export const StyledBox = styled.div<{ isLife: boolean }>`
  display: flex;
  flex-wrap: wrap;
  width: 20px;
  height: 20px;
  border: 1px solid darkslategrey;
  border-radius: 2px;
  background-color: ${({ isLife }) => (isLife ? getRandomColor() : 'white')};
  margin: 2px;
`;
