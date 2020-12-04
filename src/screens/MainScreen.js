import React from "react";
import { ScrollView } from "react-native";
import RevertCard from "../components/RevertCard";

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
      <RevertCard />
    </ScrollView>
  );
};

export default MainScreen;
