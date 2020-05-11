import React, { Component } from "react";
import { View, Text, Image, ImageBackground, FlatList } from "react-native";

import styles from "./styles";
import HeaderBack from "../../components/HeaderBack/HeaderBack";

const data = [
  {
    idx: 1,
    shopDetails: {
      ShopKeeper: "Rajesh Verma",
      ShopName: "Rajes Kirana Store",
      Img: "image-url",
    },
    orderDetails: [
      { id: 1, key: "Total Items", value: "15" },
      { id: 5, key: "Order No - ", value: "#7887C" },
      { id: 3, key: "Time", value: "11:00, 08 May 2020" },
      { id: 3, key: "Pickup", value: "9:00 - 12:00 AM" },
      { id: 6, key: "Status", value: "Billing Pending" },
    ],
  },
  {
    idx: 2,
    shopDetails: {
      ShopKeeper: "LalJi Verma",
      ShopName: "LalJee Kirana Store",
      Img: "image-url",
    },
    orderDetails: [
      { id: 1, key: "Total Items", value: "15" },
      { id: 5, key: "Order No - ", value: "#7887C" },
      { id: 3, key: "Time", value: "14:00, 08 May 2020" },
      { id: 3, key: "Pickup", value: "3:00 - 6:00 AM" },
      { id: 6, key: "Status", value: "Billing Pending" },
    ],
  },
];

class YourList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const renderRow = data.map((item) => {
      return <View style={styles.data_row} key={item.id}></View>;
    });

    return (
      <View style={styles.container}>
        <HeaderBack heading="Your List" />
      </View>
    );
  }
}

export default YourList;
