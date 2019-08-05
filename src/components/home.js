import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import img1 from '../img/img1.png';
//<img src = {img1} alt = "Teaching Pic" />

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
    textAlign: 'center',
    margin: 'auto',
    marginTop: '40px' 
  },
  typography: {
      color: 'brown',
      
  }
});

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        
      <Typography className = {classes.typography} variant="h1" gutterBottom>
        Helander 
      </Typography>
      <Typography className = {classes.typography} variant="h3" gutterBottom>
        School of Music
      </Typography>
      
      
     
    </div>
  );
}