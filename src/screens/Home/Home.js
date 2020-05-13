import React, { Component } from "react";
import {
  KeyboardAvoidingView,
  TextInput,
  Dimensions,
  View,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Constants from "expo-constants";

import AppHeader from "../../components/AppHeader";
import { Block, Card, Badge, Button, Text } from "../../components";
import ShopCard from "../../components/ShopCard/ShopCard";
import styles from "./styles";

const { width } = Dimensions.get("window");

class Home extends Component {
  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 0}
      >
        <AppHeader menu={true} list />
        <View style={styles.searchBox}>
          <View style={styles.wrapper}>
            <Icon name="search" size={20} style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search Local Shops"
            />
          </View>
        </View>
        <ShopCard />
      </KeyboardAvoidingView>
    );
  }
}

export default Home;
