import React, { useState, useEffect } from 'react';
import { InputAdornment, TextField } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { SearchContainer, StyledInput, StyledTextField } from './styles';
import { searchMovie } from '../../features/currentGenreOrCategory';

const Search = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      dispatch(searchMovie(query));
    }
  };
  return (
    <SearchContainer>
      <TextField
        onKeyPress={handleKeyPress}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        variant="standard"
        InputProps={{
          inputComponent: StyledInput,
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </SearchContainer>
  );
};

export default Search;
