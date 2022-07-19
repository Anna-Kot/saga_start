import { call, takeEvery, put } from 'redux-saga/effects';
import { setPosts } from './actions';
import { LOAD_POSTS } from './types';

async function getPosts() {
  const request = await fetch('https://jsonplaceholder.typicode.com/posts');

  const data = await request.json();

  return data;
}

export function* workerSaga() {
  const posts = yield call(getPosts);

  yield put(setPosts(posts));
}
export function* watchLoadDataSaga() {
  yield takeEvery(LOAD_POSTS, workerSaga);
}
export default function* rootSaga() {
  yield watchLoadDataSaga();
}
