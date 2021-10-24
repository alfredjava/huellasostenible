import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import * as Yup from 'yup';
import { useFormik } from 'formik';

import CalculadoraContext from '../context/Calculadora/CalculadoraContext';

import logo from '../assets/logo.png';
import fondo from '../assets/fondo.jpg';

const theme = createTheme();

const top100Films = [
  { label: 'Servicios Financieros', value: 1994 },
  { label: 'Servicios Administrativos y Contables', value: 1972 },
  { label: 'Salud y Bienestar', value: 1974 },
  { label: 'Juegos y Entretenimiento', value: 2008 },
  { label: 'Computación y equipo de Oficina', value: 1957 },
];

const initialValues = {
  nombre: '',
  rubro: '',
};

const validationSchema = Yup.object({
  nombre: Yup.string().required('Cambo es requerido'),
  rubro: Yup.string().required('Cambo es requerido'),
});

const Registro = () => {

  let history = useHistory();

  const consumer = useContext(CalculadoraContext);

  const { guardarDatosUsuario } = consumer;

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (valores) => {
      const { nombre, rubro } = valores;
      guardarDatosUsuario({nombre, rubro: JSON.parse(rubro)});
      history.push('/calculadora');
    },
  });


  return (
    <ThemeProvider theme={theme}>
      <Grid container component='main' sx={{ height: '100vh' }}>
        <CssBaseline />

        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Link to='/'>
              <img src={logo} className='App-logo' alt='logo' />
            </Link>
            <Typography
              component='h1'
              variant='h5'
              sx={{
                pt: 4,
              }}
            >
              Datos de la Empresa
            </Typography>
            <Box
              component='form'
              noValidate
              onSubmit={formik.handleSubmit}
              sx={{ mt: 1, minWidth: "24em" }}
            >
              <TextField
                margin='normal'
                required
                fullWidth
                id='nombre'
                label='Nombre de la empresa'
                name='nombre'
                autoComplete='nombre'
                autoFocus
                onChange={(formik.handleChange)}
                value={formik.values.nombre}
                error={formik.touched.nombre && Boolean(formik.errors.nombre)}
                helperText={formik.touched.nombre && formik.errors.nombre}
              />
              <Autocomplete
                disablePortal
                id='rubro'
                options={top100Films}
                onChange={(_, value) => formik.setFieldValue("rubro", JSON.stringify(value) || "")}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label='Rubro'
                    name='rubro'
                    error={formik.touched.rubro && Boolean(formik.errors.rubro)}
                    helperText={formik.touched.rubro && formik.errors.rubro}
                  />
                )}
              />
              <Button
                type='submit'
                fullWidth
                variant='contained'
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
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light'
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </Grid>
    </ThemeProvider>
  );
};

export default Registro;
