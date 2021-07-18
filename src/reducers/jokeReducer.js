import { ADD_JOKE, DELETE_JOKE } from '../actions/types';

const initialState = {
  jokeList: []
}

const jokeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_JOKE:
      return {
        ...state,
        foodList: state.jokeList.concat({
          key: Math.random(),
          name: action.data
        })
      };
    case DELETE_JOKE:
      return {
        ...state,
        foodList: state.jokeList.filter((item) =>
          item.key !== action.key)
      };
    default:
      return state;
  }
}

export default jokeReducer;