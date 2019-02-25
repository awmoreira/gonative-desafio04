import { all, takeLatest } from 'redux-saga/effects';

import { Types as CategoryTypes } from '../ducks/category';
import { Types as CatProductsTypes } from '../ducks/catProducts';

import { getCategory } from './category';
import { getCatProducts } from './catProducts';

export default function* rootSaga() {
  return yield all([
    takeLatest(CategoryTypes.GET_REQUEST, getCategory),
    takeLatest(CatProductsTypes.GET_REQUEST, getCatProducts),
  ]);
}
