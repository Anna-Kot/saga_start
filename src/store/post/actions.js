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
} from "./types";

export const loadPosts = (payload) => ({
  type: LOAD_POSTS,
  payload,
});
export const setPosts = (payload) => ({
  type: SET_POSTS,
  payload,
});
export const removeSinglePostStart = (payload) => ({
  type: REMOVE_POST_START,
  payload,
});
export const removeSinglePostSuccess = (payload) => ({
  type: REMOVE_POST_SUCCESS,
  payload,
});

export const loadCurrentPost = (payload) => ({
  type: LOAD_CURRENT_POST,
  payload,
});
export const setCurrentPost = (payload) => ({
  type: SET_CURRENT_POST,
  payload,
});
export const clearCurrentPost = (payload) => ({
  type: CLEAR_CURRENT_POST,
  payload,
});

export const setReadListPost = (payload) => ({
  type: SET_READ_LIST_POST,
  payload,
});

export const deleteReadListPost = (payload) => ({
  type: DELETE_READ_LIST_POST,
  payload,
});

export const setFilterSearchPosts = (payload) => ({
  type: SET_FILTER_SEARCH_POST,
  payload,
});
export const loadSearchPostsStart = (payload) => ({
  type: LOAD_SEARCH_POST_START,
  payload,
});
export const setSearchPostsSuccess = (payload) => ({
  type: SET_SEARCH_POST_SUCCESS,
  payload,
});

export const setFilterSearchPostsSelect = (payload) => ({
  type: SET_FILTER_SEARCH_POST_SELECT,
  payload,
});
export const loadSearchPostsStartSelect = (payload) => ({
  type: LOAD_SEARCH_POST_START_SELECT,
  payload,
});
export const setSearchPostsSuccessSelect = (payload) => ({
  type: SET_SEARCH_POST_SUCCESS_SELECT,
  payload,
});
export const clearSearchPostSelect = (payload) => ({
  type: CLEAN_SEARCH_POST_SELECT,
  payload,
});

export const setFilterPosts = (payload) => ({
  type: SET_FILTER_POSTS,
  payload,
});

export const updateCurrentPostStart = (payload) => ({
  type: UPDATE_CURRENT_POST_START,
  payload,
});
export const updateCurrentPostSuccess = (payload) => ({
  type: UPDATE_CURRENT_POST_SUCCESS,
  payload,
});

export const createCurrentPostStart = (payload) => ({
  type: CREATE_CURRENT_POST_START,
  payload,
});
export const createCurrentPostSuccess = (payload) => ({
  type: CREATE_CURRENT_POST_SUCCESS,
  payload,
});
