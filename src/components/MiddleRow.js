import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

const FirstQuarter = ({ number }) => {
  let result = "####";
  if (number) {
    result = number.concat(result.slice(number.length));
  }
  return <Text style={styles.number}>{result}</Text>;
};

const SecondQuarter = ({ number }) => {
  let result = "####";
  if (number) {
    result = number.concat(result.slice(number.length));
  }
  return <Text style={styles.number}>{result}</Text>;
};

const ThirdQuarter = ({ number }) => {
  let result = "####";
  if (number) {
    result = number.concat(result.slice(number.length));
  }
  return <Text style={styles.number}>{result}</Text>;
};

const FourthQuarter = ({ number }) => {
  let result = "####";
  if (number) {
    result = number.concat(result.slice(number.length));
  }
  return <Text style={styles.number}>{result}</Text>;
};

const MiddleRow = () => {
  const cardNumber = useSelector((state) => state.root.cardNumber);
  const isNumberFocused = useSelector((state) => state.focus.isNumberFocused);
  const containerStyle = [styles.middleRowContainer];
  if (isNumberFocused) {
    containerStyle.push(styles.focusedContainer);
  }
  return (
    <View style={StyleSheet.flatten(containerStyle)}>
      <FirstQuarter number={cardNumber.slice(0, 4)} />
      <SecondQuarter number={cardNumber.slice(4, 8)} />
      <ThirdQuarter number={cardNumber.slice(8, 12)} />
      <FourthQuarter number={cardNumber.slice(12)} />
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
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: "#FFFFFF",
    borderRadius: 10,
  },
  number: {
    letterSpacing: 2,
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "FiraCode",
    paddingHorizontal: 8,
  },
});

export default MiddleRow;
