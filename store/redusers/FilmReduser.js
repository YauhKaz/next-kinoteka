import { LOAD_FILMS } from '../constants';

const initialState = {
  films: [],
};

const filmState = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_FILMS: {
      return action.payload;
    }    
    default: return state;
  }
};

export default filmState;