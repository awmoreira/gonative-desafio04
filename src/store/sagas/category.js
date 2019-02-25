import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as CategoryActions } from '../ducks/category';

export function* getCategory() {
  try {
    const response = yield call(api.get, '/categories');

    yield put(CategoryActions.getCategorySuccess(response.data));
  } catch (err) {
    console.tron.log(err);
  }
}
