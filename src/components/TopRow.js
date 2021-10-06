import React, { useState } from "react";
import { View, Image, StyleSheet, Pressable } from "react-native";
import { useDispatch } from "react-redux";
import { changeBackgroundImage } from "../actions/ThemeActions";

const hologram = require("../assets/hologram.png");
const mastercard = require("../assets/mastercard.png");

const Hologram = () => {
  const dispatch = useDispatch();

  return (
    <Pressable
      android_ripple={{ borderless: false, color: "#CCCCCC" }}
      onPress={() => dispatch(changeBackgroundImage())}
    >
      <Image source={hologram} style={topRowStyle.hologram} />
    </Pressable>
  );
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
