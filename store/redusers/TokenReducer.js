import ADD_TOKEN from '../constants';

const initialState = {
  token: 0,
};

const tokenState = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TOKEN: 
      return state + 1;
    default: return state;
  }
};

export default tokenState;