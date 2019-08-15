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
    //color: "brown"
    fontFamily: 'open sans'
  },
  title: {
    fontFamily: 'open sans',
    color: 'brown'
  }
});

export default function Testimonials() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.typography} className = {classes.title} variant="h3" gutterBottom>
        Testimonials
      </Typography>
      <Typography className={classes.typography} variant="body1" gutterBottom>
        "My daughter began taking guitar lessons with Joel at age nine. Joel
        seemed to work magic, in my eyes, instilling a love of music in my
        daughter that has only grown over time. All that she learned from him
        has helped her to excel not only in music, but also socially and
        academically. Our time with Joel was an invaluable part of my daughter's
        childhood that was filled with inspiration, creativity, and the blooming
        of her soul." ~Rebecca, mother of guitar student Emma
      </Typography>

      <Typography className={classes.typography} variant="body1" gutterBottom>
        "Joel is fun and easygoing. He's always willing to follow my interests
        and knows when to insert exercises or information to improve technique.
        He provide a solid base for me to explore from and reliably leads me to
        the next step in my study." ~ Kathryn, adult piano student
      </Typography>

      <Typography className={classes.typography} variant="body1" gutterBottom>
        "Joel was the only teacher in the area who didn’t consider our 5 year
        old too young for lessons. Always engaging, he Incorporates games and
        movement activities which enable our daughter to have fun while making
        progress. 1 ½ years later she proudly played a Beethoven tune at her
        grandparent’s recent 50th anniversary party. She is looking forward to
        continued fun and learning." ~Marti, mother of guitar student Holland
      </Typography>

      <Typography className={classes.typography} variant="body1" gutterBottom>
        "Joel is a fantastic teacher. Myriads of challenges face adult learners
        of jazz piano. Joel is great at identifying where the bottle-necks are,
        and coming up with exercises designed to overcome them. He is always
        encouraging too, helping you to inspire to get to the next level. I
        would wholeheartedly recommend him!" ~Yuko, adult piano student
      </Typography>

      <Typography className={classes.typography} variant="body1" gutterBottom>
        "It was a pleasure having Joel as part of our faculty. He got along
        really well with his colleagues, his students and their parents. His
        students loved working with him and made tremendous progress during
        their time studying with him. They were all very sad when he moved. As a
        teacher, he was able to relate well with his students and was able to
        cater his lessons to the needs of each student. He was very encouraging,
        while also challenging students in their studies." ~Sarah Kelly,
        Executive Director at Worcester Music Academy
      </Typography>

      <Footer /> 
    </div>
  );
}
