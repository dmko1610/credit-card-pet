import React, { useState } from "react";
import { View, Image, StyleSheet, Pressable, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { changeBackgroundImage } from "../actions/ThemeActions";

const hologram = require("../assets/hologram.png");
const mastercard = require("../assets/mastercard.png");
const visa = require("../assets/visa.png");
const maestro = require("../assets/maestro.png");
const mir = require("../assets/mir.png");

const Hologram = () => {
  const dispatch = useDispatch();
  return (
    <Pressable
      android_ripple={{ borderless: false, color: "#CCCCCC" }}
      onPress={() => dispatch(changeBackgroundImage())}
      style={topRowStyle.holoButton}
    >
      <Image source={hologram} style={topRowStyle.hologram} />
      <Text style={topRowStyle.holoText}>Push the holo</Text>
    </Pressable>
  );
};

const PaySystemLogo = () => {
  const cardNumber = useSelector((state) => state.root.cardNumber);
  let icon = "";
  if (cardNumber[0] == 2) {
    icon = mir;
  }
  if (cardNumber[0] == 5) {
    icon = mastercard;
  }
  if (cardNumber[0] == 4) {
    icon = visa;
  }
  if (cardNumber[0] == 3 || cardNumber[0] == 6) {
    icon = maestro;
  }

  return (
    <Image
      source={icon}
      style={topRowStyle.paySystemLogo}
      resizeMode="contain"
    />
  );
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
  holoButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  holoText: {
    color: "white",
    fontSize: 20,
    fontFamily: "FiraCode",
    fontWeight: "bold",
  },
});

export default TopRow;
