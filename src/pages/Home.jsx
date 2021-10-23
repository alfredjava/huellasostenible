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

import Header from "../components/Header";

const theme = createTheme();
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
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
                a contribuir al planeta y a tu vida
              </Typography>

              <Grid container spacing={4}>
                {cards.map((card) => (
                  <Grid item key={card} xs={12} sm={6} md={4}>
                    <Card
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <CardMedia component="img" image={juegos} alt="random" />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h2">
                          Videojuegos
                        </Typography>
                        <Typography color="text.secondary">
                          Genera 50 Kg de CO2 al año.
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
