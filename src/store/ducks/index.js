import { combineReducers } from 'redux';

import catProducts from './catProducts';
import category from './category';
import cart from './cart';
import product from './product';

export default combineReducers({
  // empty: (state = {}) => state,
  category,
  catProducts,
  cart,
  product,
});
