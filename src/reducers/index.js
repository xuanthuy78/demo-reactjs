import { combineReducers } from 'redux';
import comments from './comments';

const appReducers = combineReducers({
  comments
});

export default appReducers;