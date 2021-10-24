import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Nro de trabajadores:', 159),
  createData('KiloWhatts al mes', 237),
  createData('Consumo de papel/millas', 262),
  createData('Consumo promedio de gasolina', 105),
  createData('Consumo de Agua Potable', 156),
  createData('Cantidad de computdoras', 156),
];

const ModalRecalculo = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        <Typography
          id='modal-modal-title'
          variant='h3'
          component='h2'
          style={{ textAlign: 'center', color: 'rgb(108, 198, 93)' }}
        >
          🥳🥳 FELICIDADES 🥳🥳
        </Typography>
        <Typography
          id='modal-modal-description'
          sx={{ mt: 2 }}
          style={{
            textAlign: 'center',
            color: 'rgb(108, 198, 93)',
            fontSize: '1.5em',
          }}
        >
          Con la reducción de los tipos de emisión, lograrás las siguientes metas
        </Typography>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 450 }} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>Tipo de emisión</TableCell>
                <TableCell align='right'>Cantidad CO2</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component='th' scope='row'>
                    {row.name}
                  </TableCell>
                  <TableCell align='right'>{row.calories}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Modal>
  );
};

export default ModalRecalculo;
