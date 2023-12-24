import React from 'react';
import { Container } from './Home.styles.ts';
import { Input } from '../../components/Input/Input.tsx';
import { Button } from '../../components/Button/Button.tsx';
import { ButtonPlayPause } from '../../components/ButtonPlayPause/ButtonPlayPause.tsx';

export const Home = () => {
  const synth = window.speechSynthesis;

  const [text, setText] = React.useState('');
  const [speaking, setSpeaking] = React.useState(false);
  const [paused, setPaused] = React.useState(false);

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
      setSpeaking(true);
      let msg = new SpeechSynthesisUtterance();
      msg.voice = voices[1];
      msg.rate = 1;
      msg.pitch = 1;
      msg.text = text;
      msg.lang = 'pt-BR';
      msg.volume = 1;

      msg.addEventListener('end', () => setSpeaking(false));

      synth.speak(msg);
    }
  }

  function toggleTalk() {
    setSpeaking(!speaking);
    setPaused(!paused);

    synth.pause();

    if (synth.paused) {
      synth.resume();
      setSpeaking(!speaking);
    }
  }

  return (
    <Container>
      <Input value={text} setValue={setText} />
      {!speaking ? <Button onClick={talk} /> : <Button disabled />}

      <ButtonPlayPause
        onClick={toggleTalk}
        status={paused ? 'play' : 'pause'}
      />

      <p>{synth.pending ? 'Falando' : 'Sem fala'}</p>
    </Container>
  );
};
