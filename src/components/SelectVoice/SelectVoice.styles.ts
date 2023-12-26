import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 30%;
`;

export const BoxButton = styled.div`
  display: flex;
`;
export const ButtonVoice = styled.button`
  width: 100%;
  border: 1px solid #4682b4dd;
  border-radius: 5px;
  height: 35px;
  margin: 0 1%;
  cursor: pointer;
  &.active {
    background-color: #4682b4;
    color: #fff;
  }
  &:disabled {
    filter: grayscale(1);
  }
`;
