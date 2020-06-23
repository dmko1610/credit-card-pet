import React from "react";
import Card from "../components/Card";
import Control from "../components/Control";
import { View } from "react-native";

const MainScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "flex-start", margin: 10}}>
      <Card />
      <Control />
    </View>
  );
};

export default MainScreen;
