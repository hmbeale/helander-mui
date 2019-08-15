import Box from '@material-ui/core/Box';

import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Footer from './footer.js'

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '20px'
  },
  typography: {
      
  },
  title: {
    
  },
  box: {
      
  }
});

export default function Spacer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box className={classes.box}/>

    </div>
  );
}