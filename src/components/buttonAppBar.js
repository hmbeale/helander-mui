import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { withTheme } from "@material-ui/styles";

import MenuButton from "./menuButton.js";

import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "brown"
  },
  title: {
    flexGrow: 1,
    color: "brown"
  },
  appBar: {
    backgroundColor: "white"
  },
  link: {
    textDecoration:'underline'
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuButton />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Helander School of Music
          </Typography>
          

          <Link to='/'><Button className={classes.menuButton} color="inherit"> Home </Button></Link>
          <Link to='/about'> <Button className={classes.menuButton} color="inherit">About</Button></Link>
          <Link to='/testimonials' > <Button className={classes.menuButton} color="inherit">Testimonials</Button></Link>
          <Link to='/ratesAndPolicies' > <Button className={classes.menuButton} color="inherit">Rates and Policies</Button></Link>
          <Link to='/contact'> <Button className={classes.menuButton} color="inherit"> Contact </Button></Link>

        </Toolbar>
      </AppBar>
    </div>
  );
}
