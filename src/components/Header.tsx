import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import {
  AppBar,
  Box,
  CssBaseline,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

import DrawerMobile from "./DrawerMobile";
import { Home } from "./Home";

interface iHeaderProps {
  title: string;
  paragraph?: string;
}

const useStyles = makeStyles((theme) => ({
  navlinks: {
    // marginLeft: theme.spacing(10),
    marginLeft: 10,
    display: "flex",
  },
  title: {
    flexGrow: "1",
    cursor: "pointer",
  },
  subtitle: {
    position: "static",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    // marginLeft: theme.spacing(20),
    marginLeft: 20,
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));
export const Header: React.FC<iHeaderProps> = ({ title, paragraph }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <AppBar position="static">
        <CssBaseline />
        <Toolbar sx={{ backgroundColor: "black" }}>
          <Typography variant="h3" className={classes.title}>
            {title}
          </Typography>
          {isMobile ? (
            <DrawerMobile />
          ) : (
            <>
              <Typography variant="subtitle1" className={classes.subtitle}>
                {paragraph}
              </Typography>
              <Box sx={{ marginLeft: "10rem", display: "flex" }}>
                <Link to="/products" className={classes.link}>
                  Random products
                </Link>
                <Link to="/cart" className={classes.link}>
                  My random shopping cart
                </Link>
                <Link to="/orders" className={classes.link}>
                  My random orders
                </Link>
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
