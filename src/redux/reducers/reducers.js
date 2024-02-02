import { combineReducers } from 'redux';
import userReducer from './userReducer';
import repositoriesReducer from './repositoriesReducer';

const rootReducer = combineReducers({
    userData: userReducer,
    repositoriesData: repositoriesReducer
});

export default rootReducer;