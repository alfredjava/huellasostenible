import React from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';

import { green } from '@mui/material/colors';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#ff1a63' : '#308fe8',
  },
}));

const ItemResult = ({ data }) => {
  const { title, value, icon, percentage } = data;
  return (
    <ListItem alignItems='flex-start' sx={{ mb: 3 }}>
      <ListItemIcon>
        <Avatar sx={{ bgcolor: green[500] }}>
          {icon}
        </Avatar>
      </ListItemIcon>
      <ListItemText
        primary={
          <React.Fragment>
            <Typography
              sx={{ display: 'inline' }}
              component='p'
              variant='body2'
              color='text.primary'
            >
              {title}:{' '}
              <span style={{ fontWeight: 700 }}> {value} </span>
            </Typography>
          </React.Fragment>
        }
        secondary={
          <React.Fragment>
            <BorderLinearProgress variant='determinate' value={percentage} />
          </React.Fragment>
        }
      />
    </ListItem>
  );
};

export default ItemResult;
