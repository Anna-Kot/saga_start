import { call, takeEvery, put } from 'redux-saga/effects';

import { setPosts, setCurrentPost } from './actions';
import { LOAD_POSTS, LOAD_CURRENT_POST } from './types';
import { getPostsRequest } from '../../services/post/postServices';
import { getSinglePostRequest } from '../../services/post/postServices';

function* loadAllPostsWorker() {
  try {
    const { data } = yield call(getPostsRequest);
    yield put(setPosts(data));
  } catch (error) {
    console.log(error);
  }
}

function* loadCurrentPostWorker(action) {
  try {
    const { data } = yield call(getSinglePostRequest, action.id);
    yield put(setCurrentPost(data));
  } catch (error) {
    console.log(error);
  }
}
export const postSagas = [
  takeEvery(LOAD_POSTS, loadAllPostsWorker),
  takeEvery(LOAD_CURRENT_POST, loadCurrentPostWorker),
];
