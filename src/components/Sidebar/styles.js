import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)(() => ({
  display: 'flex',
  justifyContent: 'center',
  padding: '10% 0',
}));

export const StyledImage = styled('img')(() => ({
  height: '70%',
}));

export const StyledCategoryLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: 'none',
}));
export const StyledGeneralImage = styled('img')(({ theme }) => ({
  filter: theme.palette.mode === 'dark' ? 'invert(1)' : 'dark',
}));
