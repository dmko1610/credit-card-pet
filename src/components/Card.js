import React from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import TopRow from "./TopRow";
import MiddleRow from "./MiddleRow";
import BottomRow from "./BottomRow";

const phoneWidth = Math.round(Dimensions.get("screen").width);

const CreditCard = () => {
  return (
    <View style={crediCardStyle.cardContainer}>
      <TopRow />
      <MiddleRow />
      <BottomRow />
    </View>
  );
};

const Card = () => {
  return (
    <View style={crediCardStyle.cardContent}>
      <CreditCard />
    </View>
  );
};

const crediCardStyle = StyleSheet.create({
  cardContainer: {
    backgroundColor: "green",
    width: phoneWidth - 40,
    height: 200,
    borderRadius: 15,
  },
  cardContent: {
    padding: 20,
  },
});

export default Card;
