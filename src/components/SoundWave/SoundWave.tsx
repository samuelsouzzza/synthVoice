import React from 'react';
import { Container } from './SoundWave.styles.ts';
import Img from '/istockphoto-1373281845-640-adp-unscreen.gif';

export const SoundWave = () => {
  return (
    <Container>
      <img src={Img} alt='wave_sound.gif' />
    </Container>
  );
};
