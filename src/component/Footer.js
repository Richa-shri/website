import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import logo from "../image/logo.svg";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  Grid: {
    padding: theme.spacing(5, 5, 1, 5),
  },

  appBar: {
    top: "auto",
    color: "#1F1F1F",
    fontSize: ".45rem",
    bottom: 0,
    alignItems: "center",
    backgroundColor: "inherit",
    boxShadow: "none",
    
  },
  List: {
    listStyleType: "none",
    margin: "10px 0px 0px 10px",
    padding: 0,
    marginRight: "40px",
    contentVisibility: "auto",
  },
 
  
  listgap: {
    paddingBottom: "5px",
  },
  icons: {
    color: "black!important",
    fontSize: 40,
    borderRadius: "50%",
    marginLeft: "10%",
  },

  title: {
    width: 200,
    height: 200,
  },
  line:{
    background: theme.palette.info.main,
    height: theme.spacing(0.5),
    width:"100%"
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <hr className={classes.line}/>
      <Grid container className={classes.Grid}>
        {/* First Coloumn Start */}
        <Grid item md={1}></Grid>
        <Grid item xs={6} md={3} sm={3}>
          <img src={logo} className={classes.title} alt="" />
        </Grid>
        {/* First Coloumn End */}

        {/* Second Coloumn Start */}
        <Grid item xs={6} md={3} sm={3}>
          <ul className={classes.List}>
            <Typography gutterBottom variant="h6">
              {" "}
              LINKS
            </Typography>
            <li className={classes.listgap}>
              <Typography variant="body2">Home</Typography>
            </li>
            <li className={classes.listgap}>
              <Typography variant="body2">Blog</Typography>
            </li>
            <li className={classes.listgap}>
              <Typography variant="body2">Privacy Policy</Typography>
            </li>
            <li className={classes.listgap}>
              <Typography variant="body2">Terms of Service</Typography>
            </li>
            <li className={classes.listgap}>
              <Typography variant="body2">
                Refund & Cancellation Policy
              </Typography>
            </li>
            <li className={classes.listgap}>
              <Typography variant="body2">Glossary</Typography>
            </li>
          </ul>
        </Grid>
        {/* Second Coloumn End */}

        {/* Third Coloumn Start */}
        <Grid item xs={6} md={3} sm={3}>
          <ul className={classes.List}>
            <Typography gutterBottom variant="h6">
              {" "}
              CONTACT
            </Typography>
            <li className={classes.listgap}>
              <Typography gutterBottom variant="body2">
                Enzyme Park View #1604, 1st Floor 25th Main, 22nd Cross Rd,
                Sector 2, HSR Layout, Bengaluru, Karnataka 560102
                contact@teachmint.com
              </Typography>
            </li>
            <li className={classes.listgap}>
              <Typography variant="body2">08048363988</Typography>
            </li>
            <li className={classes.listgap}>
              <Typography variant="body2" to="/Terms-policy">
                8 A.M. - 8 P.M (Everyday)
              </Typography>
            </li>
          </ul>
        </Grid>
        {/* Third Coloumn End */}
        {/* Fourth Coloumn Start */}
        <Grid item xs={6} md={2} sm={3}>
          <ul className={classes.List}>
            <Typography gutterBottom variant="h6">
              SOCIAL
            </Typography>
            <li className={classes.listgap}></li>
            <li className={classes.listgap}>
              <Box display="flex" alignItems="center">
                <FacebookIcon className={classes.icons} />

                <Typography gutterBottom variant="body1">
                  {" "}
                  Facebook
                </Typography>
              </Box>
            </li>
            <li className={classes.listgap}>
              <Box display="flex" alignItems="center">
                <LinkedInIcon className={classes.icons} />
                <Typography gutterBottom variant="body1">
                  {" "}
                  LinkedInIcon
                </Typography>
              </Box>
            </li>
            <li className={classes.listgap}>
              <Box display="flex" alignItems="center">
                <TwitterIcon className={classes.icons} />
                <Typography gutterBottom variant="body1">
                  {" "}
                  Twitter
                </Typography>
              </Box>
            </li>
          </ul>
        </Grid>
        {/* Fourth Coloumn End */}
      </Grid>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="body2">
            Copyright © Teachmint Technologies Pvt. Ltd
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
