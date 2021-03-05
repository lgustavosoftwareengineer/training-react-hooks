// Actions
export const Types = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  RESET: "reset",
};

export const initialState = {
  count: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.INCREMENT:
      return { count: state.count + 1 };

    case Types.DECREMENT:
      return { count: state.count - 1 };

    case Types.RESET:
      return { ...initialState };

    default:
      return state;
  }
}
