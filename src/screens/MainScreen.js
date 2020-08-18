import React from "react";
import Card from "../components/Card";
import Control from "../components/Control";
import { ScrollView } from "react-native";

const MainScreen = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        justifyContent: "flex-start",
        margin: 10,
      }}
      scrollEnabled
    >
      <Card />
      <Control />
    </ScrollView>
  );
};

export default MainScreen;
