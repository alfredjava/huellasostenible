import React, { useContext } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';

import Button from '@mui/material/Button';

import ItemResult from '../components/ItemResult';
import ItemSugerencia from '../components/ItemSugerencia';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import Paper from '@mui/material/Paper';
import CalculadoraContext from '../context/Calculadora/CalculadoraContext';

import Header from '../components/Header';
import ModalRecalculo from '../components/ModalRecalculo';

import useResult from '../hooks/useResult';

const theme = createTheme();

const Resultado = () => {
  const { datosCalculadora } = useContext(CalculadoraContext);

  const [info] = useResult(datosCalculadora);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth='lg'>
        <Header />
        <main
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '3em',
          }}
        >
          <Grid
            item
            xs={12}
            sm={8}
            md={6}
            component={Paper}
            elevation={2}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography
                component='h2'
                variant='h3'
                style={{ color: 'rgb(231 44 44 / 84%)' }}
                sx={{
                  pt: 0,
                }}
              >
                RESULTADO
              </Typography>
              <Typography
                component='h2'
                variant='h2'
                style={{
                  color: 'rgb(231 44 44 / 84%)',
                  fontWeight: '600',
                  marginBottom: '1em',
                }}
                sx={{
                  pt: 0,
                }}
              >
                5000 CO2
              </Typography>
              <List
                sx={{
                  width: '100%',
                  maxWidth: 360,
                  bgcolor: 'background.paper',
                }}
              >
                {info.map((item, index) => (
                  <ItemResult data={item} key={index} />
                ))}
              </List>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={8}
            md={6}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography
                component='h2'
                variant='h3'
                style={{
                  color: 'rgb(108 198 93)',
                  textAlign: 'center',
                  marginBottom: '1em',
                }}
                sx={{
                  pt: 0,
                }}
              >
                Sugerencia para reducir el{' '}
                <span style={{ fontWeight: '700' }}> CO2 </span>
              </Typography>
              {info.map((item) => (
                <ItemSugerencia key={item.id} data={item} />
              ))}
              <Button variant='contained' onClick={handleOpen}>Recalcular</Button>
              <ModalRecalculo open={open} handleClose={() => setOpen(false)}/>
            </Box>
          </Grid>
        </main>
      </Container>
    </ThemeProvider>
  );
};

export default Resultado;
