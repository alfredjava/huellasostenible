import React, { useContext } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import ReceiptIcon from '@mui/icons-material/Receipt';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import OpacityIcon from '@mui/icons-material/Opacity';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import { useHistory } from 'react-router-dom';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import * as Yup from 'yup';
import { useFormik } from 'formik';

import Paper from '@mui/material/Paper';
import CalculadoraContext from '../context/Calculadora/CalculadoraContext';

import Header from '../components/Header';

const theme = createTheme();

const initialValues = {
  nroTrabajadores: '',
  kwm: '',
  consumoPapel: '',
  consumoGasolina: '',
  consumoAgua: '',
  nroComputadoras: '',
};

const validationSchema = Yup.object({
  nroTrabajadores: Yup.number()
    .required('Campo requerido')
    .positive('solo numeros positivos')
    .integer('solo cantidades enteras'),
  kwm: Yup.number()
    .required('Campo requerido')
    .positive('solo numeros positivos'),
  consumoPapel: Yup.number()
    .required('Campo requerido')
    .positive('solo numeros positivos')
    .integer('solo cantidades enteras'),
  consumoGasolina: Yup.number()
    .required('Campo requerido')
    .positive('solo numeros positivos'),
  consumoAgua: Yup.number()
    .required('Campo requerido')
    .positive('solo numeros positivos'),
  nroComputadoras: Yup.number()
    .required('Campo requerido')
    .positive('solo numeros positivos')
    .integer('solo cantidades enteras'),
});

const Calculadora = () => {
  const consumer = useContext(CalculadoraContext);
  let history = useHistory();

  const { nombre, guardarDatosCalculadora } = consumer;

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (valores) => {
      const { nombre, rubro } = valores;
      guardarDatosCalculadora({
        ...valores,
      });
      history.push('/resultado');
      // guardarDatosUsuario({ nombre, rubro: JSON.parse(rubro) });
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth='lg'>
        <Header />
        <main>
          <Box
            sx={{
              bgcolor: 'background.paper',
              pt: 2,
              pb: 6,
            }}
          >
            <Container maxWidth='md'>
              <Typography
                variant='h2'
                align='center'
                style={{ color: 'rgb(37 127 62)' }}
                paragraph
              >
                Hola {nombre}
              </Typography>
              <Typography
                variant='h4'
                align='center'
                style={{ color: '#1074b5' }}
                paragraph
              >
                Calcula la huella de carbono que emites para luego compensarla
              </Typography>
            </Container>
            <Container component='main' maxWidth='md' sx={{ mb: 4 }}>
              <Paper
                variant='outlined'
                sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
              >
                <Typography
                  component='h1'
                  variant='h4'
                  align='center'
                  sx={{
                    mb: 4,
                  }}
                >
                  Calcular
                </Typography>

                <Box component='form' noValidate onSubmit={formik.handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        id='nroTrabajadores'
                        name='nroTrabajadores'
                        label='Nro de trabajadores'
                        fullWidth
                        autoComplete='nroTrabajadores'
                        type='number'
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position='start'>
                              <EmojiPeopleIcon />
                            </InputAdornment>
                          ),
                        }}
                        onChange={formik.handleChange}
                        value={formik.values.nroTrabajadores}
                        error={
                          formik.touched.nroTrabajadores &&
                          Boolean(formik.errors.nroTrabajadores)
                        }
                        helperText={
                          formik.touched.nroTrabajadores &&
                          formik.errors.nroTrabajadores
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        id='kwm'
                        name='kwm'
                        label='kilo Watts al mes'
                        fullWidth
                        autoComplete='kwm'
                        type='number'
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position='start'>
                              <ElectricalServicesIcon />
                            </InputAdornment>
                          ),
                        }}
                        onChange={formik.handleChange}
                        value={formik.values.kwm}
                        error={formik.touched.kwm && Boolean(formik.errors.kwm)}
                        helperText={formik.touched.kwm && formik.errors.kwm}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        id='consumoPapel'
                        name='consumoPapel'
                        label='Consumo de papel (millares)'
                        fullWidth
                        autoComplete='consumoPapel'
                        type='number'
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position='start'>
                              <ReceiptIcon />
                            </InputAdornment>
                          ),
                        }}
                        onChange={formik.handleChange}
                        value={formik.values.consumoPapel}
                        error={
                          formik.touched.consumoPapel &&
                          Boolean(formik.errors.consumoPapel)
                        }
                        helperText={
                          formik.touched.consumoPapel &&
                          formik.errors.consumoPapel
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        id='consumoGasolina'
                        name='consumoGasolina'
                        label='Consumo promedio de Gasolina/empleado'
                        fullWidth
                        autoComplete='consumoGasolina'
                        type='number'
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position='start'>
                              <LocalGasStationIcon />
                            </InputAdornment>
                          ),
                        }}
                        onChange={formik.handleChange}
                        value={formik.values.consumoGasolina}
                        error={
                          formik.touched.consumoGasolina &&
                          Boolean(formik.errors.consumoGasolina)
                        }
                        helperText={
                          formik.touched.consumoGasolina &&
                          formik.errors.consumoGasolina
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        id='consumoAgua'
                        name='consumoAgua'
                        label='Consumo de agua potable'
                        fullWidth
                        autoComplete='consumoAgua'
                        type='number'
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position='start'>
                              <OpacityIcon />
                            </InputAdornment>
                          ),
                        }}
                        onChange={formik.handleChange}
                        value={formik.values.consumoAgua}
                        error={
                          formik.touched.consumoAgua &&
                          Boolean(formik.errors.consumoAgua)
                        }
                        helperText={
                          formik.touched.consumoAgua &&
                          formik.errors.consumoAgua
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        id='nroComputadoras'
                        name='nroComputadoras'
                        label='Cantidad de computadoras'
                        fullWidth
                        type='number'
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position='start'>
                              <ImportantDevicesIcon />
                            </InputAdornment>
                          ),
                        }}
                        onChange={formik.handleChange}
                        value={formik.values.nroComputadoras}
                        error={
                          formik.touched.nroComputadoras &&
                          Boolean(formik.errors.nroComputadoras)
                        }
                        helperText={
                          formik.touched.nroComputadoras &&
                          formik.errors.nroComputadoras
                        }
                      />
                    </Grid>
                  </Grid>
                  <Button variant='contained' sx={{ mt: 3 }} type='submit'>
                    calcular
                  </Button>
                </Box>
              </Paper>
            </Container>
          </Box>
        </main>
      </Container>
    </ThemeProvider>
  );
};

export default Calculadora;
