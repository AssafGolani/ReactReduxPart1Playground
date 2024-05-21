import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import authReducer from "./authSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

export default store;

/* const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1,
        showCounter: state.showCounter,
      };
    case "INCREASE":
      return {
        ...state,
        counter: state.counter + action.amount,
        showCounter: state.showCounter,
      };
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1,
        showCounter: state.showCounter,
      };
    case "TOGGLE":
      return {
        ...state,
        counter: state.counter,
        showCounter: !state.showCounter,
      };
    default:
      return state;
    }
  }; */

// const store = createStore(counterReducer);
