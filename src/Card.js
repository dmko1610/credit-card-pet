import React from "react";
import { View, Text, Dimensions } from "react-native";

const Card = () => {
  const phoneWidth = Math.round(Dimensions.get("screen").width);
  return (
    <View
      style={{
        padding: 20,
        
      }}
    >
      <View
        style={{
          backgroundColor: "green",
          width: phoneWidth - 40,
          height: 200,
          borderRadius: 15,
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 10,
          }}
        >
          <Text style={{ color: "white" }}>Some Icon</Text>
          <Text style={{ color: "white" }}>Bank Logo</Text>
        </View>
        <View
          style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}
        >
          <Text style={{ color: "white", alignSelf: "center" }}>
            5500 4000 1233 1233
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: "white" }}>Card Holder</Text>
          <Text style={{ color: "white" }}>Expires</Text>
        </View>
        <View
          style={{
            // flex: 0.5,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: "white" }}>John Wick</Text>
          <Text style={{ color: "white" }}>13/12</Text>
        </View>
      </View>
    </View>
  );
};

export default Card;
