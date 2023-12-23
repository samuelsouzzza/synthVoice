import React from 'react';
import { Container } from './Input.styles.ts';

type InputProps = React.ComponentProps<'input'> & {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

export const Input = ({ value, setValue, ...props }: InputProps) => {
  return (
    <Container
      placeholder='Digite o texto para converter em fala'
      value={value}
      onChange={({ target }) => setValue(target.value)}
      {...props}
    />
  );
};
