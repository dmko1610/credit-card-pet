import { combineReducers } from "redux";

const INITIAL_STATE = {
  cardNumber: "",
  cardholderName: "",
  expiredMonth: "",
  expiredYear: "",
  cvvCode: "",
};

const FOCUSING_STATE = {
  isCvvFocused: false,
  isNumberFocused: false,
  isNameFocused: false,
  isExpiredDateFocused: false,
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
    default:
      return state;
  }
};

const focusReducer = (state = FOCUSING_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_CVV_FOCUS":
      return {
        ...state,
        isCvvFocused: action.payload,
      };
    case "TOGGLE_NUMBER_FOCUS":
      return {
        ...state,
        isNumberFocused: action.payload,
      };
    case "TOGGLE_NAME_FOCUS":
      return {
        ...state,
        isNameFocused: action.payload,
      };
    case "TOGGLE_DATE_FOCUS":
      return {
        ...state,
        isExpiredDateFocused: action.payload,
      };
    default:
      return state;
  }
};

export default combineReducers({
  root: rootReducer,
  focus: focusReducer,
});
