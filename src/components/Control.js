/* eslint-disable no-extra-boolean-cast */
import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import DeviceInfo from "react-native-device-info";
import { View, Dimensions, StyleSheet, TextInput } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useDispatch } from "react-redux";
import { changeCardholderName, changeCardNumber } from "../actions/RootActions";

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

const CardNumber = React.memo(({ onChangeNumber }) => {
  const [formattedCardNumber, setCardNumber] = useState("");
  const onChange = (event) => {
    let value = event.nativeEvent.text;
    if (value.length === 4 || value.length === 9 || value.length === 14) {
      value = value + " ";
    }
    setCardNumber(value);
    onChangeNumber(value);
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
});

const CardholderName = React.memo(({ onChangeName }) => {
  const [value, setValue] = React.useState("");
  const onChange = (event) => {
    let value = event.nativeEvent.text;
    setValue(value);
    onChangeName(value);
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
});

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

const SecurityCode = ({ cvvFocusedCb, cvvCodeCb }) => {
  const [value, setValue] = React.useState("");
  const onChange = (event) => {
    let value = event.nativeEvent.text;
    setValue(value);
    cvvCodeCb(value);
  };

  return (
    <TextInput
      style={StyleSheet.flatten([controlStyles.inputStyle, { width: 60 }])}
      placeholder="CVV"
      placeholderTextColor="#b7b7b7"
      keyboardType={"decimal-pad"}
      value={value}
      maxLength={3}
      onChange={onChange}
      onFocus={() => cvvFocusedCb(true)}
      onBlur={() => cvvFocusedCb(false)}
      onSubmitEditing={() => cvvFocusedCb(false)}
    />
  );
};

export const Control = () => {
  const dispatch = useDispatch();
  const changeNumber = useCallback(
    (value) => dispatch(changeCardNumber(value)),
    [dispatch]
  );
  const changeName = useCallback(
    (value) => dispatch(changeCardholderName(value)),
    [dispatch]
  );

  const changeMonth = useCallback((value) => dispatch(), [dispatch]);
  const changeYear = useCallback((value) => dispatch(), [dispatch]);
  const changeCvv = useCallback((value) => dispatch(), [dispatch]);
  
  return (
    <View style={controlStyles.container}>
      <CardNumber onChangeNumber={changeNumber} />
      <CardholderName onChangeName={changeName} />
      <View style={controlStyles.bottomRowContainer}>
        <ExpireMonth monthCb={monthCb} />
        <ExpireYear yearCb={yearCb} />
        <SecurityCode cvvFocusedCb={cvvFocusedCb} cvvCodeCb={cvvCodeCb} />
      </View>
    </View>
  );
};

const controlStyles = StyleSheet.create({
  container: {
    width: DeviceInfo.isTablet() ? phoneWidth - 300 : phoneWidth - 20,
    height: DeviceInfo.isTablet() ? phoneHeight * 0.3 : phoneHeight / 3,
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
  cvvFocusedCb: PropTypes.func,
  cvvCodeCb: PropTypes.func,
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

SecurityCode.propTypes = {
  cvvFocusedCb: PropTypes.func,
  cvvCodeCb: PropTypes.func,
};

CardNumber.displayName = "CardNumber";
