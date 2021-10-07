import React from "react";
import {
  Dimensions,
  StyleSheet,
  ImageBackground,
  Text,
  View,
} from "react-native";
import { useSelector } from "react-redux";

const phoneWidth = Math.round(Dimensions.get("screen").width);

export const RevertCard = () => {
  const cvvCode = useSelector((state) => state.root.cvvCode);
  const backgroundThemeUrl = useSelector(
    (state) => state.theme.backgroundThemeUrl
  );

  const {
    cardContainer,
    image,
    blackSquare,
    whiteSquare,
    cvvContainer,
    cvvCodeStyle,
    bottomRowContainer,
  } = creditCardStyle;
  return (
    <ImageBackground
      source={{ uri: backgroundThemeUrl }}
      style={cardContainer}
      imageStyle={image}
    >
      <View style={blackSquare} />
      <View style={bottomRowContainer}>
        <View style={whiteSquare} />
        <View style={cvvContainer}>
          <Text style={cvvCodeStyle}>{cvvCode}</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const creditCardStyle = StyleSheet.create({
  cardContainer: {
    transform: [{ rotateY: "180deg" }],
    width: phoneWidth - 60,
    height: 200,
    borderRadius: 17,
    elevation: 17,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-around",
  },
  image: {
    borderRadius: 17,
    borderColor: "gray",
    borderWidth: 0.3,
  },
  lineStyle: {
    height: StyleSheet.hairlineWidth,
    width: phoneWidth - 150,
  },
  blackSquare: {
    height: 40,
    width: phoneWidth - 60,
    backgroundColor: "black",
  },
  whiteSquare: {
    height: 40,
    width: phoneWidth - 100,
    backgroundColor: "white",
    justifyContent: "space-around",
    alignItems: "flex-end",
  },
  bottomRowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  cvvContainer: {
    position: "absolute",
    left: 5,
  },
  cvvCodeStyle: {
    transform: [{ rotateY: "180deg" }],
    fontSize: 20,
    fontFamily: "Roboto",
    letterSpacing: 2,
  },
});
