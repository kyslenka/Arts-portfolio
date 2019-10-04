import { createStore } from "redux";

const initialState = {
  query: "",
  cart: [],
  product: ""
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_QUERY":
      return { ...state, query: action.query };
    default:
      return state;
  }
}

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
