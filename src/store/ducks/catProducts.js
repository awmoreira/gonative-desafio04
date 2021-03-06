import Immutable from 'seamless-immutable';

export const Types = {
  GET_REQUEST: 'catProducts/GET_REQUEST',
  GET_SUCCESS: 'catProducts/GET_SUCCESS',
};

const initialState = Immutable({
  loading: null,
  data: [],
  id: null,
});

export default function catProducts(state = initialState, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { data: action.payload.data, id: action.payload.id, loading: false };
    default:
      return state;
  }
}

export const Creators = {
  getCatProductsRequest: categoryId => ({
    type: Types.GET_REQUEST,
    payload: { categoryId },
  }),
  getCatProductsSuccess: (id, data) => ({
    type: Types.GET_SUCCESS,
    payload: { id, data },
  }),
};
