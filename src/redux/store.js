import todosReducer from './reducers/todosReducer.js';
import { combineReducers, createStore } from 'redux';

export const rootReducer = combineReducers({
  todos: todosReducer,
});

const store = createStore(rootReducer);

export default store;
