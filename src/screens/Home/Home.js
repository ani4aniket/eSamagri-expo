import React, { Component } from "react";
import { View, ImageBackground, SafeAreaView, ScrollView } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
} from "native-base";

import styles from "./styles";
import AlbumCard from "../../components/AlbumCard/AlbumCard";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [
        {
          id: 0,
          src: require("../../../assets/album_charlie.png"),
        },
        {
          id: 1,
          src: require("../../../assets/album_monkey.png"),
        },
        {
          id: 2,
          src: require("../../../assets/album_charlie.png"),
        },
        {
          id: 3,
          src: require("../../../assets/album_monkey.png"),
        },
        {
          id: 4,
          src: require("../../../assets/album_monkey.png"),
        },
        {
          id: 5,
          src: require("../../../assets/album_monkey.png"),
        },
        {
          id: 6,
          src: require("../../../assets/album_monkey.png"),
        },
      ],
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../../../assets/Search.png")}
          resizeMode="cover"
          style={styles.heroImage}
        >
          <Text style={styles.heroText}>New Releases</Text>
          <SafeAreaView>
            <ScrollView style={styles.scrollView} horizontal="true">
              <View style={styles.albums}>
                {this.state.albums.map((album) => (
                  <AlbumCard key={album.id} data={album.src} />
                ))}
              </View>
            </ScrollView>
          </SafeAreaView>
          <Card style={styles.cardBody}></Card>
        </ImageBackground>
      </View>
    );
  }
}

export default Home;
