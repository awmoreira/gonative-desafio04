import { all, takeLatest } from 'redux-saga/effects';

import { Types as CategoryTypes } from '../ducks/category';
import { Types as CatProductsTypes } from '../ducks/catProducts';
import { Types as ProductTypes } from '../ducks/product';

import { getCategory } from './category';
import { getCatProducts } from './catProducts';
import { getProduct } from './product';

export default function* rootSaga() {
  return yield all([
    takeLatest(CategoryTypes.GET_REQUEST, getCategory),
    takeLatest(CatProductsTypes.GET_REQUEST, getCatProducts),
    takeLatest(ProductTypes.GET_REQUEST, getProduct),
  ]);
}
