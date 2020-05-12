import React, { Component } from "react";
import {
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  Animated,
  Modal,
  ScrollView,
  View,
} from "react-native";

import styles from "./styles";

const { width, height } = Dimensions.get("window");

import { Button, Block, Text } from "../../components";

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  scrollX = new Animated.Value(0);

  renderIllustrations = () => {
    const { illustrations } = this.props;
    return (
      <FlatList
        horizontal
        pagingEnabled
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        snapToAlignment="center"
        data={illustrations}
        extraDate={this.state}
        keyExtractor={(item, index) => `${item.id}`}
        renderItem={({ item }) => (
          <Image
            source={item.source}
            resizeMode="contain"
            style={{ width, height: height / 3, overflow: "visible" }}
          />
        )}
        onScroll={Animated.event([
          {
            nativeEvent: { contentOffset: { x: this.scrollX } },
          },
        ])}
      />
    );
  };
  renderSteps = () => {
    const { illustrations } = this.props;
    const stepPosition = Animated.divide(this.scrollX, width);
    return (
      <Block row center middle style={styles.stepsContainer}>
        {illustrations.map((item, index) => {
          const opacity = stepPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.4, 1, 0.4],
            extrapolate: "clamp",
          });
          return (
            <Block
              animated
              flex={false}
              key={`step-${index}`}
              color="gray"
              style={[styles.steps, { opacity }]}
            />
          );
        })}
      </Block>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.photos}>
          {this.renderIllustrations()}
          {this.renderSteps()}
        </View>
      </View>
    );
  }
}

Order.defaultProps = {
  illustrations: [
    { id: 1, source: require("../../../assets/images/illustration_1.png") },
    { id: 2, source: require("../../../assets/images/illustration_2.png") },
    { id: 3, source: require("../../../assets/images/illustration_3.png") },
  ],
};

export default Order;
