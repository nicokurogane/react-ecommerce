import { SHOW_MESSAGE, HIDE_MESSAGE } from "../actions/constants";

const initialState = {
  message: "",
  showToUser: false
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MESSAGE:
      const { message } = action.payload;
      return { ...state, message, showToUser: true };
    case HIDE_MESSAGE:
      return { ...state, message: "", showToUser: false };
    default:
      return state;
  }
};

export default messageReducer;
