import React from 'react';
import { Container } from './Button.styles.ts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarListen } from '@fortawesome/free-solid-svg-icons';

type ButtonProps = React.ComponentProps<'button'>;

export const Button = ({ ...props }: ButtonProps) => {
  return (
    <Container {...props}>
      <FontAwesomeIcon icon={faEarListen} />
    </Container>
  );
};
