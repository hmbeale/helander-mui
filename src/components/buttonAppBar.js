import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { withTheme } from "@material-ui/styles";

import Hidden from '@material-ui/core/Hidden';

import MenuButton from "./menuButton.js";
import AppBarModal from './appBarModal.js'

import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "black",
    fontFamily: 'open sans'
  },
  title: {
    flexGrow: 1,
    color: "brown",
    fontFamily: 'open sans',
    
  },
  appBar: {
    backgroundColor: "white"
  },
  link: {
    textDecoration:'underline'
  },
  span: {
    //color: '#2d1309', 

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
            <span className={classes.span }> Helander</span> School of Music
          </Typography>
          

          <Hidden xsDown><Link to='/'><Button className={classes.menuButton} color="inherit"> Home </Button></Link></Hidden>
          <Hidden xsDown><Link to='/about'> <Button className={classes.menuButton} color="inherit">About</Button></Link></Hidden>
          <Hidden xsDown><Link to='/testimonials' > <Button className={classes.menuButton} color="inherit">Testimonials</Button></Link></Hidden>
          <Hidden xsDown><Link to='/ratesAndPolicies' > <Button className={classes.menuButton} color="inherit">Rates and Policies</Button></Link></Hidden>
          <Hidden xsDown><AppBarModal /></Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
}
