import { LOAD_CATEGORIES_LIST } from "../actions/constants";

const initialState = {
    list: []
};

const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOAD_CATEGORIES_LIST:
        return {...state, list: action.payload};
      default:
        return state;
    }
};

export default categoriesReducer;