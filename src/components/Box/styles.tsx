import styled from 'styled-components';

export const StyledBox = styled.div<{ isLife: boolean }>`
  display: flex;
  flex-wrap: wrap;
  width: 30px;
  height: 30px;
  border: 1px solid darkslategrey;
  border-radius: 2px;
  background-color: ${({ isLife }) => (isLife ? 'green' : 'white')};
  margin: 2px;
`;
