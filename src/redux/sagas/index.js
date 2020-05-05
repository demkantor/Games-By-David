import { all } from 'redux-saga/effects';
import highScoreSaga from './highScoreSaga';


export default function* rootSaga() {
    yield all([
      highScoreSaga()
    ]);
  }