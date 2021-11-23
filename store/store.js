import { createStore, combineReducers } from 'redux';
import listState from './redusers/UserReducer';
import tokenState from './redusers/TokenReducer';

const rootReducer = combineReducers({
  users: listState,
  token: tokenState,
});

const store = createStore(
  rootReducer, /* preloadedState, */
);

//, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
export default store;