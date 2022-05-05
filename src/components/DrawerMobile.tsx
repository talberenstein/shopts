import React, { useState } from "react";
import { Link } from "react-router-dom";

import Drawer from "@mui/material/Drawer";
import { IconButton, List, ListItem, ListItemText } from "@mui/material";
import { makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";
import AcUnitIcon from "@mui/icons-material/AcUnit";

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: "none",
    color: "purple",
    fontSize: "16px",
  },
  icon: {
    color: "white",
  },
}));

const DrawerMobile: React.FC = (props) => {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          <ListItem>
            <ListItemText>
              <Link to="/" className={classes.link}>
                Home
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Link to="/about" className={classes.link}>
                About
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Link to="/contact" className={classes.link}>
                Contact
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Link to="/faq" className={classes.link}>
                FAQ
              </Link>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "purple" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        {openDrawer ? <MenuIcon /> : <AcUnitIcon />}
      </IconButton>
    </>
  );
};

export default DrawerMobile;
