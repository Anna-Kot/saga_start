import {
  LOAD_POSTS,
  SET_POSTS,
  LOAD_CURRENT_POST,
  SET_CURRENT_POST,
  SET_READ_LIST_POST,
  SET_COUNT_READ_LIST_POST,
  DELETE_COUNT_READ_LIST_POST,
  DELETE_READ_LIST_POST,
  DELETE_READ_LIST_POST_2,
} from './types';

const initialState = {
  posts: [],
  openedPost: null,
  loading: false,
  loadingCurrentPost: false,
  countOfList: 0,
  readListPosts: [],
};

export default function postsReducer(state = initialState, action) {
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
        loadingCurrentPost: false,
      };
    }
    case LOAD_CURRENT_POST: {
      return {
        ...state,
        loadingCurrentPost: true,
      };
    }
    case SET_READ_LIST_POST: {
      return {
        ...state,
        readListPosts: action.payload,
      };
    }
    case DELETE_READ_LIST_POST: {
      return {
        ...state,
        readListPosts: state.readListPosts.filter(el => el.id !== action.payload.id),
      };
    }
    case DELETE_READ_LIST_POST_2: {
      return {
        ...state,
        readListPosts: action.payload,
      };
    }

    case SET_COUNT_READ_LIST_POST: {
      return {
        ...state,
        countOfList: state.countOfList + 1,
      };
    }
    case DELETE_COUNT_READ_LIST_POST: {
      return {
        ...state,
        countOfList: state.countOfList - 1,
      };
    }
    default:
      return state;
  }
}
