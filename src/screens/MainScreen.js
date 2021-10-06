import React from "react";
import { Animated, ScrollView, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import { Card } from "../components/Card";
import { Control } from "../components/Control";
import { RevertCard } from "../components/RevertCard";

export const MainScreen = () => {
  const cardRotationAnim = React.useRef(new Animated.Value(0)).current;
  const revertRotationAnim = React.useRef(new Animated.Value(0)).current;

  const isCvvCodeFocused = useSelector((state) => state.root.isCvvCodeFocused);

  React.useEffect(() => {
    if (isCvvCodeFocused) {
      startAnimation().start();
    } else {
      stopAnimation().start();
    }
  }, [isCvvCodeFocused]);

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
    <View style={mainScreenStyles.containerStyle}>
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
        <Card />
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
        <RevertCard />
      </Animated.View>
      <View>
        <Control />
      </View>
    </View>
  );
};

const mainScreenStyles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: "space-around",

    margin: 10,
  },
});
