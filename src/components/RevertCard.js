import React from "react";
import {
  Dimensions,
  StyleSheet,
  ImageBackground,
  Text,
  View,
} from "react-native";

const phoneWidth = Math.round(Dimensions.get("screen").width);
const abstract = require("../assets/abstract.jpg");
// const tree = require("../assets/tree.jpg");

const RevertCard = () => {
  return (
    <ImageBackground
      source={abstract}
      style={crediCardStyle.cardContainer}
      imageStyle={crediCardStyle.image}
    >
      <View
        style={{ height: 40, width: phoneWidth - 60, backgroundColor: "black" }}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <View
          style={{
            height: 40,
            width: phoneWidth - 100,
            backgroundColor: "white",
            justifyContent: "space-around",
            alignItems: "flex-end"
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => line(index))}
        </View>
        <View style={{ position: "absolute", left: 5 }}>
          <Text style={{ transform: [{ rotateY: "180deg" }], fontSize: 20, fontFamily: "Roboto", letterSpacing: 2 }}>123</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const line = (index) => {
  return (
    <View
      key={index}
      style={{
        height: StyleSheet.hairlineWidth,
        width: phoneWidth - 150,
        backgroundColor: "darkblue",
      }}
    />
  );
};

const crediCardStyle = StyleSheet.create({
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
});

export default RevertCard;
