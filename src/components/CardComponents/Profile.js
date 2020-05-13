import React, { Component } from "react";
import { View, Text, Image, StyleSheet, ImageBackground, FlatList } from "react-native";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <ImageBackground
          source={require("../../../assets/profile.png")}
          resizeMode="contain"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        />
        <Text style={styles.name}>{this.props.item.ShopKeeper}</Text>
      </>
    );
  }
}

export default Profile;

const styles = StyleSheet.create({
  
  image: {
    width: 70,
    height: 70,
    borderRadius: 100,
    overflow: "hidden",
  },
  image_imageStyle: {
    width: 70,
    height: 70,
  },
  name: {
    fontWeight: "600",
    fontSize: 12,
    fontFamily: "Poppins-Regular",
    marginTop: "5%",
  },
});
