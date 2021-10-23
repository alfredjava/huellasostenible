import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import logo from "../assets/logo.png";
import fondo from "../assets/fondo.jpg";

import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const theme = createTheme();

const top100Films = [
  { label: "Servicios Financieros", value: 1994 },
  { label: "Servicios Administrativos y Contables", value: 1972 },
  { label: "Salud y Bienestar", value: 1974 },
  { label: "Juegos y Entretenimiento", value: 2008 },
  { label: "Computación y equipo de Oficina", value: 1957 },
];

const Registro = () => {

    let history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push('/calculadora')
    
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />

        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Link to="/">
              <img src={logo} className="App-logo" alt="logo" />
            </Link>
            <Typography
              component="h1"
              variant="h5"
              sx={{
                pt: 4,
              }}
            >
              Datos de la Empresa
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="nombre"
                label="Nombre de la empresa"
                name="nombre"
                autoComplete="nombre"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="Ruc"
                label="Ruc"
                type="text"
                id="Ruc"
                autoComplete="Ruc"
              />
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                renderInput={(params) => (
                  <TextField {...params} label="Rubro" />
                )}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Continuar
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${fondo})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </Grid>
    </ThemeProvider>
  );
};

export default Registro;
