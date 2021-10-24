import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';

const ItemSugerencia = ({ data }) => {
  const { title, value } = data;
  return (
    <Box sx={{ width: 300 }}>
      <Typography gutterBottom sx={{ mb: 4 }}>
        {title}
      </Typography>
      <Slider
        aria-label='Always visible'
        defaultValue={value ? value / 2 : 0}
        step={1}
        max={value}
        valueLabelDisplay='on'
      />
    </Box>
  );
};

export default ItemSugerencia;
