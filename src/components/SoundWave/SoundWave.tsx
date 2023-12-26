import React from 'react';
import { Container } from './SoundWave.styles.ts';
import Img from '../../../public/icons8-audio-wave-unscreen.gif';

export const SoundWave = () => {
  return (
    <Container>
      <img src={Img} alt='' />
    </Container>
  );
};
