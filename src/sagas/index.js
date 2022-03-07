import { all, fork } from 'redux-saga/effects';
import auth from './auth';

import language from './language';
import profilings from './profiling';
import plants from './plant';
import editUser from './users';
const sagas = [...auth, ...language, ...profilings, ...plants, ...editUser];
function* rootSaga() {
  const globalSagasForks = sagas.map((saga) => fork(saga));
  yield all([...globalSagasForks]);
}
export default rootSaga;
