import { call, takeEvery, put } from 'redux-saga/effects';

import { setPosts } from './actions';
import { LOAD_POSTS } from './types';
import { getPostsRequest } from '../../services/post/postServices';

function* loadAllPostsWorker() {
  try {
    const { data } = yield call(getPostsRequest);
    yield put(setPosts(data));
  } catch (error) {
    console.log(error);
  }
}
export const postSagas = [takeEvery(LOAD_POSTS, loadAllPostsWorker)];
