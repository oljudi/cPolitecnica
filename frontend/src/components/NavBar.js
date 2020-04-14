import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { MenuBookTwoTone } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function NavBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuBookTwoTone />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Red Intercultural Politecnica
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
