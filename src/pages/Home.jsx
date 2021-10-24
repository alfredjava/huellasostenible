import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import VisibilityIcon from "@mui/icons-material/Visibility";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import juegos from "../juegos.jpg";
import email from "../email.jpg";
import televisor from "../televisor.jpg";
import papel from "../papel.jpg";
import automovil from "../automovil.jpg";
import agua from "../agua.jpg";
import Header from "../components/Header";

const theme = createTheme();
const informaciones =[{"id":1,"imagen":juegos,"titulo":"Videojuegos","consumo":"Genera 50 Kg de CO2 al año."},{"id":2,"imagen":email,"titulo":"Enviar un email","consumo":"Genera 4g de CO2."},{"id":3,"imagen":televisor,"titulo":"Ver la TV","consumo":"Genera 35 Kg de CO2 al año."},{"id":4,"imagen":papel,"titulo":"Consumo de Papel","consumo":"Cada tonelada de papel que se recicla evita que se talen 3,14 toneladas de árboles"},{"id":5,"imagen":automovil,"titulo":"consumo de gasolina","consumo":"Un automóvil quema un galón de gasolina genera alrededor de 9,07kg de CO2"},{"id":6,"imagen":agua,"titulo":"consumo de agua potable","consumo":"genera 4Kg de CO2 por m3 de agua consumida"}]
const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header goTo={"/registrar"} />
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
                color="text.primary"
                paragraph
              >
                Reduce estas acciones habituales de tu día cotidiano y ayudarás
                a contribuir al planeta y a la de tu familia
              </Typography>

              <Grid container spacing={4}>
                {informaciones.map((info) => (
                  <Grid item key={info.id} xs={12} sm={6} md={4}>
                    <Card
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <CardMedia component="img" image={info.imagen} alt="random" />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h2">
                        {info.titulo}
                        </Typography>
                        <Typography color="text.secondary">
                        {info.consumo}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small" startIcon={<VisibilityIcon />}>
                          Más Información
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Box>
        </main>
      </Container>
    </ThemeProvider>
  );
};

export default Home;
