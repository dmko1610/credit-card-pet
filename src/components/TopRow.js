import React from "react";
import { View, Image, StyleSheet } from "react-native";

const hologram = require("../assets/hologram.png");
const mastercard = require("../assets/mastercard.png");

const Hologram = () => {
  return <Image source={hologram} style={topRowStyle.hologram} />;
};

const PaySystemLogo = () => {
  return <Image source={mastercard} style={topRowStyle.paySystemLogo} />;
};

const TopRow = () => {
  return (
    <View style={topRowStyle.topRowContainer}>
      <Hologram />
      <PaySystemLogo />
    </View>
  );
};

const topRowStyle = StyleSheet.create({
  topRowContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  hologram: {
    width: 50,
    height: 50,
  },
  paySystemLogo: {
    width: 60,
    height: 60,
  },
});

export default TopRow;
