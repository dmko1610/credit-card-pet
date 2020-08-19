/* eslint-disable no-extra-boolean-cast */
import React, { useState } from "react";
import {
  View,
  Dimensions,
  StyleSheet,
  TextInput,
  TouchableNativeFeedback,
  Text,
} from "react-native";
import { Picker } from "react-native-wheel-pick";
import ScrollPicker from "react-native-wheel-scroll-picker";
import { Icon } from "native-base";

const phoneWidth = Math.round(Dimensions.get("screen").width);
const phoneHeight = Math.round(Dimensions.get("window").height);
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const years = [];

const CardNumber = () => {
  return (
    <TextInput
      placeholder="Card Number"
      placeholderTextColor="#b7b7b7"
      style={StyleSheet.flatten([controlStyles.inputStyle, { marginTop: 5 }])}
      keyboardType={"decimal-pad"}
    />
  );
};

const CardholderName = () => {
  return (
    <TextInput
      placeholder="Cardholder Name"
      placeholderTextColor="#b7b7b7"
      style={controlStyles.inputStyle}
    />
  );
};

const ExpireMonth = () => {
  const [date, setDate] = useState(new Date());
  const [month, setMonth] = useState("");
  const [isPressed, setIsPressed] = useState(false);
  console.log("Dada ", date);
  return (
    <>
      <View style={StyleSheet.flatten([controlStyles.inputStyle, { flex: 1 }])}>
        <TouchableNativeFeedback
          onPress={() => setIsPressed(true)}
          background={TouchableNativeFeedback.Ripple("lightgrey", false)}
        >
          <View style={{ flex: 1 }}>
            <Text style={{ paddingTop: 12, paddingLeft: 4, color: "#b7b7b7" }}>
              {month}
            </Text>
          </View>
        </TouchableNativeFeedback>
      </View>
      {isPressed && (
        <>
          <Picker
            style={{ backgroundColor: "white", width: 300, height: 215 }}
            selectedItem="January"
            onValueChange={(value) => {
              // setIsPressed(false);
              setMonth(value);
            }}
            pickerData={months}
            itemSpace={40}
            onPress={() => console.log("perss")}
          />
          <Icon
            onPress={() => setIsPressed(false)}
            type={"Entypo"}
            name="check"
          />
        </>
      )}
    </>
  );
};

const ExpireYear = () => {
  const [date, setDate] = useState(new Date());
  const [month, setMonth] = useState("");
  const [isPressed, setIsPressed] = useState(false);
  return (
    <>
      <View style={StyleSheet.flatten([controlStyles.inputStyle, { flex: 1 }])}>
        <TouchableNativeFeedback
          onPress={() => setIsPressed(true)}
          background={TouchableNativeFeedback.Ripple("lightgrey", false)}
        >
          <View style={{ flex: 1 }}>
            <Text style={{ paddingTop: 12, paddingLeft: 4, color: "#b7b7b7" }}>
              {month}
            </Text>
          </View>
        </TouchableNativeFeedback>
      </View>
      {isPressed && (
        <>
          <Picker
            style={{ backgroundColor: "white", width: 300, height: 215 }}
            selectedItem="January"
            onValueChange={(value) => {
              // setIsPressed(false);
              setMonth(value);
            }}
            pickerData={months}
            itemSpace={40}
            onPress={() => console.log("perss")}
          />
          <Icon
            onPress={() => setIsPressed(false)}
            type={"Entypo"}
            name="check"
          />
        </>
      )}
    </>
  );
};

const SecurityCode = () => {
  return (
    <TextInput
      style={StyleSheet.flatten([controlStyles.inputStyle, { width: 90 }])}
      placeholder="CVV"
      placeholderTextColor="#b7b7b7"
      keyboardType={"decimal-pad"}
    />
  );
};

const Control = () => {
  return (
    <View style={controlStyles.container}>
      <CardNumber />
      <CardholderName />
      <View style={{ flexDirection: "row" }}>
        <ExpireMonth />
        <ExpireYear />
        <SecurityCode />
      </View>
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
  inputStyle: {
    borderWidth: 0.5,
    borderColor: "gray",
    marginHorizontal: 15,
    borderRadius: 5,
    marginVertical: 20,
  },
  datePickerStyle: {
    color: "#b7b7b7",
    fontSize: 14,
    paddingLeft: 4,
    paddingVertical: 15,
  },
});

export default Control;
