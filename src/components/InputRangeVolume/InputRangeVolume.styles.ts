import styled from 'styled-components';

export const Container = styled.label`
  user-select: none;
  width: 30%;
  margin: 1%;
  div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 1%;
    svg {
      cursor: pointer;
    }
  }
`;

export const Range = styled.input`
  width: 100%;
  &:disabled {
    filter: grayscale(1);
  }
`;
