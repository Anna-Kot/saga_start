import { LOAD_POSTS, SET_POSTS, LOAD_CURRENT_POST, SET_CURRENT_POST } from './types';

export const loadPosts = payload => ({
  type: LOAD_POSTS,
  payload,
});

export const setPosts = payload => ({
  type: SET_POSTS,
  payload,
});

export const loadCurrebtPost = payload => ({
  type: LOAD_CURRENT_POST,
  payload,
});
export const setCurrentPost = payload => ({
  type: SET_CURRENT_POST,
  payload,
});
