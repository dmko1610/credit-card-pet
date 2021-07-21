import React from "react";
import { Animated, ScrollView, StyleSheet, View } from "react-native";
import { Card } from "../components/Card";
import { Control } from "../components/Control";
import { RevertCard } from "../components/RevertCard";

export const MainScreen = () => {
  const cardRotationAnim = React.useRef(new Animated.Value(0)).current;
  const revertRotationAnim = React.useRef(new Animated.Value(0)).current;

  const [cardNumber, setCardNumber] = React.useState("");
  const [cardholderName, setCardholderName] = React.useState("");
  const [expiredMonth, setExpiredMonth] = React.useState("");
  const [expiredYear, setExpiredYear] = React.useState("");
  const [isCvvFocused, setCvvFocused] = React.useState(false);
  const [cvvCode, setCvvCode] = React.useState("");

  const getCardNumber = (data) => setCardNumber(data);

  const getCardholderName = (data) => setCardholderName(data);

  const getExpiredMonth = (data) => setExpiredMonth(data);

  const getExpiredYear = (data) => setExpiredYear(data);

  const getCvvFocused = (data) => setCvvFocused(data);

  const getCvvCode = (data) => setCvvCode(data);

  React.useEffect(() => {
    if (isCvvFocused) {
      startAnimation().start();
    } else {
      stopAnimation().start();
    }
  }, [isCvvFocused]);

  const startAnimation = () =>
    Animated.sequence([
      Animated.timing(cardRotationAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(revertRotationAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]);

  const stopAnimation = () =>
    Animated.sequence([
      Animated.timing(revertRotationAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(cardRotationAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]);

  return (
    <ScrollView contentContainerStyle={mainScreenStyles.containerStyle}>
      <Animated.View
        style={{
          transform: [
            {
              rotateY: cardRotationAnim.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: ["0deg", "-10deg", "-90deg"],
              }),
            },
          ],
        }}
      >
        <Card
          cardNumber={cardNumber}
          cardholderName={cardholderName}
          expiredMonth={expiredMonth}
          expiredYear={expiredYear}
        />
      </Animated.View>
      <Animated.View
        style={{
          position: "absolute",
          top: 40,
          marginLeft: 20,
          transform: [
            {
              rotateY: revertRotationAnim.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: ["90deg", "10deg", "0deg"],
              }),
            },
          ],
        }}
      >
        <RevertCard cvvCode={cvvCode} />
      </Animated.View>
      <View>
        <Control
          cardNumberCb={getCardNumber}
          cardholderNameCb={getCardholderName}
          monthCb={getExpiredMonth}
          yearCb={getExpiredYear}
          cvvFocusedCb={getCvvFocused}
          cvvCodeCb={getCvvCode}
        />
      </View>
    </ScrollView>
  );
};

const mainScreenStyles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: "space-around",

    margin: 10,
  },
});
