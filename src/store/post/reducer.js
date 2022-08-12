import {
  LOAD_POSTS,
  SET_POSTS,
  REMOVE_POST_START,
  REMOVE_POST_SUCCESS,
  LOAD_CURRENT_POST,
  SET_CURRENT_POST,
  CLEAR_CURRENT_POST,
  SET_READ_LIST_POST,
  DELETE_READ_LIST_POST,
  SET_FILTER_POSTS,
  UPDATE_CURRENT_POST_START,
  UPDATE_CURRENT_POST_SUCCESS,
} from './types';

const initialState = {
  posts: [],
  openedPost: null,
  loading: false,
  loadingRemove: false,
  loadingCurrentPost: false,
  countOfList: 0,
  readListPosts: [],
  filterPosts: [],
  filterTitle: 'Classic',
  loadingUpdate: false,
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

    case REMOVE_POST_START: {
      console.log(action.payload);
      return {
        ...state,
        loadingRemove: true,
      };
    }
    case REMOVE_POST_SUCCESS: {
      console.log(action.payload);
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload),
        loadingRemove: false,
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

    case UPDATE_CURRENT_POST_START: {
      console.log(action);
      return {
        ...state,
        loadingUpdate: true,
      };
    }
    case UPDATE_CURRENT_POST_SUCCESS: {
      console.log(action);
      return {
        ...state,
        posts: state.posts.map(post => {
          if (post.id === action.payload.id) {
            return action.payload;
          } else {
            return post;
          }
        }),
        loadingUpdate: false,
      };
    }

    default:
      return state;
  }
}
