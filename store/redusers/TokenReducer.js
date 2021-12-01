import { ADD_TOKEN } from '../constants';

const initialState = 0;

const tokenState = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TOKEN: return action.payload;
    default: return state;
  }
};

export default tokenState;