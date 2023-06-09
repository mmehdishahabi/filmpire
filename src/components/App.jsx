import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { Actors, MovieInformation, Movies, NavBar, Profile } from '.';

import { RootDiv, ToolBar, Content } from './styles';

const App = () => {
  console.log('styles');
  return (
    <RootDiv>
      <CssBaseline />
      <NavBar />
      <Content>
        <ToolBar />
        <Routes>
          <Route path="/movie/:id" element={<MovieInformation />} />
          <Route path="/actors/:id" element={<Actors />} />
          <Route path="/" element={<Movies />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </Content>
    </RootDiv>

  );
};

export default App;
