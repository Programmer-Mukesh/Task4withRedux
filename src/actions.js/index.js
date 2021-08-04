export const show = () => (dispatch, getState) => {
  dispatch({ type: "SHOW" });
};
export const hide = () => (dispatch, getState) => {
  dispatch({ type: "HIDE" });
};
