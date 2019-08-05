import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

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

export default function Contact() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.typography} variant="h3" gutterBottom>
        Contact
      </Typography>
      <Typography className={classes.typography} variant="body1" gutterBottom>
      You may contact me at j.n.helander@gmail.com with inquiries about lessons, notation services, song licensing, or session work.
      </Typography>
      
    </div>
  );
}
