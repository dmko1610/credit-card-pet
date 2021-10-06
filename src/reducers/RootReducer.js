import { combineReducers } from "redux";

const INITIAL_STATE = {
  cardNumber: "",
  cardholderName: "",
  expiredMonth: "",
  expiredYear: "",
  cvvCode: "",
  isCvvFocused: false,
};

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CHANGE_NUMBER":
      return {
        ...state,
        cardNumber: action.payload,
      };
    case "CHANGE_NAME":
      return {
        ...state,
        cardholderName: action.payload,
      };
    case "CHANGE_MONTH":
      return {
        ...state,
        expiredMonth: action.payload,
      };
    case "CHANGE_YEAR":
      return {
        ...state,
        expiredYear: action.payload,
      };
    case "CHANGE_CVV":
      return {
        ...state,
        cvvCode: action.payload,
      };
    case "TOGGLE_CVV":
      return {
        ...state,
        isCvvCodeFocused: action.payload,
      };
    default:
      return state;
  }
};

export default combineReducers({
  root: rootReducer,
});
