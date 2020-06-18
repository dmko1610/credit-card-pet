import React from "react";
import { View, Dimensions } from "react-native";

const Control = () => {
  const phoneWidth = Math.round(Dimensions.get("screen").width);
  console.log("p", phoneWidth);
  return (
    <View
      style={{
        position: "absolute",
        zIndex: 0,
        margin: 10,
        width: phoneWidth - 20,
        height: 400,
        top: 150,
        backgroundColor: "white",
        elevation: 4,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "gray",
      }}
    ></View>
  );
};

export default Control;
