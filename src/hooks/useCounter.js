import React, { useReducer } from "react";
import reducer, { initialState, Types } from "../reducers/counter";

export function useCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    count: state.count,
    increment: () => dispatch({ type: Types.INCREMENT }),
    decrement: () => dispatch({ type: Types.DECREMENT }),
    reset: () => dispatch({ type: Types.RESET }),
  };
}
