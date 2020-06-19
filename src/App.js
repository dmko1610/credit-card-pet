import React from "react";
import { StatusBar } from "react-native";
import MainScreen from "./screens/MainScreen";

const App = () => {
  return (
    <React.Fragment>
      <StatusBar barStyle="dark-content" />
      <MainScreen />
    </React.Fragment>
  );
};

export default App;
