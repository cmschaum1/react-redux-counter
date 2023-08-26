import { createStore } from "redux";

import defines from "../Defines";

const defaultValue = {
  counter: 0,
};

const counterReducer = (state = defaultValue, action) => {
  if (action.type === defines.INCREMENT) {
    return {
      counter: ++state.counter,
    };
  }

  if (action.type === defines.DECREMENT) {
    return {
      counter: --state.counter,
    };
  }

  return state;
};

// store
const store = createStore(counterReducer);

export default store;
