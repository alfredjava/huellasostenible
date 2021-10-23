import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { Link } from "react-router-dom";

import logo from "../assets/logo.png";

const Header = ({ goTo }) => {
  return (
    <>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          style={{ color: "#6cc550" }}
          noWrap
          sx={{ flex: 1 }}
        >
          Calculadora Verde
        </Typography>
        {goTo ? (
          <Button variant="outlined" size="small" component={Link} to={goTo}>
            INICIAR
          </Button>
        ) : (
          <Button variant="outlined" size="small" component={Link}>
            salva al planeta
          </Button>
        )}
      </Toolbar>
    </>
  );
};

export default Header;
