const initialState = {
  value: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW":
      return {
        ...state,
        value: true,
      };
    case "HIDE":
      return {
        ...state,
        value: false,
      };
    default:
      return state;
  }
};

export default reducer;
