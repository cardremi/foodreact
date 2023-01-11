import {all} from 'redux-saga/effects';
import {FoodSaga} from '../Components/Saga';
//setting watcher middleware saga
export function* SagaWatcher() {
  yield all([FoodSaga()]);
}
