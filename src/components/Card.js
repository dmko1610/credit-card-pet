import React from "react";
import PropTypes from "prop-types";
import { Dimensions, StyleSheet, ImageBackground } from "react-native";
import TopRow from "./TopRow";
import MiddleRow from "./MiddleRow";
import BottomRow from "./BottomRow";
import DeviceInfo from "react-native-device-info";

const abstract = require("../assets/abstract.jpg");
// const tree = require("../assets/tree.jpg");

const phoneWidth = Math.round(Dimensions.get("screen").width);

const Card = ({ cardNumber, cardholderName }) => {
  return (
    <ImageBackground
      source={abstract}
      style={crediCardStyle.cardContainer}
      imageStyle={crediCardStyle.image}
    >
      <TopRow />
      <MiddleRow cardNumber={cardNumber} />
      <BottomRow cardholderName={cardholderName} />
    </ImageBackground>
  );
};

const crediCardStyle = StyleSheet.create({
  cardContainer: {
    width: DeviceInfo.isTablet ? phoneWidth - 400 : phoneWidth - 60,
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
  cardholderName: PropTypes.string,
};

export default Card;
