import React from "react";
import { View, Dimensions, StyleSheet, ImageBackground } from "react-native";
import TopRow from "./TopRow";
import MiddleRow from "./MiddleRow";
import BottomRow from "./BottomRow";

const phoneWidth = Math.round(Dimensions.get("screen").width);
const abstract = require("../assets/abstract.jpg");
const tree = require("../assets/tree.jpg");

const Card = () => {
  return (
    <ImageBackground
      source={abstract}
      style={crediCardStyle.cardContainer}
      imageStyle={crediCardStyle.image}
    >
      <TopRow />
      <MiddleRow />
      <BottomRow />
    </ImageBackground>
  );
};

const crediCardStyle = StyleSheet.create({
  cardContainer: {
    width: phoneWidth - 60,
    height: 200,
    borderRadius: 17,
    elevation: 17,
    alignSelf: "center",
  },
  image: {
    borderRadius: 17,
    borderColor: "gray",
    borderWidth: 0.3,
  },
});

export default Card;
