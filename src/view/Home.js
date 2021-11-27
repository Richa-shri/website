import {
  Avatar,
  Box,
  Card,
  CardMedia,
  Container,
  Grid,
  Link,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";
import Layout from "../component/Layout";
import Footer from "../component/Footer";
import homeimg from "../image/homepage1.jpg";
import { makeStyles } from "@material-ui/core/styles";
import btn1 from "../image/ios-app-store-icon.svg";
import btn2 from "../image/google-play-icon.svg";
import img1 from "../image/feature1.jpg";
import img2 from "../image/feature2.jpg";
import img3 from "../image/feature3.jpg";
import img4 from "../image/feature4.jpg";
import img5 from "../image/feature5.jpg";
import img6 from "../image/feature6.jpg";
import bg3 from "../image/bg3.png";
import bg4 from "../image/bg4.jpg";
import icon1 from "../image/icon1.svg";
import icon2 from "../image/icon2.svg";
import icon3 from "../image/icon3.svg";

const useStyles = makeStyles((theme) => ({
  bg: {
    width: "100%",
    height: "500px",
  },
  bgcontent: {
    height: 500,
    padding: 50,
    width: 500,
  },
  heading: {
    fontSize: "40px",
    lineHeight: "52px",
    fontWeight: "500",
  },
  subheading: {
    lineHeight: "44px",
    fontWeight: "500",
  },
  card: {
    maxWidth: 150,
  },
  icons: {
    width: 100,
    height: 100,
  },
  section: {
    background: "#eaf9ff",
  },
}));
export default function Home(props) {
  const classes = useStyles();
  return (
    <Layout>
      <Container>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <div className={classes.bgcontent}>
              <Typography className={classes.heading}>
                Welcome to Your New Classroom
              </Typography>
              <br />

              <Typography variant="h5">
                Digitise your classrooms and start teaching your students in
                just 2 minutes
              </Typography>

              <br />
              <br />
              <Link>
                <img src={btn1}  alt=""/>
              </Link>
              <br />
              <Link>
                <img src={btn2}  alt=""/>
              </Link>
            </div>
          </Grid>
          <Grid item md={6}>
            <div className={classes.bgcontent}>
              <img src={homeimg} alt="" className={classes.bg} />
            </div>
          </Grid>
        </Grid>
      </Container>
      <Box p={8}>
        <Typography variant="h4" align="center">
          Featured In
        </Typography>
        <br />
        <Grid container justifyContent="space-evenly">
          <Card className={classes.card}>
            <CardMedia component="img" image={img1} alt="" />
          </Card>

          <Card className={classes.card}>
            <CardMedia component="img" image={img2} alt=""/>
          </Card>

          <Card className={classes.card}>
            <CardMedia component="img" image={img3}alt="" />
          </Card>

          <Card className={classes.card}>
            <CardMedia component="img" image={img4} alt="" />
          </Card>

          <Card className={classes.card}>
            <CardMedia component="img" image={img5} />
          </Card>

          <Card className={classes.card}>
            <CardMedia component="img" image={img6} alt="" />
          </Card>
        </Grid>
      </Box>
      <div className={classes.section}>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <div className={classes.bgcontent}>
              <Typography variant="h4" className={classes.subheading}>
                Take your institute online with Teachmint for Institute
              </Typography>
              <br />
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Box m={1}>
                  <Avatar src={icon1} variant="square" />
                </Box>
                <div>
                  <Typography variant="h6">
                    End to end institute management
                  </Typography>
                  <Typography>
                    Intelligently manage your institute with our ERP solutions,
                    analytics, parent engagement
                  </Typography>
                </div>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                m={1}
              >
                <Box m={1}>
                  <Avatar src={icon2} variant="square" />
                </Box>
                <div>
                  <Typography variant="h6">
                    End to end institute management
                  </Typography>
                  <Typography>
                    Intelligently manage your institute with our ERP solutions,
                    analytics, parent engagement
                  </Typography>
                </div>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Box m={1}>
                  <Avatar src={icon3} variant="square" />
                </Box>
                <div>
                  <Typography variant="h6">
                    End to end institute management
                  </Typography>
                  <Typography>
                    Intelligently manage your institute with our ERP solutions,
                    analytics, parent engagement
                  </Typography>
                </div>
              </Box>
            </div>
          </Grid>
          <Grid item md={6}>
            <div className={classes.bgcontent}>
              <img src={bg3} className={classes.bg} alt=""/>
            </div>
          </Grid>
        </Grid>
      </div>
      <Box my={5}>
        <Typography variant="h4" align="center">
          Life Becomes Easier with Teachmint
        </Typography>
        <br />
        <Typography variant="h6" align="center">
          When Online Teaching Becomes More Interactive
        </Typography>
        <br />
        <Grid container justifyContent="center">
          <Grid container justifyContent="center" item md={7}>
            <Grid item md={6}>
              <Box
                component={Paper}
                variant="outlined"
                square
                p={8}
                display="flex"
                alignItems="center"
              >
                <Avatar
                  src="https://www.teachmint.com/static2/images/easier_section/Live_Classes.svg"
                  variant="square"
                  className={classes.icons}
                />
                <Typography variant="subtitle1">
                  2 way Life classes with Recording
                </Typography>
              </Box>
            </Grid>
            <Grid item md={6}>
              <Box
                component={Paper}
                variant="outlined"
                square
                p={8}
                display="flex"
                alignItems="center"
              >
                <Avatar
                  src="https://www.teachmint.com/static2/images/easier_section/Doubts.svg"
                  variant="square"
                  className={classes.icons}
                />
                <Typography variant="subtitle1">
                  Create Doubt Session
                </Typography>
              </Box>
            </Grid>
            <Grid item md={6}>
              <Box
                component={Paper}
                variant="outlined"
                square
                p={8}
                display="flex"
                alignItems="center"
              >
                <Avatar
                  src="https://www.teachmint.com/static2/images/easier_section/Multi_Language_Support.svg"
                  variant="square"
                  className={classes.icons}
                />
                <Typography variant="subtitle1">
                  Select Your Language
                </Typography>
              </Box>
            </Grid>
            <Grid item md={6}>
              <Box
                component={Paper}
                variant="outlined"
                square
                p={8}
                display="flex"
                alignItems="center"
              >
                <Avatar
                  src="https://www.teachmint.com/static2/images/easier_section/Test.svg"
                  variant="square"
                  className={classes.icons}
                />
                <Typography variant="subtitle1">MCQ test Creation</Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <Container>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <div className={classes.bgcontent}>
              <Typography className={classes.subheading} variant="h4">
                Teach from Anywhere on Any Device
              </Typography>
              <br />

              <Typography variant="h5">
                Take Live Classes using Any Device be it Phone, Tablet or
                Computer
              </Typography>

              <br />
              <Typography variant="h5">Get Started Today! </Typography>
              <br />
              <Box display="flex">
                <Box m={1}>
                  <Link>
                    <img src={btn1} alt="" />
                  </Link>
                </Box>
                <Box m={1}>
                  <Link>
                    <img src={btn2} alt="" />
                  </Link>
                </Box>
              </Box>
            </div>
          </Grid>
          <Grid item md={6}>
            <div className={classes.bgcontent}>
              <img src={bg4} className={classes.bg} alt="" />
            </div>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Layout>
  );
}
