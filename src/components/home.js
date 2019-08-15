import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import img1 from '../img/img1.png';
import img1Sm from '../img/img1_Small.png'
import PianoDemo from './piano.js'

import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';
import 'react-piano/dist/styles.css';

import SimpleModal from './simpleModal.js';

import Button from '@material-ui/core/Button';

import Spacer from './spacer.js'

//<img src = {img1} alt = "Teaching Pic" />

const firstNote = MidiNumbers.fromNote('c3');
  const lastNote = MidiNumbers.fromNote('f5');
  const keyboardShortcuts = KeyboardShortcuts.create({
    firstNote: firstNote,
    lastNote: lastNote,
    keyboardConfig: KeyboardShortcuts.HOME_ROW,
  });

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 700,
    
    margin: 'auto',
    marginTop: '40px',
     
  },
  typographyTop: {
    //color: '#2d1309'       
    fontFamily: 'open sans',
    textAlign: 'center',
      
  },
  typographyOther: {
    color: 'black',  
    fontFamily: 'open sans',
    textAlign: 'center',
    marginBottom: '100px'
},
button: {
  backgroundColor: 'brown',
  color: 'white',
  fontFamily: 'open sans',
  alignText: 'left'
}
});

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        
      <Typography className = {classes.typographyTop} variant="h1" gutterBottom>
      Hello  
      </Typography>

      <Typography className = {classes.typographyOther} variant="h2" gutterBottom>
      I am good at ping pong and can teach you piano  
      </Typography>     
            
      <SimpleModal />

    </div>
  );
}