import { styled } from '@mui/system';
import { Button, IconButton, Toolbar, Paper } from '@mui/material';
// import { Button, IconButton, Toolbar, Drawer, Paper } from '@mui/material';

const drawerWidth = 240;

export const StyledToolBar = styled(Toolbar)(({ theme }) => ({
  height: '80px',
  display: 'flex',
  justifyContent: 'space-between',
  marginLeft: '240px',
  [theme.breakpoints.down('sm')]: {
    marginLeft: 0,
    flexWrap: 'wrap',
  },
}));

export const StyledMenuButton = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  marginRight: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

export const StyledLinkedButton = styled(Button)(() => ({
  '&:hover': {
    color: 'white !important',
    textDecoration: 'none',
  },
}));

export const StyledDrawerPaper = styled(Paper)(() => ({
  width: drawerWidth,
}));

export const StyledDrawer = styled('nav')(({ theme }) => ({

  [theme.breakpoints.up('sm')]: {
    width: drawerWidth,
    flexShrink: 0,
  },
}));
