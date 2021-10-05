import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

const CardholderName = ({ style }) => {
  const cardholderName = useSelector((state) => state.root.cardholderName);
  return <Text style={style}>{cardholderName}</Text>;
};

const ExpireDate = ({ expiredMonth, expiredYear, style }) => {
  return (
    <Text style={style}>
      {expiredMonth}/{expiredYear}
    </Text>
  );
};

const ExpirationBlock = ({ expiredMonth, expiredYear }) => {
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
      <ExpireDate
        expiredMonth={expiredMonth}
        expiredYear={expiredYear}
        style={StyleSheet.flatten([commonText, expireDate])}
      />
    </View>
  );
};

export const BottomRow = ({ cardholderName, expiredMonth, expiredYear }) => {
  const { commonText, cardholder, bottomRowContainer } = bottomRowStyle;
  return (
    <View style={bottomRowContainer}>
      <CardholderName
        cardholderName={cardholderName}
        style={StyleSheet.flatten([commonText, cardholder])}
      />
      <ExpirationBlock expiredMonth={expiredMonth} expiredYear={expiredYear} />
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
  cardholderName: PropTypes.string,
  style: PropTypes.style,
};

BottomRow.propTypes = {
  cardholderName: PropTypes.string,
  expiredMonth: PropTypes.string,
  expiredYear: PropTypes.string,
};

ExpirationBlock.propTypes = {
  expiredMonth: PropTypes.string,
  expiredYear: PropTypes.string,
};

ExpireDate.propTypes = {
  expiredMonth: PropTypes.string,
  expiredYear: PropTypes.string,
  style: PropTypes.style,
};
