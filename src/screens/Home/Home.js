import React, { Component } from "react";

import {
  Image,
  StatusBar,
  KeyboardAvoidingView,
  TextInput,
  ScrollView,
  Dimensions,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

import Constants from "expo-constants";

import AppHeader from "../../components/AppHeader";
import { Block, Card, Badge, Button, Text } from "../../components";
import { theme } from "../../constants";
import ShopCard from "../../components/ShopCard/ShopCard";

import styles from "./styles";
import Icon from "react-native-vector-icons/MaterialIcons";

const { width } = Dimensions.get("window");

const data = [
  {
    id: 1,
    ShopKeeper: "Rajesh Verma",
    Img: "image-url",
    ShopId: "DAL754",
    ShopName: "Rajesh Kirana Store",
    Rating: "4.5",
    Review: "210",
    Tag: ["Grocery", "Food", "Sweets"],
    Adress: "8584 W Sherman Dr undefined Desoto, Oklahoma, India",
    Hours: "open",
    closes: "8:30 PM",
    Status: "NOT Accepting List",
  },
  {
    id: 2,
    ShopKeeper: "Lalji Pandey",
    Img: "image-url",
    ShopId: "DAL004",
    ShopName: "Lalji Babu Kirana Store",
    Rating: "4.1",
    Review: "104",
    Tag: ["Grocery", "Food"],
    Adress: "8584 W Sherman Dr undefined Desoto, Oklahoma, India",
    Hours: "open",
    closes: "8:30 PM",
    Status: "Accepting List",
  },
  {
    id: 3,
    ShopKeeper: "Rajesh Verma",
    Img: "image-url",
    ShopId: "DAL754",
    ShopName: "Rajesh Kirana Store",
    Rating: "4.5",
    Review: "210",
    Tag: ["Grocery", "Food", "Sweets"],
    Adress: "8584 W Sherman Dr undefined Desoto, Oklahoma, India",
    Hours: "open",
    closes: "8:30 PM",
    Status: "NOT Accepting List",
  },
  {
    id: 4,
    ShopKeeper: "Lalji Pandey",
    Img: "image-url",
    ShopId: "DAL004",
    ShopName: "Lalji Babu Kirana Store Hello there how ",
    Rating: "4.1",
    Review: "104",
    Tag: ["Grocery", "Food"],
    Adress: "8584 W Sherman Dr undefined Desoto, Oklahoma, India",
    Hours: "open",
    closes: "8:30 PM",
    Status: "Accepting List",
  },
  {
    id: 5,
    ShopKeeper: "Rajesh Verma",
    Img: "image-url",
    ShopId: "DAL754",
    ShopName: "Rajesh Kirana Store",
    Rating: "4.5",
    Review: "210",
    Tag: ["Grocery", "Food", "Sweets"],
    Adress: "8584 W Sherman Dr undefined Desoto, Oklahoma, India",
    Hours: "open",
    closes: "8:30 PM",
    Status: "NOT Accepting List",
  },
  {
    id: 6,
    ShopKeeper: "Lalji Pandey",
    Img: "image-url",
    ShopId: "DAL004",
    ShopName: "Lalji Babu Kirana Store",
    Rating: "4.1",
    Review: "104",
    Tag: ["Grocery", "Food"],
    Adress: "8584 W Sherman Dr undefined Desoto, Oklahoma, India",
    Hours: "open",
    closes: "8:30 PM",
    Status: "Accepting List",
  },
];

class Home extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 0}
      >
        <View style={styles.statusBar}></View>
        <AppHeader menu={true} list navigation={navigation} />
        <View style={styles.searchBox}>
          <View style={styles.wrapper}>
            <Icon name="search" size={20} style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search Local Shops"
            />
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <FlatList
            contentInset={{ top: 0, bottom: 20, left: 0, right: 0 }}
            contentInsetAdjustmentBehavior="automatic"
            data={data}
            renderItem={({ item }) => <ShopCard item={item} />}
            keyExtractor={(item) => item.id}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default Home;
