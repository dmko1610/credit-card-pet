import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BankIdentificationNumber = () => {
  return <Text>1234 56</Text>;
};

const AccountIdentifierNumber = () => {
  return <Text>78 9876 5432</Text>;
};

const MiddleRow = () => {
  return (
    <View style={middleRowStyle.middleRowContainer}>
      <BankIdentificationNumber />
      <AccountIdentifierNumber />
    </View>
  );
};

const middleRowStyle = StyleSheet.create({
  middleRowContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default MiddleRow;
