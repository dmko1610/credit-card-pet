import React from "react";
import { View, Dimensions, Text } from "react-native";

const Control = () => {
  const phoneWidth = Math.round(Dimensions.get("screen").width);
  const phoneHeight = Math.round(Dimensions.get("window").height);
  console.log("p", phoneWidth);
  return (
    <View
      style={{
        position: "absolute",
        width: phoneWidth - 20,
        height: phoneHeight * 0.75,
        top: 150,
        borderRadius: 12,
        borderTopWidth: 0,
        borderWidth: 1,
        borderColor: "gray",
        borderTopColor: "transparent",
        alignSelf: "center"
      }}
    ></View>
  );
};

export default Control;
