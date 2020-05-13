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

import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { Button } from "native-base";

import styles from "./styles";

const { width, height } = Dimensions.get("window");

import { Block, Text } from "../../components";
import ShopCard from "../../components/ShopCard/ShopCard";
import Constants from "expo-constants";
import OrderList from "../../components/OrderList/OrderList";

const StatusBarHeight = Constants.statusBarHeight;
class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {
        id: 2,
        ShopKeeper: "Lalji Pandey",
        Img: "image-url",
        ShopId: "DAL004",
        ShopName: "Lalji Babu Kirana Store",
        Rating: "4.1",
        Review: "104",
        Tag: ["Grocery", "Food"],
        Adress: "8584 W Sherman Dr undefined Desoto, Oklahoma, India",
        Hours: "open",
        closes: "8:30 PM",
        Status: "Accepting List",
      },
    };
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
            resizeMode="cover"
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
              color="white"
              style={[styles.steps, { opacity }]}
            />
          );
        })}
      </Block>
    );
  };

  render() {
    const { navigation } = this.props;
    return (
      <ScrollView>
        <View style={styles.statusBar}></View>
        <View style={styles.photos}>
          <View style={styles.nameBar}>
            <Button transparent onPress={() => navigation.goBack()}>
              <MaterialCommunityIconsIcon
                style={{ color: "rgba(255, 255, 255,0.9)", fontSize: 25 }}
                name="arrow-left"
              ></MaterialCommunityIconsIcon>
            </Button>
            <View style={styles.storeNameParent}>
              <Text style={styles.storeName}>{this.state.item.ShopName}</Text>
            </View>
          </View>
          <View
            style={{
              position: "absolute",
              //   top: "-15%",
              backgroundColor: "rgba(0, 0, 0, 0.4)",
            }}
          >
            {this.renderIllustrations()}
            {this.renderSteps()}
          </View>
        </View>

        <View style={{ marginTop: height / 3 - 25 - StatusBarHeight }}>
          <ShopCard item={this.state.item} />
        </View>
        <View style={{ justifyContent: "flex-start" }}>
          <OrderList />
        </View>
      </ScrollView>
    );
  }
}

Order.defaultProps = {
  illustrations: [
    { id: 1, source: require("../../../assets/images/Rectangle.png") },
    { id: 2, source: require("../../../assets/images/illustration_2.png") },
    { id: 3, source: require("../../../assets/images/illustration_3.png") },
  ],
};

export default Order;
