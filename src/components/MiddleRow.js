import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";

const BankIdentificationNumber = ({ bin, number }) => {
  return <Text style={number}>{bin}</Text>;
};

/* const AccountIdentifierNumber = ({}) => {
  return <Text>78 9876 5432</Text>;
}; */

const MiddleRow = ({ cardNumber }) => {
  const { middleRowContainer, number } = middleRowStyle;
  return (
    <View style={middleRowContainer}>
      <BankIdentificationNumber number={number} bin={cardNumber} />
      {/* <AccountIdentifierNumber style={number} /> */}
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
    color: "black",
    fontSize: 25,
    fontFamily: "monospace",
  },
});

MiddleRow.propTypes = {
  cardNumber: PropTypes.string,
  cardholderName: PropTypes.string,
};

BankIdentificationNumber.propTypes = {
  bin: PropTypes.string,
  number: PropTypes.style,
};

export default MiddleRow;
