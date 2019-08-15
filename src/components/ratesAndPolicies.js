import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import Footer from './footer.js'

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500,
    textAlign: 'left',
    margin: "auto",
    marginTop: "40px"
  },
  typography: {
    fontFamily: 'open sans'
  },
  title: {
    color: 'brown'
  }
});

export default function RatesAndPolicies() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.typography} className={classes.title} variant="h3" gutterBottom>
        Rates and Policies
      </Typography>
      <Typography className={classes.typography} variant="body1" gutterBottom>
        Students or parents pay for a month at a time at the beginning of the
        month based on the number of lesson weeks during that month. Hour long
        lessons cost $50, forty-five minute lessons cost $40, and half hour
        lessons cost $30. If you need to cancel, please provide at least
        24-hours notice to guarantee a makeup lesson.
      </Typography>

      <Footer /> 
    </div>
  );
}
