import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

const CardholderName = () => {
  const isNameFocused = useSelector((state) => state.focus.isNameFocused);
  const cardholderName = useSelector((state) => state.root.cardholderName);

  const cardholderStyle = [];

  if (isNameFocused) {
    cardholderStyle.push(styles.focusedName);
  }

  return (
    <View style={StyleSheet.flatten(cardholderStyle)}>
      <Text style={StyleSheet.flatten([styles.commonText, styles.cardholder])}>
        {cardholderName}
      </Text>
    </View>
  );
};

const ExpireDate = () => {
  const expiredMonth = useSelector((state) => state.root.expiredMonth);
  const expiredYear = useSelector((state) => state.root.expiredYear);
  return (
    <Text style={StyleSheet.flatten([styles.commonText, styles.expireDate])}>
      {expiredMonth}/{expiredYear}
    </Text>
  );
};

const ExpirationBlock = () => {
  const isExpiredDateFocused = useSelector(
    (state) => state.focus.isExpiredDateFocused
  );
  const {
    commonText,
    expirationBlockTitle,
    expirationBlockContainer,
    focusedExpirationBlock,
  } = styles;
  const blockStyle = [expirationBlockContainer];

  if (isExpiredDateFocused) {
    blockStyle.push(focusedExpirationBlock);
  }
  return (
    <View style={blockStyle}>
      <Text style={StyleSheet.flatten([commonText, expirationBlockTitle])}>
        month/year
      </Text>
      <ExpireDate />
    </View>
  );
};

export const BottomRow = () => {
  return (
    <View style={styles.bottomRowContainer}>
      <CardholderName />
      <ExpirationBlock />
    </View>
  );
};

const styles = StyleSheet.create({
  bottomRowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  focusedName: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#FFFFFF",
    borderRadius: 10,
    marginRight: 10,
  },
  cardholder: {
    fontSize: 20,
    letterSpacing: 5,
    paddingTop: 5,
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
  focusedExpirationBlock: {
    borderWidth: 2,
    borderColor: "#FFFFFF",
    borderRadius: 10,
    padding: 5
  },
});
