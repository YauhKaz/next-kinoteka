import { LOAD_FILMS } from './constants';

export const loadFilms = (films) => {
    return(
    {
      type: LOAD_FILMS,
      payload: films,
    })
};
