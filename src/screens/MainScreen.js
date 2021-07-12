import React from "react";
import {
  Animated,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Card } from "../components/Card";
import { Control } from "../components/Control";
import RevertCard from "../components/RevertCard";

export const MainScreen = () => {
  const startCardRotate = React.useRef(new Animated.Value(0)).current;
  const startRevertRotate = React.useRef(new Animated.Value(0)).current;

  const finishCardRotate = React.useRef(new Animated.Value(0)).current;
  const finishRevertRotate = React.useRef(new Animated.Value(1)).current;

  const [cardNumber, setCardNumber] = React.useState("");
  const [cardholderName, setCardholderName] = React.useState("");
  const [expiredMonth, setExpiredMonth] = React.useState("");
  const [expiredYear, setExpiredYear] = React.useState("");
  const [isCVVPressed, setCvvPressed] = React.useState(false);

  const getCardNumber = (data) => setCardNumber(data);

  const getCardholderName = (data) => setCardholderName(data);

  const getExpiredMonth = (data) => setExpiredMonth(data);

  const getExpiredYear = (data) => setExpiredYear(data);

  const getCvvPressed = () => setCvvPressed(true);

  const [anim, setAnim] = React.useState(false);

  // finishCardRotate.interpolate({
  //   inputRange: [0, 0.5, 1],
  //   outputRange: ["-90deg", "-180deg", "-360deg"],
  // });

  React.useEffect(() => {
    if (isCVVPressed) {
      startAnimation().start();
    } else {
      stopAnimateion().start();
    }
  }, [isCVVPressed]);

  function startAnimation() {
    console.log("scr ", startCardRotate);

    return Animated.sequence([
      Animated.timing(startCardRotate, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(startRevertRotate, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]);
  }

  function stopAnimateion() {
    console.log("fcr ", finishCardRotate);
    return Animated.sequence([
      Animated.timing(startRevertRotate, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(startCardRotate, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
      // Animated.timing(finishCardRotate, {
      //   toValue: 1,
      //   duration: 500,
      //   useNativeDriver: true,
      // }),
      // Animated.timing(finishRevertRotate, {
      //   toValue: 0,
      //   duration: 500,
      //   useNativeDriver: true,
      // }),
    ]);
  }

  return (
    <ScrollView contentContainerStyle={mainScreenStyles.containerStyle}>
      {/* <TouchableOpacity
        onPress={() => {
          startAnimation().start();
        }}
      >
        <Text>First button</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          stopAnimateion().start();
        }}
      >
        <Text>second button</Text>
      </TouchableOpacity> */}
      <Animated.View
        style={{
          transform: [
            // { perspective: 200 },
            // {
            //   rotateY: finishCardRotate.interpolate({
            //     inputRange: [0, 0.5, 1],
            //     outputRange: ["-270deg", "-330deg", "-360deg"],
            //   }),
            // },
            {
              rotateY: startCardRotate.interpolate({
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
          top: 100,
          marginLeft: 20,
          transform: [
            {
              rotateY: startRevertRotate.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: ["90deg", "10deg", "0deg"],
              }),
            },
          ],
        }}
      >
        <RevertCard />
      </Animated.View>
      <View>
        <Control
          cardNumberCb={getCardNumber}
          cardholderNameCb={getCardholderName}
          monthCb={getExpiredMonth}
          yearCb={getExpiredYear}
          cvvPressedCb={getCvvPressed}
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
