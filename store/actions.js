import { LOAD_FILMS } from './constants';
import { loadAllItems } from '../helpers/api-util';
import { load } from '../helpers/db-util';

export const loadFilms = (films) => {
  (dispatch) => {
    dispatch({
      type: LOAD_FILMS,
      payload: films,
    });
  };
}

