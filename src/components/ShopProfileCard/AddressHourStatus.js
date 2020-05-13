import React, { Component } from "react";
import { theme } from "../../constants";

import { View, Text, StyleSheet } from "react-native";

class AddressHourStatus extends Component {
  render() {
    return (
      <>
        <View style={styles.row3_1}>
          <Text style={styles.text}>{this.props.item.Adress}</Text>
        </View>
        <View style={styles.row3_2}>
          <Text style={{ color: theme.colors.black, fontSize: 11 }}>
            {this.props.item.opens} - {this.props.item.closes}
          </Text>
          <Text style={{ fontSize: 11 }}>
            Status:{" "}
            <Text style={{ color: "green", fontWeight: "bold" }}>
              {this.props.item.Status}
            </Text>
          </Text>
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
    color: theme.colors.gray,
  },
});
