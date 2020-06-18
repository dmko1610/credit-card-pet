import React from "react";
import { View, Text, Dimensions, Image } from "react-native";

const hologram = require("../assets/hologram.png");
const mastercard = require("../assets/mastercard.png");

const CreditCard = () => {
  const phoneWidth = Math.round(Dimensions.get("screen").width);
  return (
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
        <Hologram />
        <PaySystemLogo />
      </View>
      <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
        <BankIdentificationNumber />
        <AccountIdentifierNumber />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ color: "white" }}>Expires</Text>
      </View>
      <View
        style={{
          // flex: 0.5,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <CardholderName />
        <Text style={{ color: "white" }}>13/12</Text>
      </View>
    </View>
  );
};

const Hologram = () => {
  return <Image source={hologram} style={{ width: 50, height: 50 }} />;
};

const PaySystemLogo = () => {
  return <Image source={mastercard} style={{ width: 60, height: 60 }} />;
};

const CardholderName = () => {
  return <Text style={{ color: "white" }}>John Wick</Text>;
};

const BankIdentificationNumber = () => {
  return <Text>1234 56</Text>;
};

const AccountIdentifierNumber = () => {
  return <Text>78 9876 5432</Text>;
};

const Card = () => {
  return (
    <View style={{ padding: 20 }}>
      <CreditCard />
    </View>
  );
};

export default Card;
