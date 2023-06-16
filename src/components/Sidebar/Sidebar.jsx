import React from 'react';
// import { Divider, List, ListItem, ListItemText, ListSubheader,  Box, CircularProgress } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { CircularProgress, Divider, List, ListItem, ListSubheader, ListItemIcon, ListItemText } from '@mui/material';
// import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';

import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';
import { useGetGenersQuery } from '../../services/TMDB';
import { StyledLink, StyledImage, StyledCategoryLink, StyledGeneralImage } from './styles';
import genreIcons from '../../assets/genres';

const Categories = [
  { label: 'Popular', value: 'popular' },
  { label: 'Top Rated', value: 'top_rated' },
  { label: 'Upcoming', value: 'upcoming' },
];

const redLogo = 'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';
const blueLogo = 'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';

const Sidebar = (/* {  setMobileOpen } */) => {
  const { genreIdOrCategoryName } = useSelector((state) => state.currentGenreOrCategory);
  const theme = useTheme();
  const { data, isFetching } = useGetGenersQuery();
  const dispatch = useDispatch();
  return (
    <>
      <StyledLink to="/">
        <StyledImage
          src={theme.palette.mode === 'light' ? redLogo : blueLogo}
          alt="Filmpire logo"
        />
      </StyledLink>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {Categories.map(({ label, value }) => (
          <StyledCategoryLink key={value} className="Links" to="/">
            <ListItem onClick={() => dispatch(selectGenreOrCategory(value))} button>
              <ListItemIcon>
                <StyledGeneralImage src={genreIcons[label.toLowerCase()]} height={30} />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          </StyledCategoryLink>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>
        {isFetching ? (
          <Box display="flex" justifyContent="center">
            <CircularProgress size="4rem" />
          </Box>

        ) : data.genres.map(({ name, id }) => (
          <StyledCategoryLink key={name} to="/">
            <ListItem onClick={() => dispatch(selectGenreOrCategory(id))} button>
              <ListItemIcon>
                <StyledGeneralImage src={genreIcons[name.toLowerCase()]} height={30} />
              </ListItemIcon>
              <ListItemText primary={name} />
            </ListItem>
          </StyledCategoryLink>
        ))}
      </List>
    </>
  );
};

export default Sidebar;
