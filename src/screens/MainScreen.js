import React from "react";
import { Platform, ScrollView } from "react-native";
import Card from "../components/Card";
import Control from "../components/Control";
import DeviceInfo from "react-native-device-info";

const MainScreen = () => {
  const [cardNumber, setCardNumber] = React.useState("");
  const [cardholderName, setCardholderName] = React.useState("");

  function getCardNumber(data) {
    setCardNumber(data);
  }

  function getCardholderName(data) {
    setCardholderName(data);
  }
  /* if (DeviceInfo.isTablet) {
  } */

  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        justifyContent: "flex-start",
        margin: 10,
      }}
    >
      {/* <RevertCard /> */}
      <Card cardNumber={cardNumber} cardholderName={cardholderName} />
      <Control
        cardNumberCb={getCardNumber}
        cardholderNameCb={getCardholderName}
      />
    </ScrollView>
  );
};

export default MainScreen;
