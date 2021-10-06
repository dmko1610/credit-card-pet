export const changeCardNumber = (value) => ({
  type: "CHANGE_NUMBER",
  payload: value,
});

export const changeCardholderName = (value) => ({
  type: "CHANGE_NAME",
  payload: value,
});

export const changeExpiredMonth = (value) => ({
  type: "CHANGE_MONTH",
  payload: value,
});

export const changeExpiredYear = (value) => ({
  type: "CHANGE_YEAR",
  payload: value,
});

export const changeCvvCode = (value) => ({
  type: "CHANGE_CVV",
  payload: value,
});
