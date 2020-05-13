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

class Tag extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderTag = (Tag) => {
    return Tag.map((itm) => (
      <View style={styles.tag}>
        <Text style={styles.tagText}>{itm}</Text>
      </View>
    ));
  };
  render() {
    return <>{this.renderTag(this.props.item)}</>;
  }
}

export default Tag;

const styles = StyleSheet.create({
  tag: {
    backgroundColor: theme.colors.accent,
    marginRight: "2%",
    paddingHorizontal: "2%",
  },
  tagText: {
    color: theme.colors.white,
    fontFamily: "Poppins-Regular",
    fontSize: 10,
  },
});
