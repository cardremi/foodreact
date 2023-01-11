import {put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import {setListData, setLoading} from './Action';

//sagas function for rest get and set list/array data to reducer
function* GetSagaCurrentData() {
  try {
    //setting loading in reducer
    yield put(setLoading(true));
    //config url for api rest api get
    const config = {
      url: `https://mocki.io/v1/52c41978-6e31-4ea3-b917-01899e3ed373`,
      headers: {},
    };
    //get respond and set to variable
    const respond = yield axios.get(config.url, {headers: config.headers});

    //put to listdata in reducer
    yield put(setListData(respond.data));
  } catch (error) {
    console.log('error data or connection', error);
  } finally {
    yield put(setLoading(false));
  }
}
export const FoodSaga = function* () {
  yield takeLatest('CURRENT_DATA', GetSagaCurrentData);
};
