import React from "react";
import { ScrollView } from "react-native";
import Card from "../components/Card";
import Control from "../components/Control";

const MainScreen = () => {
  const [controlData, setControlData] = React.useState("");
  function callbackFunc(data) {
    console.log("data from control ", data);
    setControlData(data);
  };
  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        justifyContent: "flex-start",
        margin: 10,
      }}
    >
      {/* <RevertCard /> */}
      <Card cardNumber={controlData} />
      <Control parentCb={callbackFunc} />
    </ScrollView>
  );
};

export default MainScreen;
