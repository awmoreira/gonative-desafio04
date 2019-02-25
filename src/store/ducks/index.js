import { combineReducers } from 'redux';

import catProducts from './catProducts';
import category from './category';

export default combineReducers({
  // empty: (state = {}) => state,
  category,
  catProducts,
});
