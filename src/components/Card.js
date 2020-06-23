import React from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import TopRow from "./TopRow";
import MiddleRow from "./MiddleRow";
import BottomRow from "./BottomRow";

const phoneWidth = Math.round(Dimensions.get("screen").width);

const Card = () => {
  return (
    <View style={crediCardStyle.cardContainer}>
      <TopRow />
      <MiddleRow />
      <BottomRow />
    </View>
  );
};

const crediCardStyle = StyleSheet.create({
  cardContainer: {
    backgroundColor: "green",
    width: phoneWidth - 40,
    height: 200,
    borderRadius: 15,
    alignSelf: "center"
  },
});

export default Card;
