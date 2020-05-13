import React, { Component } from "react";
import { View, Text, Image, ImageBackground, FlatList } from "react-native";
import { Card, Button } from "native-base";

import styles from "./styles";
import Profile from "../../components/CardComponents/Profile";
import NameRating from "../../components/CardComponents/NameRating";
import Tag from "../../components/CardComponents/Tag";
import AddressHourStatus from "../../components/CardComponents/AddressHourStatus";
import ShopIdList from "../../components/CardComponents/ShopIdList";

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

class ShopCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Card style={styles.card} key={item.id}>
            <View style={styles.wrapper}>
              <View style={styles.ownerContainer}>
                <Profile item={item} />
              </View>
              <View style={styles.orderContainer}>
                <View style={styles.row1}>
                  <NameRating item={item} />
                </View>
                <View style={styles.row2}>
                  <Tag item={item.Tag}></Tag>
                </View>
                <View style={styles.row3}>
                  <AddressHourStatus item={item} />
                </View>
                <View style={styles.row4}>
                  <ShopIdList item={item} />
                </View>
              </View>
            </View>
          </Card>
        )}
        keyExtractor={(item) => item.id}
      />
    );
  }
}

export default ShopCard;
