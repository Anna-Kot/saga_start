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
} from './types';

export const loadPosts = payload => ({
  type: LOAD_POSTS,
  payload,
});
export const setPosts = payload => ({
  type: SET_POSTS,
  payload,
});
export const removeSinglePostStart = payload => ({
  type: REMOVE_POST_START,
  payload,
});
export const removeSinglePostSuccess = payload => ({
  type: REMOVE_POST_SUCCESS,
  payload,
});

export const loadCurrentPost = payload => ({
  type: LOAD_CURRENT_POST,
  payload,
});
export const setCurrentPost = payload => ({
  type: SET_CURRENT_POST,
  payload,
});
export const clearCurrentPost = payload => ({
  type: CLEAR_CURRENT_POST,
  payload,
});

export const setReadListPost = payload => ({
  type: SET_READ_LIST_POST,
  payload,
});

export const deleteReadListPost = payload => ({
  type: DELETE_READ_LIST_POST,
  payload,
});

export const setFilterPosts = payload => ({
  type: SET_FILTER_POSTS,
  payload,
});
