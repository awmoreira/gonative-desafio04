import Immutable from 'seamless-immutable';

export const Types = {
  GET_REQUEST: 'category/GET_REQUEST',
  GET_SUCCESS: 'category/GET_SUCCESS',
};

const initialState = Immutable({
  loading: null,
  data: [],
});

export default function category(state = initialState, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { data: action.payload.data, loading: false };
    default:
      return state;
  }
}

export const Creators = {
  getCategoryRequest: () => ({
    type: Types.GET_REQUEST,
  }),
  getCategorySuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),
};
