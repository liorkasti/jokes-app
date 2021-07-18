import { ADD_JOKE, DELETE_JOKE } from './types';

export const addJoke = (joke) => (
  {
    type: ADD_JOKE,
    data: joke
  }
);

export const deleteJoke = (key) => (
  {
    type: DELETE_JOKE,
    key: key
  }
);
