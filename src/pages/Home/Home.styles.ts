import styled from 'styled-components';
import Img from '../../../public/Wave.svg';

export const Container = styled.section`
  background-image: url('/Wave.svg');
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3% 0;
`;

export const Box = styled.div`
  width: 50%;
  background-color: #ffffff22;
  backdrop-filter: blur(5px);
  padding: 1%;
  border-radius: 5px;
`;

export const BoxControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2% 0;
  width: 100%;
`;
