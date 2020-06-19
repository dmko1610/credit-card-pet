import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BankIdentificationNumber = (style) => {
  return <Text {...style}>1234 56</Text>;
};

const AccountIdentifierNumber = (style) => {
  return <Text {...style}>78 9876 5432</Text>;
};

const MiddleRow = () => {
  const { middleRowContainer, number } = middleRowStyle;
  return (
    <View style={middleRowContainer}>
      <BankIdentificationNumber style={number} />
      <AccountIdentifierNumber style={number} />
    </View>
  );
};

const middleRowStyle = StyleSheet.create({
  middleRowContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  number: {
    letterSpacing: 2,
    color: "white",
    fontSize: 25,
    fontFamily: "monospace",
  },
});

export default MiddleRow;
