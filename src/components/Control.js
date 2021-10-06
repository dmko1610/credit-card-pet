/* eslint-disable no-extra-boolean-cast */
import React, { useCallback, useRef, useState } from "react";
import PropTypes from "prop-types";
import DeviceInfo from "react-native-device-info";
import { View, Dimensions, StyleSheet, TextInput } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useDispatch } from "react-redux";
import {
  changeCardholderName,
  changeCardNumber,
  changeCvvCode,
  changeExpiredMonth,
  changeExpiredYear,
} from "../actions/RootActions";
import {
  toggleCvvCodeFocus,
  toggleDateFocus,
  toggleNameFocus,
  toggleNumberFocus,
} from "../actions/FocusActions";

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

const CardNumber = ({
  onChangeNumber,
  onSubmitEditing,
  toggleNumberFocused,
}) => {
  const [formattedCardNumber, setCardNumber] = useState("");
  const onChange = (event) => {
    let value = event.nativeEvent.text;
    if (value.length === 4 || value.length === 9 || value.length === 14) {
      value = value + " ";
    }
    setCardNumber(value);
    onChangeNumber(value);
  };

  const onSubmit = () => {
    onSubmitEditing();
    toggleNumberFocused(false);
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
      onSubmitEditing={onSubmit}
      onFocus={() => toggleNumberFocused(true)}
      onBlur={() => toggleNumberFocused(false)}
    />
  );
};

const CardholderName = React.forwardRef(
  ({ onChangeName, toggleNameFocused }, ref) => {
    const [value, setValue] = React.useState("");
    const onChange = (event) => {
      let value = event.nativeEvent.text;
      setValue(value);
      onChangeName(value);
    };

    return (
      <TextInput
        ref={ref}
        placeholder="Cardholder Name"
        placeholderTextColor="#b7b7b7"
        style={controlStyles.inputStyle}
        autoCapitalize={"characters"}
        onChange={onChange}
        value={value}
        onSubmitEditing={() => toggleNameFocused(false)}
        onFocus={() => toggleNameFocused(true)}
        onBlur={() => toggleNameFocused(false)}
      />
    );
  }
);

const ExpireMonth = ({ onChangeMonth, onExpireFocused }) => {
  const [month, setMonth] = useState("");
  const [isPressed, setIsPressed] = useState(false);

  const onChange = (cb) => {
    setMonth(cb());
    onChangeMonth(cb());
  };

  const onOpen = (val) => {
    setIsPressed(val);
    onExpireFocused(true);
  };

  return (
    <View style={controlStyles.dropdownList}>
      <DropDownPicker
        listMode={"FLATLIST"}
        items={months}
        open={isPressed}
        value={month}
        setOpen={onOpen}
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

const ExpireYear = ({ onChangeYear, onSubmitted, onExpireFocused }) => {
  const [year, setYear] = useState("");
  const [isPressed, setIsPressed] = useState(false);

  const onChange = (cb) => {
    setYear(cb());
    onChangeYear(cb());
  };

  const onClose = () => {
    setIsPressed(false);
    onSubmitted();
    onExpireFocused(false);
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
        onClose={onClose}
      />
    </View>
  );
};

const SecurityCode = React.forwardRef(
  ({ onFocusedCvvCode, onChangeCvvCode }, ref) => {
    const [value, setValue] = React.useState("");
    const onChange = (event) => {
      let value = event.nativeEvent.text;
      setValue(value);
      onChangeCvvCode(value);
    };

    return (
      <TextInput
        ref={ref}
        style={StyleSheet.flatten([controlStyles.inputStyle, { width: 60 }])}
        placeholder="CVV"
        placeholderTextColor="#b7b7b7"
        keyboardType={"decimal-pad"}
        value={value}
        maxLength={3}
        onChange={onChange}
        onFocus={() => onFocusedCvvCode(true)}
        onBlur={() => onFocusedCvvCode(false)}
        onSubmitEditing={() => onFocusedCvvCode(false)}
      />
    );
  }
);

export const Control = () => {
  const nameRef = useRef(null);
  const cvvRef = useRef(null);
  const onNumberSubmitted = () => nameRef.current.focus();
  const onYearSubmitted = () => cvvRef.current.focus();

  const dispatch = useDispatch();
  const changeNumber = (value) => dispatch(changeCardNumber(value));
  const changeName = (value) => dispatch(changeCardholderName(value));

  const changeMonth = (value) => dispatch(changeExpiredMonth(value));
  const changeYear = (value) => dispatch(changeExpiredYear(value));
  const changeCvv = (value) => dispatch(changeCvvCode(value));

  const toggleCvvFocus = (value) => dispatch(toggleCvvCodeFocus(value));
  const toggleNumberFocused = (value) => dispatch(toggleNumberFocus(value));
  const toggleNameFocused = (value) => dispatch(toggleNameFocus(value));
  const toggleDateFocused = (value) => dispatch(toggleDateFocus(value));

  return (
    <View style={controlStyles.container}>
      <CardNumber
        onChangeNumber={changeNumber}
        onSubmitEditing={onNumberSubmitted}
        toggleNumberFocused={toggleNumberFocused}
      />
      <CardholderName
        onChangeName={changeName}
        ref={nameRef}
        toggleNameFocused={toggleNameFocused}
      />
      <View style={controlStyles.bottomRowContainer}>
        <ExpireMonth
          onChangeMonth={changeMonth}
          onExpireFocused={toggleDateFocused}
        />
        <ExpireYear
          onChangeYear={changeYear}
          onSubmitted={onYearSubmitted}
          onExpireFocused={toggleDateFocused}
        />
        <SecurityCode
          onChangeCvvCode={changeCvv}
          onFocusedCvvCode={toggleCvvFocus}
          ref={cvvRef}
        />
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

CardNumber.propTypes = {
  onChangeNumber: PropTypes.func,
  onSubmitEditing: PropTypes.func,
};

CardholderName.propTypes = {
  onChangeName: PropTypes.func,
};

ExpireMonth.propTypes = {
  onChangeMonth: PropTypes.func,
};

ExpireYear.propTypes = {
  onChangeYear: PropTypes.func,
  onClose: PropTypes.func,
};

SecurityCode.propTypes = {
  toggleCvvCodeFocus: PropTypes.func,
  onChangeCvvCode: PropTypes.func,
};

CardNumber.displayName = "CardNumber";
