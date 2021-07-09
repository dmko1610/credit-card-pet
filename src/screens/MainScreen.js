import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Card } from "../components/Card";
import { Control } from "../components/Control";

export const MainScreen = () => {
  const [cardNumber, setCardNumber] = React.useState("");
  const [cardholderName, setCardholderName] = React.useState("");
  const [expiredMonth, setExpiredMonth] = React.useState("");
  const [expiredYear, setExpiredYear] = React.useState("");

  const getCardNumber = (data) => setCardNumber(data);

  const getCardholderName = (data) => setCardholderName(data);

  const getExpiredMonth = (data) => setExpiredMonth(data);

  const getExpiredYear = (data) => setExpiredYear(data);

  return (
    <ScrollView contentContainerStyle={mainScreenStyles.containerStyle}>
      {/* <RevertCard /> */}
      <Card
        cardNumber={cardNumber}
        cardholderName={cardholderName}
        expiredMonth={expiredMonth}
        expiredYear={expiredYear}
      />
      <Control
        cardNumberCb={getCardNumber}
        cardholderNameCb={getCardholderName}
        monthCb={getExpiredMonth}
        yearCb={getExpiredYear}
      />
    </ScrollView>
  );
};

const mainScreenStyles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: "flex-start",
    margin: 10,
  },
});
