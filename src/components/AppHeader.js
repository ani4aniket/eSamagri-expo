import React, { Component } from "react";
import { View, TouchableOpacity, Image, StyleSheet, Alert } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import { Icon } from "native-base";
import { theme } from "../constants";
import Logo from "./Logo/Logo";
import WhatsappIcon from "./Logo/WhatsappIcon";

import PopupMenu from "./PopUp";
import { Button, Text } from "../components";

const AppHeader = (props) => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={[theme.colors.primary, theme.colors.primary]}
      style={styles.headerContainer}
    >
      <View style={styles.titleView}>
        {props.showBackIcon ? (
          <Icon
            type="Entypo"
            name="chevron-left"
            style={{ marginTop: 5, fontSize: 24, color: "white" }}
            onPress={() => {}}
          />
        ) : null}

        <Logo />
      </View>

      <View style={styles.profileView}>
        <TouchableOpacity onPress={() => {}}>
          <WhatsappIcon />
        </TouchableOpacity>

        {props.list ? (
          <Button style={styles.listBtn} onPress={() => {}}>
            <Text center bold color={theme.colors.black}>
              My Lists
            </Text>
          </Button>
        ) : null}
        {props.menu ? (
          <View>
            <PopupMenu actions={["Logout"]} onPress={() => {}} />
          </View>
        ) : (
          <TouchableOpacity style={styles.profileButton} onPress={() => {}}>
            <Image
              source={require("../../assets/images/avatar.png")}
              style={styles.profileImage}
            />
          </TouchableOpacity>
        )}
      </View>
    </LinearGradient>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    width: "100%",
    flex: 1,
    // height: 10,
  },
  titleView: {
    flexDirection: "row",
    width: "60%",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: "3%",
  },
  profileView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "40%",
  },
  titleText: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    marginLeft: "10%",
    fontFamily: "Poppins-Regular",
    marginBottom: "2%",
  },
  profileButton: {
    height: 35,
    width: 35,
    borderRadius: 35,
    backgroundColor: "#fff",
    marginLeft: "15%",
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: {
    height: "100%",
    width: "100%",
  },
  ml20: {
    marginLeft: "20%",
  },
  ml15: {
    marginLeft: "15%",
  },
  listBtn: {
    marginHorizontal: 10,
    height: 30,
    paddingHorizontal: 5,
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
});
