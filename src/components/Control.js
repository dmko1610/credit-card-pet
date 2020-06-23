import React from "react";
import { View, Dimensions, Text, StyleSheet, TextInput } from "react-native";

const phoneWidth = Math.round(Dimensions.get("screen").width);
const phoneHeight = Math.round(Dimensions.get("window").height);
let inputs = [React.createRef()];

const CardNumber = () => {
  return (
    <TextInput
      placeholder="Card Number"
      style={{
        borderWidth: 0.5,
        borderColor: "gray",
        marginHorizontal: 15,
        borderRadius: 5,
        marginTop: 5,
        marginVertical: 20,
      }}
      keyboardType={"decimal-pad"}
      onSubmitEditing={() => inputs.focus()}
    />
  );
};

const CardholderName = () => {
  return (
    <TextInput
      placeholder="Cardholder Name"
      style={{
        borderWidth: 0.5,
        borderColor: "gray",
        marginHorizontal: 15,
        borderRadius: 5,
        marginVertical: 20,
      }}
      ref={(input) => inputs.push(input)}
      onSubmitEditing={() => inputs.focus()}
    />
  );
};

const ExpireDate = () => {
  return (
    <TextInput
      value="Card Name"
      style={{
        borderWidth: 0.5,
        borderColor: "gray",
        marginHorizontal: 15,
        borderRadius: 5,
        marginVertical: 20,
      }}
      ref={(input) => (inputs.push(input))}
    />
  );
};

const Control = () => {
  return (
    <View style={controlStyles.container}>
      <CardNumber />
      <CardholderName />
      <ExpireDate />
    </View>
  );
};

const controlStyles = StyleSheet.create({
  container: {
    position: "absolute",
    width: phoneWidth - 20,
    height: phoneHeight * 0.75,
    top: 150,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "gray",
    backgroundColor: "white",
    elevation: 5,
    alignSelf: "center",
    justifyContent: "center",
  },
});

export default Control;
