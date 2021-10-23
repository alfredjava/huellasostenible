import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import Paper from "@mui/material/Paper";

import Header from "../components/Header";

const theme = createTheme();

const Calculadora = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header />
        <main>
          <Box
            sx={{
              bgcolor: "background.paper",
              pt: 2,
              pb: 6,
            }}
          >
            <Container maxWidth="md">
              <Typography
                variant="h4"
                align="center"
                style={{ color: "#1074b5" }}
                paragraph
              >
                Calcula la huella de carbono que emites para luego compensarla
              </Typography>
            </Container>
            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
              <Paper
                variant="outlined"
                sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
              >
                <Typography
                  component="h1"
                  variant="h4"
                  align="center"
                  sx={{
                    mb: 4,
                  }}
                >
                  Calcular
                </Typography>

                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="trabajadores"
                      name="trabajadores"
                      label="Nro de trabajadores"
                      fullWidth
                      autoComplete="trabajadores"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="kwMes"
                      name="kwMes"
                      label="kilowatts al mmes"
                      fullWidth
                      autoComplete="kwMes"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="consumoPapel"
                      name="consumoPapel"
                      label="Consumo de papel (millares)"
                      fullWidth
                      autoComplete="consumoPapel"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="consumoGasolina"
                      name="consumoGasolina"
                      label="Consumo promedio de Gasolina/empleado"
                      fullWidth
                      autoComplete="consumoGasolina"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="consumoAgua"
                      name="consumoAgua"
                      label="Consumo de agua potable"
                      fullWidth
                      autoComplete="consumoAgua"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="cantidadComputadora"
                      name="cantidadComputadora"
                      label="Cantidad de computadoras"
                      fullWidth
                    />
                  </Grid>
                </Grid>
                <Button variant="contained" sx={{ mt: 3 }}>
                  continuar
                </Button>
              </Paper>
            </Container>
          </Box>
        </main>
      </Container>
    </ThemeProvider>
  );
};

export default Calculadora;
