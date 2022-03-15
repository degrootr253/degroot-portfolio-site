import React from 'react'
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useMediaQuery,
  useTheme
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from '../Drawer';


const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(10),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

export const Navbar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          Ryan DeGroot
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Link to="#about" className={classes.link}>
              About
            </Link>
            <Link to="#skills" className={classes.link}>
              Skills
            </Link>
            <Link to="#projects" className={classes.link}>
              Projects
            </Link>
            <Link to="#contact" className={classes.link}>
              Contact
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
