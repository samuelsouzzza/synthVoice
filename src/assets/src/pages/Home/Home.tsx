import React from 'react';
import { Container } from './Home.styles.ts';
import { Input } from '../../components/Input/Input.tsx';
import { Button } from '../../components/Button/Button.tsx';

export const Home = () => {
  const synth = window.speechSynthesis;
  const [text, setText] = React.useState<string>('');

  React.useEffect(() => {
    const loadVoices = () => {
      let voices = synth.getVoices();

      if (voices.length !== 0) {
        console.log('Voices loaded:', voices);
      }
    };

    synth.addEventListener('voiceschanged', loadVoices);

    return () => {
      synth.removeEventListener('voiceschanged', loadVoices);
    };
  }, []);

  function talk() {
    let voices = synth.getVoices();

    if (voices.length !== 0) {
      console.log('talk');

      let msg = new SpeechSynthesisUtterance();
      msg.voice = voices[0];
      msg.rate = 1;
      msg.pitch = 1;
      msg.text = text;
      msg.lang = 'pt-BR';

      synth.speak(msg);
    }
  }

  return (
    <Container>
      <Input value={text} setValue={setText} />
      <Button onClick={talk} />
    </Container>
  );
};
