import React, { Component } from "react";
import { View, TouchableOpacity, Image, StyleSheet, Alert } from "react-native";
import { Button } from "native-base";

import { LinearGradient } from "expo-linear-gradient";

import { Icon } from "native-base";
import { theme } from "../constants";
import Logo from "./Logo/Logo";
import WhatsappIcon from "./Logo/WhatsappIcon";

import PopupMenu from "./PopUp";
import { Text } from "../components";

const AppHeader = (props) => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={[theme.colors.primary, theme.colors.primary]}
      style={styles.headerContainer}
    >
      <View style={styles.titleView}>
        <Logo />
      </View>

      <View style={styles.profileView}>
        <TouchableOpacity style={styles.whatsapp} onPress={() => {}}>
          <WhatsappIcon />
        </TouchableOpacity>
        <Button
          style={styles.btn}
          transparent
          onPress={() => {
            props.navigation.navigate("YourList");
          }}
        >
          <View style={styles.listBtn}>
            <Text style={styles.text}>My Lists</Text>
          </View>
        </Button>
        <View style={styles.popupMenu}>
          <PopupMenu
            actions={["Your Profile", "Share the app", "About Us"]}
            onPress={() => {
              console.log("hihi");
            }}
          />
        </View>
      </View>
    </LinearGradient>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    paddingVertical: "1%",
  },
  titleView: {
    flex: 10,
    justifyContent: "flex-start",
    paddingLeft: "3%",
  },
  profileView: {
    flex: 6,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  whatsapp: {
    justifyContent: "flex-start",
    flex: 1,
  },
  btn: {
    flex: 2,
  },
  listBtn: {
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 25,
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  text: {
    fontWeight: "bold",
    color: theme.colors.black,
    marginHorizontal: "12%",
    marginVertical: "7%",
  },
});
