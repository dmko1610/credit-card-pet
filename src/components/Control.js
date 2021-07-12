/* eslint-disable no-extra-boolean-cast */
import React, { useState } from "react";
import PropTypes from "prop-types";
import DeviceInfo from "react-native-device-info";
import { View, Dimensions, StyleSheet, TextInput } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const phoneWidth = Math.round(Dimensions.get("screen").width);
const phoneHeight = Math.round(Dimensions.get("window").height);
const months = [
  { label: "January", value: "01" },
  { label: "February", value: "02" },
  { label: "March", value: "03" },
  { label: "April", value: "04" },
  { label: "May", value: "05" },
  { label: "June", value: "06" },
  { label: "July", value: "07" },
  { label: "August", value: "08" },
  { label: "September", value: "09" },
  { label: "October", value: "10" },
  { label: "November", value: "11" },
  { label: "December", value: "12" },
];

function getYears() {
  const years = [];
  const currentYear = new Date().getFullYear();
  let i = 0;
  while (i < 10) {
    const year = {
      label: (currentYear + i).toString(),
      value: (currentYear + i).toString(),
    };
    years.push(year);
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
      style={controlStyles.inputStyle}
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

const ExpireMonth = ({ monthCb }) => {
  const [month, setMonth] = useState("");
  const [isPressed, setIsPressed] = useState(false);

  const onChange = (cb) => {
    setMonth(cb());
    monthCb(cb());
  };

  return (
    <View style={controlStyles.dropdownList}>
      <DropDownPicker
        listMode={"FLATLIST"}
        items={months}
        open={isPressed}
        value={month}
        setOpen={setIsPressed}
        setValue={onChange}
        placeholder={"Month"}
        placeholderStyle={{ color: "#CCCCCC" }}
        dropDownContainerStyle={{
          borderColor: "#CCCCCC",
        }}
        style={{
          borderColor: "#CCCCCC",
        }}
      />
    </View>
  );
};

const ExpireYear = ({ yearCb }) => {
  const [year, setYear] = useState("");
  const [isPressed, setIsPressed] = useState(false);

  const onChange = (cb) => {
    setYear(cb());
    yearCb(cb());
  };
  return (
    <View style={controlStyles.dropdownList}>
      <DropDownPicker
        listMode={"FLATLIST"}
        items={getYears()}
        open={isPressed}
        value={year}
        setOpen={setIsPressed}
        setValue={onChange}
        placeholder={"Year"}
        placeholderStyle={{ color: "#CCCCCC" }}
        dropDownContainerStyle={{
          borderColor: "#CCCCCC",
        }}
        style={{
          borderColor: "#CCCCCC",
        }}
      />
    </View>
  );
};

const SecurityCode = ({cvvPressedCb}) => {
  return (
    <TextInput
      style={StyleSheet.flatten([controlStyles.inputStyle, { width: 60 }])}
      placeholder="CVV"
      placeholderTextColor="#b7b7b7"
      keyboardType={"decimal-pad"}
      onFocus={() => cvvPressedCb()}
    />
  );
};

export const Control = ({
  cardNumberCb,
  cardholderNameCb,
  monthCb,
  yearCb,
  cvvPressedCb
}) => {
  return (
    <View style={controlStyles.container}>
      <CardNumber cardNumberCb={cardNumberCb} />
      <CardholderName cardholderNameCb={cardholderNameCb} />
      <View style={controlStyles.bottomRowContainer}>
        <ExpireMonth monthCb={monthCb} />
        <ExpireYear yearCb={yearCb} />
        <SecurityCode cvvPressedCb={cvvPressedCb}/>
      </View>
    </View>
  );
};

const controlStyles = StyleSheet.create({
  container: {
    // position: "absolute",
    width: DeviceInfo.isTablet() ? phoneWidth - 300 : phoneWidth - 20,
    height: DeviceInfo.isTablet() ? phoneHeight * 0.3 : phoneHeight * 0.45,
    // top: 150,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "gray",
    backgroundColor: "white",
    elevation: 5,
    alignSelf: "center",
    justifyContent: "center",
  },
  bottomRowContainer: {
    flexDirection: "row",
  },
  dropdownList: {
    marginHorizontal: 15,
    marginVertical: 20,
    flex: 1,
  },
  inputStyle: {
    borderWidth: 0.5,
    borderColor: "gray",
    marginHorizontal: 15,
    borderRadius: 5,
    marginVertical: 20,
  },
});

Control.propTypes = {
  testCallback: PropTypes.func,
  cardNumberCb: PropTypes.func,
  cardholderNameCb: PropTypes.func,
  monthCb: PropTypes.func,
  yearCb: PropTypes.func,
};

CardNumber.propTypes = {
  cardNumberCb: PropTypes.func,
};

CardholderName.propTypes = {
  cardholderNameCb: PropTypes.func,
};

ExpireMonth.propTypes = {
  monthCb: PropTypes.string,
};

ExpireYear.propTypes = {
  yearCb: PropTypes.string,
};
