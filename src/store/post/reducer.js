import {
  LOAD_POSTS,
  SET_POSTS,
  LOAD_CURRENT_POST,
  SET_CURRENT_POST,
  CLEAR_CURRENT_POST,
  SET_READ_LIST_POST,
  DELETE_READ_LIST_POST,
  SET_FILTER_POSTS,
} from './types';

const initialState = {
  posts: [],
  openedPost: null,
  loading: false,
  loadingCurrentPost: false,
  countOfList: 0,
  readListPosts: [],
  filterPosts: [],
  filterTitle: '',
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
    case CLEAR_CURRENT_POST: {
      return {
        ...state,
        openedPost: null,
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
        readListPosts: [...state.readListPosts, action.payload],
        countOfList: ++state.countOfList,
      };
    }
    case DELETE_READ_LIST_POST: {
      return {
        ...state,
        readListPosts: state.readListPosts.filter(post => post.id !== action.payload),
        countOfList: --state.countOfList,
      };
    }
    case SET_FILTER_POSTS: {
      console.log(action.payload);
      return {
        ...state,
        filterTitle: action.payload,
        filterPosts: state.posts.filter(post => post.tags.includes(action.payload.toLowerCase())),
        // filterPosts: state.posts.filter(post => {
        //   const tags = post.tags;
        //   let match = tags.some(tag => tag === action.payload.toLowerCase());
        //   console.log('match', match);
        //   if (match) return post;
        // }),
      };
    }

    default:
      return state;
  }
}
