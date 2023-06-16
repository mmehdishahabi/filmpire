import { styled } from '@mui/material/styles';
import { Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const StyledMovie = styled(Grid)(() => ({
  padding: '10px',
}));

export const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  textOverflow: 'ellipsis',
  width: '190px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  margin: '10px',
  marginBottom: 0,
  textAlign: 'center',
}));
export const Links = styled(Link)(({ theme }) => ({
  alignItems: 'center',
  textDecoration: 'none',
  fontWeight: 'bolder',
  [theme.breakpoints.up('xs')]: {
    display: 'flex',
    flexDirection: 'column',
  },
  '&:hover': {
    cursor: 'pointer',
  },
}));
export const Image = styled('img')(() => ({
  borderRadius: '20px',
  height: '300px',
  marginBottom: '10px',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));
