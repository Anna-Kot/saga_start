import { all } from 'redux-saga/effects';

import { postSagas } from './post/saga';

export function* sagaWatcher() {
  yield all([...postSagas]);
}
