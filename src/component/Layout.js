import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import  logo from "../image/logo.svg"

const useStyles = makeStyles((theme) => ({
  div:{
    width: "100%",
    overflow:"hidden"
  },
  root: {
    flexGrow: 1,
    width: "100%"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 0,
    [theme.breakpoints.up("sm")]: {
        flexGrow: 1,
      },
      width: 50,
      height: 50,
  },
  nav: {
    background: "#FFFFFF",
    color: "#000",
    padding: theme.spacing(1, 0),
  },
  navItem: {
    margin: theme.spacing(0, 1),
    [theme.breakpoints.up("sm")]: {
        margin: theme.spacing(0, 3),
      },
  },
  btn: {
   
    [theme.breakpoints.up("sm")]: {
        margin: theme.spacing(0, 3),
        padding: theme.spacing(1, 3),
        
    },
    background: theme.palette.info.main,
    color: "#fff",
   
  },
}));

export default function Layout({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.div}>
      <div className={classes.root}>
        <AppBar position="static" className={classes.nav}>
          <Toolbar>
           
            <img src={logo} className={classes.title}  alt=""/>

            <Typography variant="subtitle1" className={classes.navItem}>
              Home
            </Typography>
            <Typography variant="subtitle1" className={classes.navItem}>
              Intitute
            </Typography>
            <Typography variant="subtitle1" className={classes.navItem}>
              Developer
            </Typography>
            <Typography variant="subtitle1" className={classes.navItem}>
              About
            </Typography>
            <Typography variant="subtitle1" className={classes.navItem}>
              Careers
            </Typography>
            <Typography variant="subtitle1" className={classes.navItem}>
              Blog
            </Typography>
            <div>
            <Button
              color="primary"
              variant="contained"
              size="small"
              className={classes.btn}
            >
              Login/ SignUp
            </Button>
            </div>
          </Toolbar>
        </AppBar>
        <div>
          <div className={classes.section}>{children}</div>
        </div>
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
