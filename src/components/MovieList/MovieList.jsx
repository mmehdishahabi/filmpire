import React from 'react';
import { MoviesContainer } from './styles';
import { Movie } from '..';

const MovieList = ({ movies }) => (
  <MoviesContainer container>
    {movies.results.map((movie, i) => (
      <Movie key={i} movie={movie} i={i} />
    ))}
  </MoviesContainer>
);

export default MovieList;
