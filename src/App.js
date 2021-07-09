import React from "react";
import { StatusBar } from "react-native";
import { MainScreen } from "./screens/MainScreen";

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <MainScreen />
    </>
  );
};

export default App;
