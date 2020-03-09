import counterReducers from './counter'
import isLoggedReducers from './isLogged'
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    counter: counterReducers,
    isLogged: isLoggedReducers
});

export default allReducers;