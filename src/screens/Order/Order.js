import React, { Component } from "react";
import {
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  Modal,
  ScrollView,
  View,
  Text,
  Animated,
  Platform,
  StatusBar,
  RefreshControl,
} from "react-native";

import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { Button } from "native-base";

import styles from "./styles";

const { width, height } = Dimensions.get("window");

import { Block } from "../../components";
import ShopProfileCard from "../../components/ShopProfileCard/ShopProfileCard";
import Constants from "expo-constants";
import OrderList from "../../components/OrderList/OrderList";
import { theme } from "../../constants";

const HEADER_MAX_HEIGHT = 80;
const HEADER_MIN_HEIGHT = Platform.OS === "ios" ? 60 : 73;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shopInfo: {
        ShopKeeper: "Lalji Pandey",
        Img: "image-url",
        ShopId: "DAL004",
        ShopName: "Lalji Babu Kirana Store",
        Rating: "4.1",
        Review: "104",
        Tag: ["Grocery", "Food"],
        Adress: "8584 W Sherman Dr undefined Desoto, Oklahoma, India",
        opens: "9:00 AM",
        closes: "8:30 PM",
        Status: "Accepting List",
      },
      scrollY: new Animated.Value(
        // iOS has negative initial scroll value because content inset...
        Platform.OS === "ios" ? -HEADER_MAX_HEIGHT : 0
      ),
      refreshing: false,
    };
  }
  scrollX = new Animated.Value(0);

  renderIllustrations = (opacity, translate) => {
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
          <Animated.Image
            source={item.source}
            resizeMode="cover"
            style={[
              { width, height: height / 3, overflow: "visible" },
              styles.backgroundImage,
              {
                // opacity: opacity,
                // transform: [{ translateY: translate }],
              },
            ]}
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

  _renderScrollViewContent(imgOpa, imgTra) {
    return (
      <View style={stylesNew.scrollViewContent}>
        {this.renderIllustrations(imgOpa, imgTra)}
        {this.renderSteps()}
        <ShopProfileCard item={this.state.shopInfo} />
        <OrderList />
      </View>
    );
  }

  render() {
    const { navigation } = this.props;
    const { illustrations } = this.props;
    const scrollY = Animated.add(
      this.state.scrollY,
      Platform.OS === "ios" ? HEADER_MAX_HEIGHT : 0
    );
    const headerTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -HEADER_SCROLL_DISTANCE],
      extrapolate: "clamp",
    });

    const imageOpacity = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0],
      extrapolate: "clamp",
    });
    const imageTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 100],
      extrapolate: "clamp",
    });

    const titleScale = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0.8],
      extrapolate: "clamp",
    });
    const titleTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 0, -8],
      extrapolate: "clamp",
    });
    return (
      <View>
        <StatusBar
          translucent
          barStyle="light-content"
          backgroundColor="rgba(0, 0, 0, 0.251)"
        />
        <Animated.ScrollView
          scrollEventThrottle={1}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
            { useNativeDriver: true }
          )}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={() => {
                this.setState({ refreshing: true });
                setTimeout(() => this.setState({ refreshing: false }), 1000);
              }}
              progressViewOffset={HEADER_MAX_HEIGHT}
            />
          }
          contentInset={{
            top: HEADER_MAX_HEIGHT,
          }}
          contentOffset={{
            y: -HEADER_MAX_HEIGHT,
          }}
        >
          {this._renderScrollViewContent(imageOpacity, imageTranslate)}
        </Animated.ScrollView>
        <Animated.View
          pointerEvents="none"
          style={[
            stylesNew.header,
            { transform: [{ translateY: headerTranslate }] },
          ]}
        ></Animated.View>
        <Animated.View
          style={[
            stylesNew.bar,
            {
              transform: [
                // { scale: titleScale },
                { translateY: titleTranslate },
              ],
            },
          ]}
        >
          <View style={styles.nameBar}>
            <Button transparent onPress={() => navigation.goBack()}>
              <MaterialCommunityIconsIcon
                style={{ color: "rgba(255, 255, 255,0.9)", fontSize: 25 }}
                name="arrow-left"
              ></MaterialCommunityIconsIcon>
            </Button>
            <View style={styles.storeNameParent}>
              <Text style={styles.storeName}>
                {this.state.shopInfo.ShopName}
              </Text>
            </View>
          </View>
        </Animated.View>
      </View>
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

const stylesNew = StyleSheet.create({
  fill: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: theme.colors.primary,
    // opacity: 0.5,
    // overflow: "hidden",
    height: HEADER_MAX_HEIGHT,
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: HEADER_MAX_HEIGHT,
    resizeMode: "cover",
  },
  bar: {
    backgroundColor: "transparent",
    marginTop: Platform.OS === "ios" ? 28 : 38,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
  title: {
    color: "white",
    fontSize: 18,
  },
  scrollViewContent: {
    // iOS uses content inset, which acts like padding.
    paddingTop: Platform.OS !== "ios" ? HEADER_MAX_HEIGHT : 0,
  },
  row: {
    height: 40,
    margin: 16,
    backgroundColor: "#D3D3D3",
    alignItems: "center",
    justifyContent: "center",
  },
});
