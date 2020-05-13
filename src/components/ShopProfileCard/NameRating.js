import React, { Component } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  FlatList,
} from "react-native";
import { theme } from "../../constants";

class NameRating extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.row1}>
        <Text style={styles.shopName}>{this.props.item.ShopName}</Text>
        <View style={styles.rating}>
          <Text style={styles.ratingText}>{this.props.item.Rating}</Text>
          <Ionicons name="md-star" style={styles.iconStar} />
          <Text style={styles.ratingText}> | {this.props.item.Review}</Text>
        </View>
      </View>
    );
  }
}

export default NameRating;

const styles = StyleSheet.create({
  row1: {
    flexDirection: "row",
    alignItems: "center",
    // marginHorizontal: "5%",
  },
  shopName: {
    flex: 2,
    height: 25,
    fontSize: 15,
    flexWrap: "wrap",
    fontFamily: "Poppins-Medium",
    marginTop: "2%",
  },
  rating: {
    width: 70,
    height: 22,
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: "2%",
  },
  ratingText: {
    color: "#fff",
    fontSize: 12,
  },
  iconStar: {
    color: "rgba(255,255,255,1)",
    fontSize: 15,
  },
});
