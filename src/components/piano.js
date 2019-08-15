import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Piano from 'react-piano-component';

const useStyles = makeStyles({
  root: {
   
  },
  
});

export default function PianoDemo() {
  const classes = useStyles();

  return (
        
      <Piano
  // (Required) Specify a note range using `startNote` and `endNote`.
  // The following note range creates a piano with:
  // C4, C#4, D4, D#4, E4, F4, F#4, G4, G#4, A4, A#4, B4, C5
  startNote="C4"
  endNote="C5"

  // (Optional) Map keyboard keys to notes using `keyboardMap`.
  // The following `keyboardMap` maps the keyboard key `Q` to the note `C4`,
  // so whenever `Q` is pressed, `C4` plays.
  keyboardMap={{
    Q: 'C4',
  }}

  // (Optional) Customize your audio using `renderAudio`!
  // `renderAudio(props)` is called whenever notes start or stop playing.
  renderAudio={
    ({
      notes // (Array) An array of the currently playing notes
    }) => {
      /* Play the given notes and render the audio (or return null) */
    }
  }

  // (Required) Customize your piano keys using `renderPianoKey`!
  // `renderPianoKey(props)` is called once per note with the following props:
  renderPianoKey={
    ({
      note,               // (String) The note corresponding to the key
      isNoteAccidental,   // (Boolean) Whether the note is accidental (C#, D#, F#, G#, or A#)
      isNotePlaying,      // (Boolean) Whether the note is currently playing

      startPlayingNote,   // (Function) A function that starts playing the note
      stopPlayingNote,    // (Function) A function that stops playing the note

      keyboardShortcuts,  // (Array) Keyboard keys mapped to the note, defined by `keyboardMap`.
    }) => {
      /* Return a styled piano key */
    }
  }
/>

  );
}