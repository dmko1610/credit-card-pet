import React from "react";
import PropTypes from "prop-types";
import { Dimensions, StyleSheet, ImageBackground } from "react-native";
import TopRow from "./TopRow";
import MiddleRow from "./MiddleRow";
import BottomRow from "./BottomRow";

const abstract = require("../assets/abstract.jpg");
// const tree = require("../assets/tree.jpg");

const phoneWidth = Math.round(Dimensions.get("screen").width);

const Card = ({ cardNumber }) => {
  return (
    <ImageBackground
      source={abstract}
      style={crediCardStyle.cardContainer}
      imageStyle={crediCardStyle.image}
    >
      <TopRow />
      <MiddleRow cardNumber={cardNumber} />
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
    marginTop: 20,
  },
  image: {
    borderRadius: 17,
    borderColor: "gray",
    borderWidth: 0.3,
  },
});

Card.propTypes = {
  cardNumber: PropTypes.string,
};

export default Card;
