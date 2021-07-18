import { createStore, combineReducers } from 'redux';
import jokeReducer from '../reducers/jokeReducer';

const rootReducer = combineReducers({
  jokeReducer: jokeReducer
})

const configureStore = () => createStore(rootReducer);

export default configureStore;