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
  CREATE_CURRENT_POST_START,
  CREATE_CURRENT_POST_SUCCESS,
  SET_FILTER_SEARCH_POST,
  LOAD_SEARCH_POST_START,
  SET_SEARCH_POST_SUCCESS,
  SET_FILTER_SEARCH_POST_SELECT,
  LOAD_SEARCH_POST_START_SELECT,
  SET_SEARCH_POST_SUCCESS_SELECT,
  CLEAN_SEARCH_POST_SELECT,
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
  filterSearchPost: [],
  loadingSearchPost: false,
  filterSearchPostSelect: [],
  loadingSearchPostSelect: false,
  filterTitle: 'Classic',
  loadingUpdate: false,
};

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_POSTS: {
      return {
        ...state,
        posts: action.payload,
        // filterSearchPost: action.payload,
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
      const readListPosts = state.readListPosts.filter(post => post.id !== action.payload);
      return {
        ...state,
        readListPosts,
        countOfList: readListPosts.length,
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

    case SET_FILTER_SEARCH_POST: {
      console.log(action.payload);
      return {
        ...state,
        filterSearchPost: state.posts.filter(post => post.title.includes(action.payload.toLowerCase())),
      };
    }

    case LOAD_SEARCH_POST_START: {
      console.log(action.payload);
      return {
        ...state,
        loadingSearchPost: true,
      };
    }
    case SET_SEARCH_POST_SUCCESS: {
      console.log(action.payload);
      return {
        ...state,
        loadingSearchPost: false,
        filterSearchPost: action.payload,
      };
    }

    case SET_FILTER_SEARCH_POST_SELECT: {
      console.log(action.payload);
      return {
        ...state,
        filterSearchPostSelect: state.posts.filter(post => post.title),
      };
    }

    case LOAD_SEARCH_POST_START_SELECT: {
      console.log(action.payload);
      return {
        ...state,
        loadingSearchPostSelect: true,
      };
    }
    case SET_SEARCH_POST_SUCCESS_SELECT: {
      console.log(action.payload);
      return {
        ...state,
        loadingSearchPostSelect: false,
        filterSearchPostSelect: action.payload,
      };
    }
    case CLEAN_SEARCH_POST_SELECT: {
      return {
        ...state,
        filterSearchPostSelect: [],
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

    case CREATE_CURRENT_POST_START: {
      console.log(action);
      return {
        ...state,
        loadingUpdate: true,
      };
    }
    case CREATE_CURRENT_POST_SUCCESS: {
      console.log(action);
      return {
        ...state,
        posts: [...state.posts, action.payload],
        loadingUpdate: false,
      };
    }

    default:
      return state;
  }
}
