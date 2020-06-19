import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CardholderName = (style) => {
  return <Text {...style}>John Wick</Text>;
};

const ExpireDate = (style) => {
  return <Text {...style}>04/21</Text>;
};

const Left = () => {
  const { commonText, placeholder } = bottomRowStyle;
  return (
    <View>
      <Text style={commonText}>Cardholder Name</Text>
      <CardholderName style={StyleSheet.flatten([commonText, placeholder])} />
    </View>
  );
};

const Right = () => {
  const { commonText, expireDate } = bottomRowStyle;
  return (
    <View>
      <Text style={commonText}>Expires</Text>
      <ExpireDate style={StyleSheet.flatten([commonText, expireDate])} />
    </View>
  );
};

const BottomRow = () => {
  const { bottomRowContainer } = bottomRowStyle;
  return (
    <View style={bottomRowContainer}>
      <Left />
      <Right />
    </View>
  );
};

const bottomRowStyle = StyleSheet.create({
  bottomRowContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  placeholder: {
    fontSize: 20,
    letterSpacing: 5,
    paddingTop: 5,
  },
  expireDate: {
    fontSize: 17,
    letterSpacing: 2,
    paddingTop: 10,
  },
  commonText: {
    color: "white",
  },
});

export default BottomRow;
