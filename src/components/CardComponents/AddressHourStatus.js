import React, { Component } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

import { theme } from "../../constants";

import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  FlatList,
} from "react-native";

class AddressHourStatus extends Component {
  render() {
    return (
      <>
        <View style={styles.row3_1}>
          <Text style={styles.text}>{this.props.item.Adress}</Text>
        </View>
        <View style={styles.row3_2}>
          <Text style={styles.text}>
            Hours: {this.props.item.Hours} Closes: {this.props.item.closes}
          </Text>
          <Text style={styles.text}>Status: {this.props.item.Status}</Text>
        </View>
      </>
    );
  }
}

export default AddressHourStatus;

const styles = StyleSheet.create({
  row3_2: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 11,
  },
});
