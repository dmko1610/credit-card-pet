import { combineReducers } from "redux";

const INITIAL_STATE = {
  cardNumber: "",
  cardholderName: "",
  expiredMonth: "",
  expiredYear: "",
  cvvCode: "",
};

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CHANGE_NUMBER":
      return {
        ...state,
        cardNumber: action.payload,
      };
    default:
      return state;
  }
};

export default combineReducers({
  root: rootReducer,
});
