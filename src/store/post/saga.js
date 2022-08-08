import { call, takeEvery, put, delay } from 'redux-saga/effects';

import { setPosts, setCurrentPost, removeSinglePostSuccess, deletePosts } from './actions';
import { LOAD_POSTS, LOAD_CURRENT_POST, REMOVE_POST_START } from './types';
import { getPostsRequest } from '../../services/post/postServices';
import { getSinglePostRequest } from '../../services/post/postServices';
import { deleteSinglePostRequest } from '../../services/post/postServices';

function* loadAllPostsWorker() {
  try {
    yield delay(3000);
    const { data } = yield call(getPostsRequest);
    yield put(setPosts(data));
  } catch (error) {
    console.log(error);
  }
}

function* loadCurrentPostWorker(action) {
  console.log(action);
  try {
    yield delay(3000);
    const { data } = yield call(getSinglePostRequest, action.payload.id);
    console.log(data);
    yield put(setCurrentPost(data));
  } catch (error) {
    console.log(error);
  }
}

function* deleteCurrentPostWorker(action) {
  console.log(action);
  try {
    const { data } = yield call(deleteSinglePostRequest, action.payload.id);
    yield put(deletePosts(data));
  } catch (error) {
    console.log(error);
  }
}
export const postSagas = [
  takeEvery(LOAD_POSTS, loadAllPostsWorker),
  takeEvery(LOAD_CURRENT_POST, loadCurrentPostWorker),
  takeEvery(REMOVE_POST_START, deleteCurrentPostWorker),
];
