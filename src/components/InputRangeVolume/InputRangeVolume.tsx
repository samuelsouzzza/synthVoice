import React from 'react';
import { Container, Range } from './InputRangeVolume.styles.ts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faVolumeHigh,
  faVolumeDown,
  faVolumeMute,
} from '@fortawesome/free-solid-svg-icons';

type InputRangeVolumeProps = React.ComponentProps<'input'> & {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
};

export const InputRangeVolume = ({
  value,
  setValue,
  ...props
}: InputRangeVolumeProps) => {
  return (
    <Container>
      <div>
        {value > 0 ? (
          value < 50 ? (
            <FontAwesomeIcon icon={faVolumeDown} />
          ) : (
            <FontAwesomeIcon icon={faVolumeHigh} />
          )
        ) : (
          <FontAwesomeIcon icon={faVolumeMute} />
        )}
        <p> {value}</p>
      </div>
      <Range
        type='range'
        value={value}
        onChange={({ target }) => setValue(+target.value)}
        max={100}
        {...props}
      ></Range>
    </Container>
  );
};
