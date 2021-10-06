import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

const CardholderName = ({ style }) => {
  const cardholderName = useSelector((state) => state.root.cardholderName);
  return <Text style={style}>{cardholderName}</Text>;
};

const ExpireDate = ({ style }) => {
  const expiredMonth = useSelector((state) => state.root.expiredMonth);
  const expiredYear = useSelector((state) => state.root.expiredYear);
  return (
    <Text style={style}>
      {expiredMonth}/{expiredYear}
    </Text>
  );
};

const ExpirationBlock = () => {
  const {
    commonText,
    expireDate,
    expirationBlockTitle,
    expirationBlockContainer,
  } = bottomRowStyle;
  return (
    <View style={expirationBlockContainer}>
      <Text style={StyleSheet.flatten([commonText, expirationBlockTitle])}>
        month/year
      </Text>
      <ExpireDate style={StyleSheet.flatten([commonText, expireDate])} />
    </View>
  );
};

export const BottomRow = () => {
  const { commonText, cardholder, bottomRowContainer } = bottomRowStyle;
  return (
    <View style={bottomRowContainer}>
      <CardholderName style={StyleSheet.flatten([commonText, cardholder])} />
      <ExpirationBlock />
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
  cardholder: {
    fontSize: 20,
    letterSpacing: 5,
    paddingBottom: 5,
    alignSelf: "flex-end",
  },
  expireDate: {
    fontSize: 17,
    letterSpacing: 2,
    paddingBottom: 5,
  },
  commonText: {
    color: "black",
  },
  expirationBlockTitle: {
    fontSize: 7,
    letterSpacing: 2,
  },
  expirationBlockContainer: {
    alignSelf: "flex-end",
  },
});

CardholderName.propTypes = {
  style: PropTypes.style,
};

ExpireDate.propTypes = {
  style: PropTypes.style,
};
