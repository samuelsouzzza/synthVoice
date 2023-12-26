import React from 'react';
import { Container } from './ButtonPlayPause.styles.ts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

type ButtonPlayPauseProps = React.ComponentProps<'button'> & {
  status: 'play' | 'pause';
};

export const ButtonPlayPause = ({ status, ...props }: ButtonPlayPauseProps) => {
  return (
    <Container {...props}>
      {status === 'play' ? (
        <FontAwesomeIcon icon={faPlay} />
      ) : (
        <FontAwesomeIcon icon={faPause} />
      )}
    </Container>
  );
};
