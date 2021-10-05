import React from "react";
import { createStore } from "redux";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import { MainScreen } from "./screens/MainScreen";
import rootReducer from "./reducers/RootReducer";

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <MainScreen />
    </Provider>
  );
};

export default App;
