import React, { Component } from "react";
import { View, Text } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import { Button } from "native-base";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import PopupMenu from "../PopUp";

import styles from "./styles";
import { theme } from "../../constants";

class HeaderBack extends Component {
  onPopupEvent = (eventName, index) => {
    if (eventName !== "itemSelected") return;
    if (index === 0) this.props.navigation.navigate("Profile");
    if (index == 1) console.log(2);
    if (index == 2) console.log(3);
    //   else this.onRemove();
  };
  //   actions = (routename) => {
  //     if (routename == "Account")
  //       return ["Dashboard", "Share the app", "About Us"];
  //     if (routename == "Dashboard")
  //       return ["Account", "Share the app", "About Us"];
  //     else return ["Dashboard", "Account", "Share the app", "About Us"];
  //   };
  render() {
    const { navigation } = this.props;
    const { routename } = this.props;
    // console.log(routename);
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
          {/* <Button transparent style={styles.iconWrapper}>
            <EntypoIcon
              style={styles.icon}
              name="dots-three-vertical"
            ></EntypoIcon>
          </Button> */}
          <View style={styles.iconWrapper}>
            <PopupMenu
              actions={["User Profile", "Share the app", "About Us"]}
              onPress={this.onPopupEvent}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default HeaderBack;
