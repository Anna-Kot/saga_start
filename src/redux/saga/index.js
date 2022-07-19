import {call, takeEvery, put} from 'redux-saga/effects';

async function getPosts() {
    const request =await fetch('https://jsonplaceholder.typicode.com/posts');

    const data = await request.json();

    return data;
}


export function* workerSaga() {
    const posts = yield call(getPosts);
    console.log(posts);

    yield put({type: 'SET_POSTS', payload: posts})
}
export function* watchLoadDataSaga() {
    yield takeEvery('LOAD_DATA', workerSaga)
}
export default function* rootSaga() {
    yield watchLoadDataSaga();
}

