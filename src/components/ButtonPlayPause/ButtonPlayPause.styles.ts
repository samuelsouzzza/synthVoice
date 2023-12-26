import styled from 'styled-components';

export const Container = styled.button`
  height: 50px;
  aspect-ratio: 1/1;
  border-radius: 50px;
  font-size: 1.25rem;
  padding: 0 1%;
  outline: 0;
  border: 1px solid transparent;
  background-color: #4682b4;
  cursor: pointer;
  color: #fff;
  box-shadow: 1px 1px 5px #33333355;
  transition: 0.3s;
  &:hover {
    border: 1px solid #fff;
  }
  &:disabled {
    filter: grayscale(1);
  }
`;
