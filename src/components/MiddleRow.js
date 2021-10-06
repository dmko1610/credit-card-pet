import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

const BankIdentificationNumber = ({ bin }) => {
  return <Text style={styles.number}>{bin}</Text>;
};

/* const AccountIdentifierNumber = ({}) => {
  return <Text>78 9876 5432</Text>;
}; */

const MiddleRow = () => {
  const cardNumber = useSelector((state) => state.root.cardNumber);
  const isNumberFocused = useSelector((state) => state.focus.isNumberFocused);
  const containerStyle = [styles.middleRowContainer];
  if (isNumberFocused) {
    containerStyle.push(styles.focusedContainer);
  }
  return (
    <View style={StyleSheet.flatten(containerStyle)}>
      <BankIdentificationNumber bin={cardNumber} />
      {/* <AccountIdentifierNumber style={number} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  middleRowContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  focusedContainer: {
    borderWidth: 2,
    borderColor: "#FFFFFF",
    borderRadius: 10,
  },
  number: {
    letterSpacing: 2,
    color: "black",
    fontSize: 25,
    fontFamily: "monospace",
  },
});

BankIdentificationNumber.propTypes = {
  bin: PropTypes.string,
};

export default MiddleRow;
