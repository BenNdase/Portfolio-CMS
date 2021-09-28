import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { NavLink } from "react-router-dom";
import "./Menu.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className="menu">
        <Toolbar className="menu__container">
          <Typography variant="h6" className="menu__title">
            Ben Ndase
          </Typography>
          <div className="menu__items">
            <NavLink exact activeClassName="current" aria-current="page" to="/">
              Accueil
            </NavLink>
            <NavLink exact activeClassName="current" to="/a-propos">
              A propos
            </NavLink>
            <NavLink exact activeClassName="current" to="/projets">
              Project
            </NavLink>
            <NavLink exact activeClassName="current" to="/contacter">
              Contacter
            </NavLink>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
