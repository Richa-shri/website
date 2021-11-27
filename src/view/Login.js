import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

import { purple } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
      backgroundColor: theme.palette.background.default,
      minHeight: "100vh",
  },

  purple: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  btn: {
    marginBottom: "-79px",
    height: theme.spacing(6),
    color: "#fff",
    backgroundColor: purple[500],
    "&:hover": {
      color: "#fff",
      backgroundColor: purple[500],
    },
  },
  text: {
    color: purple[500],
  },

  center: {
    display: "flex",
    justifyContent: "center",
  },
}));
export default function Login() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container justifyContent="center">
        <Grid item md={4} sm={8} xs={12}>
          <Box component={Paper} p={3} m={3}>
            <div className={classes.center}>
              <Avatar className={classes.purple} />
            </div>
            <br />
            <Typography variant="h5" className={classes.text} align="center">
              Have an account ?
            </Typography>
            <form>
              <TextField
                variant="filled"
                fullWidth
                margin="normal"
                placeholder="User Name"
              />
              <TextField
                variant="filled"
                fullWidth
                margin="normal"
                placeholder="Password"
              />
            <Box my={1} display="flex" justifyContent="space-between" alignItems="center" >
              <FormControlLabel
                className={classes.text}
                
                control={
                  <Checkbox
                    icon={
                      <CheckBoxOutlineBlankIcon
                        fontSize="small"
                        className={classes.uncheck}
                      />
                    }
                    checkedIcon={
                      <CheckBoxIcon fontSize="small" className={classes.text} />
                    }
                    name="checkedI"
                  />
                }
                label="Remember me"
              />
              <Typography className={classes.text}>
                  Forgot Password
              </Typography>
           </Box>
              <Button fullWidth variant="contained" className={classes.btn} href="/home">
                Get Started
              </Button>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
