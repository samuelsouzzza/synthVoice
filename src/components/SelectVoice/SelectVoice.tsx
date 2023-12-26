import React from 'react';
import { Container, BoxButton, ButtonVoice } from './SelectVoice.styles.ts';

type SelectVoiceProps = React.ComponentProps<'button'> & {
  options: string[];
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

export const SelectVoice = ({
  options,
  value,
  setValue,
  ...props
}: SelectVoiceProps) => {
  return (
    <Container>
      <BoxButton>
        {options.map((o, i) => {
          return (
            <ButtonVoice
              {...props}
              key={i}
              onClick={() => setValue(o)}
              className={o === value ? 'active' : ''}
            >
              {o}
            </ButtonVoice>
          );
        })}
      </BoxButton>
    </Container>
  );
};
