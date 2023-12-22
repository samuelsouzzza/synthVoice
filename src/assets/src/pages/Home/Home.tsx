import React from 'react';
import { Container } from './Home.styles.ts';
import { Input } from '../../components/Input/Input.tsx';
import { Button } from '../../components/Button/Button.tsx';

export const Home = () => {
  return (
    <Container>
      <Input />
      <Button />
    </Container>
  );
};
