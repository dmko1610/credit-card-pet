import React from "react";
import PropTypes from "prop-types";
import {
  Dimensions,
  StyleSheet,
  ImageBackground,
  View,
  Animated,
  TouchableOpacity,
  Text,
  SafeAreaView,
} from "react-native";
import DeviceInfo from "react-native-device-info";
import TopRow from "./TopRow";
import MiddleRow from "./MiddleRow";
import { BottomRow } from "./BottomRow";

const abstract = require("../assets/abstract.jpg");
// const tree = require("../assets/tree.jpg");

const phoneWidth = Math.round(Dimensions.get("screen").width);

export class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  // cardNumber,
  // cardholderName,
  // expiredMonth,
  // expiredYear,

  // startAnimation() {
  //   return Animated.timing(animatedValue, {
  //     toValue: 1,
  //     duration: 1000,
  //     useNativeDriver: true,
  //   });
  // }

  render() {
    return (
      // <Animated.View
      //   style={{
      //     zIndex: 100,
      //     transform: [
      //       {
      //         scale: animatedValue.interpolate({
      //           inputRange: [0, 0.5, 1],
      //           outputRange: [1, 2, 3],
      //         }),
      //       },
      //     ],
      //   }}
      // >
      <SafeAreaView>
        <ImageBackground
          source={abstract}
          style={crediCardStyle.cardContainer}
          imageStyle={crediCardStyle.image}
        >
          <TopRow />
          <MiddleRow cardNumber={this.props.cardNumber} />
          <BottomRow
            cardholderName={this.props.cardholderName}
            expiredMonth={this.props.expiredMonth}
            expiredYear={this.props.expiredYear}
          />
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

const crediCardStyle = StyleSheet.create({
  cardContainer: {
    width: DeviceInfo.isTablet() ? phoneWidth - 400 : phoneWidth - 60,
    height: 200,
    borderRadius: 17,
    elevation: 17,
    alignSelf: "center",
    marginTop: 20,
  },
  image: {
    borderRadius: 17,
    borderColor: "gray",
    borderWidth: 0.3,
  },
});

Card.propTypes = {
  cardNumber: PropTypes.string,
  cardholderName: PropTypes.string,
  expiredYear: PropTypes.string,
  expiredMonth: PropTypes.string,
};
