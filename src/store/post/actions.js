import { LOAD_POSTS, SET_POSTS } from './types';

export const loadPosts = payload => ({
  type: LOAD_POSTS,
  payload,
});

export const setPosts = payload => ({
  type: SET_POSTS,
  payload,
});
