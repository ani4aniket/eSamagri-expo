import React, { Component } from "react";
import { View, Text } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import { Button } from "native-base";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

import styles from "./styles";
class HeaderBack extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.header}>
        <View style={styles.header_container}>
          <Button
            transparent
            style={styles.iconWrapper}
            onPress={() => navigation.goBack()}
          >
            <MaterialCommunityIconsIcon
              style={styles.icon}
              name="arrow-left"
            ></MaterialCommunityIconsIcon>
          </Button>
          <Text style={styles.userProfile}>{this.props.heading}</Text>
          <Button transparent style={styles.iconWrapper}>
            <EntypoIcon
              style={styles.icon}
              name="dots-three-vertical"
            ></EntypoIcon>
          </Button>
        </View>
      </View>
    );
  }
}

export default HeaderBack;
