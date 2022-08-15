import { call, takeEvery, put, delay } from 'redux-saga/effects';

import {
  setPosts,
  setCurrentPost,
  removeSinglePostSuccess,
  updateCurrentPostSuccess,
  createCurrentPostSuccess,
} from './actions';
import {
  LOAD_POSTS,
  LOAD_CURRENT_POST,
  REMOVE_POST_START,
  UPDATE_CURRENT_POST_START,
  CREATE_CURRENT_POST_START,
} from './types';
import { getPostsRequest } from '../../services/post/postServices';
import { getSinglePostRequest } from '../../services/post/postServices';
import { deleteSinglePostRequest } from '../../services/post/postServices';
import { updateSinglePostRequest } from '../../services/post/postServices';
import { createSinglePostRequest } from '../../services/post/postServices';

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
  console.log(action.payload.id);
  try {
    yield call(deleteSinglePostRequest, action.payload.id);
    yield put(removeSinglePostSuccess(action.payload.id));
  } catch (error) {
    console.log(error);
  }
}

function* updateCurrentPostWorker(action) {
  console.log(action);
  try {
    const { data } = yield call(updateSinglePostRequest, action.payload.id, action.payload);
    yield put(updateCurrentPostSuccess(data));
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

function* createCurrentPostWorker(action) {
  console.log(action);
  try {
    const { data } = yield call(createSinglePostRequest, action.payload.id, action.payload);
    yield put(createCurrentPostSuccess(data));
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
export const postSagas = [
  takeEvery(LOAD_POSTS, loadAllPostsWorker),
  takeEvery(LOAD_CURRENT_POST, loadCurrentPostWorker),
  takeEvery(REMOVE_POST_START, deleteCurrentPostWorker),
  takeEvery(UPDATE_CURRENT_POST_START, updateCurrentPostWorker),
  takeEvery(CREATE_CURRENT_POST_START, createCurrentPostWorker),
];
