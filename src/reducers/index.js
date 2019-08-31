import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter'

const appReducer = combineReducers({
    todos,
    visibilityFilter,
});


export default appReducer;