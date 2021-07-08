/* eslint-disable no-extra-boolean-cast */
import React, { useState } from "react";
import PropTypes from "prop-types";
import DeviceInfo from "react-native-device-info";
import {
  View,
  Dimensions,
  StyleSheet,
  TextInput,
  TouchableNativeFeedback,
  Text,
} from "react-native";
import { Icon } from "native-base";
import { Picker } from "react-native-wheel-pick";

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

function getYears() {
  const years = [];
  const currentYear = new Date().getFullYear();
  let i = 0;
  while (i < 50) {
    years.push(currentYear + i);
    i++;
  }
  return years;
}

const CardNumber = ({ cardNumberCb }) => {
  const [formattedCardNumber, setCardNumber] = useState("");
  const onChange = (event) => {
    let value = event.nativeEvent.text;
    if (value.length === 4 || value.length === 9 || value.length === 14) {
      value = value + " ";
    }
    setCardNumber(value);
    cardNumberCb(value);
  };

  return (
    <TextInput
      placeholder="Card Number"
      placeholderTextColor="#b7b7b7"
      style={StyleSheet.flatten([controlStyles.inputStyle, { marginTop: 5 }])}
      keyboardType={"decimal-pad"}
      maxLength={19}
      value={formattedCardNumber}
      onChange={onChange}
    />
  );
};

const CardholderName = ({ cardholderNameCb }) => {
  const [value, setValue] = React.useState("");
  const onChange = (event) => {
    let value = event.nativeEvent.text;
    setValue(value);
    cardholderNameCb(value);
  };
  return (
    <TextInput
      placeholder="Cardholder Name"
      placeholderTextColor="#b7b7b7"
      style={controlStyles.inputStyle}
      autoCapitalize={"characters"}
      onChange={onChange}
      value={value}
    />
  );
};

const ExpireMonth = () => {
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
              {!!month ? month : "Expired Month"}
            </Text>
          </View>
        </TouchableNativeFeedback>
      </View>
      {isPressed && (
        <View style={{ flexDirection: "row" }}>
          <Icon
            onPress={() => setIsPressed(false)}
            style={{ fontSize: 30 }}
            type={"Entypo"}
            name="check"
          />
          <Picker
            style={controlStyles.pickerStyle}
            onValueChange={(value) => setMonth(value)}
            pickerData={months}
            itemSpace={40}
          />
          <Icon
            onPress={() => setIsPressed(false)}
            style={{ fontSize: 30 }}
            type="Entypo"
            name="cross"
          />
        </View>
      )}
    </>
  );
};

const ExpireYear = () => {
  const [year, setYear] = useState("");
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
              {!!year ? year : "Expired Year"}
            </Text>
          </View>
        </TouchableNativeFeedback>
      </View>
      {isPressed && (
        <View style={{ flexDirection: "row" }}>
          <Icon
            onPress={() => setIsPressed(false)}
            type={"Entypo"}
            name="check"
          />
          <Picker
            style={controlStyles.pickerStyle}
            onValueChange={(value) => setYear(value)}
            pickerData={getYears()}
            itemSpace={40}
          />
          <Icon
            onPress={() => {
              setIsPressed(false);
              setYear("");
            }}
            style={{ fontSize: 30 }}
            type={"Entypo"}
            name="cross"
          />
        </View>
      )}
    </>
  );
};

const SecurityCode = () => {
  return (
    <TextInput
      style={StyleSheet.flatten([controlStyles.inputStyle, { width: 60 }])}
      placeholder="CVV"
      placeholderTextColor="#b7b7b7"
      keyboardType={"decimal-pad"}
    />
  );
};

const Control = ({ cardNumberCb, cardholderNameCb }) => {
  return (
    <View style={controlStyles.container}>
      <CardNumber cardNumberCb={cardNumberCb} />
      <CardholderName cardholderNameCb={cardholderNameCb} />
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
    width: DeviceInfo.isTablet ? phoneWidth - 300 : phoneWidth - 20,
    height: DeviceInfo.isTablet ? phoneHeight * 0.5 : phoneHeight * 0.75,
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
  pickerStyle: {
    alignSelf: "center",
    backgroundColor: "white",
    width: phoneWidth - 150,
    height: 215,
  },
});

Control.propTypes = {
  testCallback: PropTypes.func,
  cardNumberCb: PropTypes.func,
  cardholderNameCb: PropTypes.func,
};

CardNumber.propTypes = {
  cardNumberCb: PropTypes.func,
};

CardholderName.propTypes = {
  cardholderNameCb: PropTypes.func,
};

export default Control;
