import { LOAD_POSTS, SET_POSTS } from './types';

const initialState = {
  posts: [],
  loading: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_POSTS: {
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    }
    case LOAD_POSTS: {
      return {
        ...state,
        loading: true,
      };
    }
    default:
      return state;
  }
}
