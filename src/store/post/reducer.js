import { LOAD_POSTS, SET_POSTS, LOAD_CURRENT_POST, SET_CURRENT_POST } from './types';

const initialState = {
  posts: [],
  openedPost: null,
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
    case SET_CURRENT_POST: {
      return {
        ...state,
        openedPost: action.payload,
        loading: false,
      };
    }
    case LOAD_CURRENT_POST: {
      return {
        ...state,
        loading: true,
      };
    }
    default:
      return state;
  }
}
