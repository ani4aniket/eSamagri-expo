import React, { Component } from "react";
import { View, Text, Image, StyleSheet, ImageBackground, FlatList } from "react-native";
import { Card, Button } from "native-base";
import Icon from "react-native-vector-icons/Feather";

import { theme } from "../../constants";

class ShopIdList extends Component {
  render() {
    return (
      <>
        <View style={styles.orderWrapper}>
          <Text style={styles.order}>Shop Id - </Text>
          <Text style={styles.orderNumber}>{this.props.item.ShopId}</Text>
        </View>
        <Button
          transparent
          style={styles.btnContact}
          onPress={() => console.log("I'm pressed")}
        >
          <Icon name="phone-outgoing" style={styles.iconCall}></Icon>
          <Text style={styles.btn_text}>Send List</Text>
        </Button>
      </>
    );
  }
}

export default ShopIdList;

const styles = StyleSheet.create({
  orderWrapper: {
    flexDirection: "row",
    paddingHorizontal: "2%",
    alignItems: "center",
    paddingVertical: "1%",
  },
  order: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
  },
  orderNumber: {
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    fontWeight: "bold",
  },
  btnContact: {
    width: 120,
    height: 30,
    backgroundColor: "#5B7EFB",
    borderRadius: 100,
    flexDirection: "row",
    alignSelf: "center",
    marginLeft: "auto",
    // justifyContent: "flex-end",
  },
  btn_text: {
    height: 30,
    width: 70,
    fontWeight: "600",
    textAlignVertical: "center",
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    textAlign: "left",
    // marginLeft: 10,
  },
  iconCall: {
    marginLeft: "10%",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    alignSelf: "center",
  },
});
