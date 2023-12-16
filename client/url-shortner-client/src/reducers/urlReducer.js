const urlReducer = (state = [], action) => {
  if (action.type === "NEW_URL") {
    return state.concat(action.payload);
  }
  return state;
};

export const setShortURL = (urlResponse) => {
  return {
    type: "NEW_URL",
    payload: urlResponse,
  };
};

export default urlReducer;
