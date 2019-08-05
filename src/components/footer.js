import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500,
    textAlign: 'left',
    margin: "auto",
    marginTop: "40px"
  },
  typography: {
    color: "brown"
  }
});

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

        <Typography className={classes.typography} variant="body2" gutterBottom>
        fb.com/JoelHelanderMusic | Copyright © 2019 Joel Helander
      </Typography>


        
      
    </div>
  );
}
