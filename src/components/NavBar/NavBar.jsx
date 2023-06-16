import React, { useState } from 'react';
import { AppBar, Avatar, Button, Drawer, IconButton, useMediaQuery } from '@mui/material';
import { AccountCircle, Brightness4, Brightness7, Menu } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { Search, Sidebar } from '..';
import { StyledDrawer, StyledToolBar, StyledMenuButton, StyledDrawerPaper, StyledLinkedButton } from './styles';

const NavBar = () => {
  console.log('NavBar');
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');
  const theme = useTheme();
  const isAuthenticated = true;
  return (
    <>
      <AppBar position="fixed">
        <StyledToolBar>
          {isMobile && (
          <StyledMenuButton
            color="inherit"
            edge="start"
            style={{ outline: 'none' }}
            onClick={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
          >
            <Menu />
          </StyledMenuButton>
          )}
          <IconButton color="inherit" sx={{ ml: 1 }} onClick={() => {}}>
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 /> }
          </IconButton>
          {!isMobile && <Search />}
          <div>
            {!isAuthenticated ? (
              <Button color="inherit" onClick={() => {}}>
                Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <StyledLinkedButton
                color="inherit"
                component={Link}
                to="/profile/:id"
                onClick={() => {}}
              >
                {!isMobile && <>My Movies &nbsp; </>}
                <Avatar
                  style={{ width: 30, height: 30 }}
                  alt="Profile"
                  src="https://avatar.amuniversal.com/user_avatars/avatars_gocomicsver3/3269000/3269805/0C075B03-513B-4A21-9426-D09886E3DECA.jpeg"
                />
              </StyledLinkedButton>
            )}
          </div>
          {isMobile && <Search />}
        </StyledToolBar>
      </AppBar>
      <div>
        <StyledDrawer>
          {isMobile ? (
            <Drawer variant="temporary" anchor="right" open={mobileOpen} onClose={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)} classes={{ paper: StyledDrawerPaper }} ModalProps={{ keepMounted: true }}>
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          ) : (
            <Drawer classes={{ paper: StyledDrawerPaper }} variant="permanent" open>
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          )}
        </StyledDrawer>
      </div>
    </>
  );
};

export default NavBar;
