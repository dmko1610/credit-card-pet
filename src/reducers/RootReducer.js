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

const THEME_STATE = {
  backgroundThemeUrl:
    "https://images.unsplash.com/photo-1556139930-c23fa4a4f934?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGFic3RyYWN0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
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

const themeReducer = (state = THEME_STATE, action) => {
  switch (action.type) {
    case "CHANGE_BACKGROUND_IMAGE":
      const images = [
        "https://storge.pic2.me/c/1360x800/969/5c88d77aae74c.jpg",
        "https://i.pinimg.com/474x/5f/7f/6f/5f7f6f507d97338e1fd0386abd61856d.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJUbXVuxM5rmbbWqFr-BuTyVqBi5YpnuSJA&usqp=CAU",
        "https://img5.goodfon.ru/wallpaper/nbig/2/27/zelenyi-fon-tekstura-abstract-background-green-color.jpg",
        "https://i1.wp.com/www.art-mine.com/collectorscorner/wp-content/uploads/2018/06/The-Magic-Hour-2019-Acrylic-on-Canvas-3622-x-5422-3000-Rebecca-Katz.jpg?fit=885%2C490&ssl=1",
        "https://images.ctfassets.net/hrltx12pl8hq/5GaLeZJlLyOiQC4gOA0qUM/a0398c237e9744ade8b072f99349e07a/shutterstock_152461202_thumb.jpg?fit=fill&w=368&h=207",
        "https://images.ctfassets.net/hrltx12pl8hq/5FzuBalQ0k99o7GTtzR4rI/f43ecb1c45132412353c4e52eddde481/02-abstract_587409425.jpg?fit=fill&w=480&h=270",
        "https://besthqwallpapers.com/Uploads/25-4-2020/130574/thumb2-colorful-paint-splashes-artwork-abstract-art-creative-abstract-splashes.jpg",
        "https://www.enjpg.com/img/2020/abstract-19.jpg",
        "https://cdn.pixabay.com/photo/2017/12/25/16/16/creativity-3038628_960_720.jpg",
        "https://images.ctfassets.net/hrltx12pl8hq/3p6vJx1ymhWU9860roHPnM/13da06e1fbc45d3537e66341e15a1fc3/abstract-images.jpg?fit=fill&w=800&h=300",
        "https://www.thephotoargus.com/wp-content/uploads/2019/01/abstractphoto04.jpg",
      ];
      let random = Math.floor(Math.random() * 12);
      if (random > images.length) {
        random = 1;
      }
      return {
        ...state,
        backgroundThemeUrl: images[random],
      };
    default:
      return state;
  }
};

export default combineReducers({
  root: rootReducer,
  focus: focusReducer,
  theme: themeReducer,
});
