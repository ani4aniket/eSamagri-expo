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
  TouchableOpacity,
} from "react-native";

import Constants from "expo-constants";

import AppHeader from "../../components/AppHeader";
import { Block, Card, Badge, Button, Text } from "../../components";
import { theme } from "../../constants";

import styles from "./styles";
import Icon from "react-native-vector-icons/MaterialIcons";

const { width } = Dimensions.get("window");

class Home extends Component {
  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 0}
      >
        <View
          style={{
            height: "13%",
            backgroundColor: theme.colors.primary,
            paddingTop: "3%",
          }}
        >
          <AppHeader menu={true} list />
          <View style={styles.searchBox}>
            <Icon name="search" size={20} style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search Local Shops"
            />
          </View>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ paddingVertical: theme.sizes.base * 2 }}
        >
          <Block style={stylesNew.categories}>
            {[1, 2, 2, 2, 2, 2, 2, 2].map((category) => (
              <TouchableOpacity onPress={() => {}}>
                <Card shadow style={stylesNew.category}>
                  <Text>ahjfakjkjakaniakejkjrkajejr ae akjekajkejeakk</Text>
                </Card>
              </TouchableOpacity>
            ))}
          </Block>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

export default Home;

const stylesNew = StyleSheet.create({
  categories: {
    flex: 1,
    justifyContent: "center",
    flexWrap: "wrap",
    width: "80%",
    paddingHorizontal: theme.sizes.base * 2,
    marginBottom: theme.sizes.base * 3.5,
  },
  category: {
    // this should be dynamic based on screen width
    // minWidth: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
    // maxWidth: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    // maxHeight: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
  },
});
