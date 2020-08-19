import React from "react";
import { ScrollView } from "react-native";
import * as Animatable from "react-native-animatable";
import Card from "../components/Card";
import Control from "../components/Control";
import RevertCard from "../components/RevertCard";

const MainScreen = () => {
  let view = "";
  const handleViewRef = (ref) => (view = ref);

  const bounce = () =>
    view
      .bounce(800)
      .then((endState) =>
        console.log(endState.finished ? "bounce finished" : "bounce cancelled")
      );

  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        justifyContent: "flex-start",
        margin: 10,
      }}
      scrollEnabled
    >
      {/* <Animatable.View
        ref={handleViewRef}
        animation="pulse"
        iterationCount={5}
        onPress={() => bounce()}
      >
        <Card />
        <Control />
      </Animatable.View> */}
      <RevertCard />
    </ScrollView>
  );
};

export default MainScreen;
