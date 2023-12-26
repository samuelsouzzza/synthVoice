import React from 'react';
import { Container, Box, BoxControls } from './Home.styles.ts';
import { Input } from '../../components/Input/Input.tsx';
import { ButtonPlayPause } from '../../components/ButtonPlayPause/ButtonPlayPause.tsx';
import { InputRangeVolume } from '../../components/InputRangeVolume/InputRangeVolume.tsx';
import { SelectVoice } from '../../components/SelectVoice/SelectVoice.tsx';
import { SoundWave } from '../../components/SoundWave/SoundWave.tsx';

export const Home = () => {
  const synth = window.speechSynthesis;

  const [text, setText] = React.useState('');
  const [speaking, setSpeaking] = React.useState(false);
  const [paused, setPaused] = React.useState(false);
  const [volume, setVolume] = React.useState(50);

  const myVoices = ['Homem', 'Mulher'];
  const [voice, setVoice] = React.useState(myVoices[0]);

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
      setPaused(false);
      let msg = new SpeechSynthesisUtterance();
      msg.voice = voices[myVoices.indexOf(voice)];
      msg.rate = 1;
      msg.pitch = 1;
      msg.text = text;
      msg.lang = 'pt-BR';
      msg.volume = volume / 100;

      msg.addEventListener('end', () => setSpeaking(false));

      synth.speak(msg);
    }
  }

  function toggleTalk() {
    if (!speaking && !paused) {
      talk();
    } else if (!speaking && paused) {
      setSpeaking(true);
      setPaused(false);
      synth.resume();
    } else {
      setSpeaking(false);
      setPaused(true);
      synth.pause();
    }
  }

  return (
    <Container>
      <Box>
        <SoundWave />
        <Input value={text} setValue={setText} />
        <BoxControls>
          {!speaking && !paused ? (
            <SelectVoice
              options={['Homem', 'Mulher']}
              value={voice}
              setValue={setVoice}
            />
          ) : (
            <SelectVoice
              options={['Homem', 'Mulher']}
              value={voice}
              setValue={setVoice}
              disabled
            />
          )}

          {!speaking && !paused ? (
            <InputRangeVolume value={volume} setValue={setVolume} />
          ) : (
            <InputRangeVolume value={volume} setValue={setVolume} disabled />
          )}
          {text.length !== 0 ? (
            <ButtonPlayPause
              onClick={toggleTalk}
              status={!speaking ? 'play' : 'pause'}
            />
          ) : (
            <ButtonPlayPause disabled status='play' />
          )}
        </BoxControls>
        <p>{speaking ? 'Falando' : 'Sem fala'}</p>
      </Box>
    </Container>
  );
};
