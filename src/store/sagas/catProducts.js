import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as CatProductsActions } from '../ducks/catProducts';

export function* getCatProducts(action) {
  try {
    const response = yield call(api.get, `/category_products/${action.payload.categoryId}`);

    yield put(CatProductsActions.getCatProductsSuccess(response.data.id, response.data.products));
  } catch (err) {
    console.tron.log(err);
  }
}
