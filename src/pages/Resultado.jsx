import React, { useContext } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';

import ItemResult from '../components/ItemResult';

import { green, pink } from '@mui/material/colors';

import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import ReceiptIcon from '@mui/icons-material/Receipt';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import OpacityIcon from '@mui/icons-material/Opacity';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';

import { useHistory } from 'react-router-dom';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import Paper from '@mui/material/Paper';
import CalculadoraContext from '../context/Calculadora/CalculadoraContext';

import Header from '../components/Header';

const theme = createTheme();

const simulacion = [
  {
    title: 'Nro de trabajadores',
    value: 6000,
    icon: <EmojiPeopleIcon/>,
    percentage: 100,
  },
  {
    title: 'Kilo Whatss al mes',
    value: 5000,
    icon: <ReceiptIcon/>,
    percentage: 90,
  },
  {
    title: 'Consumo de papel',
    value: 4000,
    icon: <LocalGasStationIcon/>,
    percentage: 80,
  },
  {
    title: 'Consumo promedio de gasoina',
    value: 3000,
    icon: <OpacityIcon/>,
    percentage: 70,
  },
  {
    title: 'Consumo de Agua potable',
    value: 2000,
    icon: <ImportantDevicesIcon/>,
    percentage: 60,
  },
  {
    title: 'Cantidad de computadoras',
    value: 1000,
    icon: <ElectricalServicesIcon/>,
    percentage: 50,
  },
];

const Resultado = () => {
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
                style={{ color: 'rgb(231 44 44 / 84%)', fontWeight: '600' }}
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
                {simulacion.map((item, index) => (
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
                component='h1'
                variant='h5'
                sx={{
                  pt: 4,
                }}
              >
                Datos de la Empresa
              </Typography>
            </Box>
          </Grid>
        </main>
      </Container>
    </ThemeProvider>
  );
};

export default Resultado;
