import React from 'react';
import { Container } from './Button.styles.ts';

type ButtonProps = React.ComponentProps<'button'>;

export const Button = ({ ...props }: ButtonProps) => {
  return <Container {...props}>🎙</Container>;
};
