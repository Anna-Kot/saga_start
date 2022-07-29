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

export const loadPosts = payload => ({
  type: LOAD_POSTS,
  payload,
});
export const setPosts = payload => ({
  type: SET_POSTS,
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

export const setReadListPost = payload => ({
  type: SET_READ_LIST_POST,
  payload,
});

export const setCountReadListPost = payload => ({
  type: SET_COUNT_READ_LIST_POST,
  payload,
});
export const deleteCountReadListPost = payload => ({
  type: DELETE_COUNT_READ_LIST_POST,
  payload,
});
export const deleteReadListPost = id => ({
  type: DELETE_READ_LIST_POST,
  payload: id,
});
export const deleteReadListPost2 = payload => ({
  type: DELETE_READ_LIST_POST_2,
  payload,
});
