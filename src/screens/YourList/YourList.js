import React, { Component } from "react";
import { View, Text, Image, ImageBackground, FlatList } from "react-native";
import { Card, Button } from "native-base";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/Feather";

import styles from "./styles";
import HeaderBack from "../../components/HeaderBack/HeaderBack";

const data = [
  {
    id: 1,
    ShopKeeper: "Rajesh Verma",
    ShopName: "Rajesh Kirana Store",
    Img: "image-url",
    TotalItems: "07",
    OrderNo: "#7887C",
    Time: "11:00, 08/05/20",
    Status: "Billing Pending",
  },
  {
    id: 2,
    ShopKeeper: "Laljee Bhai",
    ShopName: "LalJee Kirana Store",
    Img: "image-url",
    TotalItems: "15",
    OrderNo: "#0887C",
    Time: "21:00, 08/05/20",
    Status: "Order Packed",
  },
  {
    id: 3,
    ShopKeeper: "Rajesh Verma",
    ShopName: "Rajesh Kirana Store",
    Img: "image-url",
    TotalItems: "07",
    OrderNo: "#7887C",
    Time: "11:00, 08/05/20",
    Status: "Billing Pending",
  },
  {
    id: 4,
    ShopKeeper: "Laljee Bhai",
    ShopName: "LalJee Kirana Store",
    Img: "image-url",
    TotalItems: "15",
    OrderNo: "#0887C",
    Time: "21:00, 08/05/20",
    Status: "Order Packed",
  },
  {
    id: 5,
    ShopKeeper: "Rajesh Verma",
    ShopName: "Rajesh Kirana Store",
    Img: "image-url",
    TotalItems: "07",
    OrderNo: "#7887C",
    Time: "11:00, 08/05/20",
    Status: "Billing Pending",
  },
  {
    id: 6,
    ShopKeeper: "Laljee Bhai",
    ShopName: "LalJee Kirana Store",
    Img: "image-url",
    TotalItems: "15",
    OrderNo: "#0887C",
    Time: "21:00, 08/05/20",
    Status: "Order Packed",
  },
];

class YourList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <HeaderBack heading="Your List" navigation={navigation} />
        <View style={{ flex: 1 }}>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <Card style={styles.card} key={item.id}>
                <View style={styles.wrapper}>
                  <View style={styles.ownerContainer}>
                    <ImageBackground
                      source={require("../../../assets/profile.png")}
                      resizeMode="contain"
                      style={styles.image}
                      imageStyle={styles.image_imageStyle}
                    />
                  </View>
                  <View style={styles.orderContainer}>
                    <View style={styles.row1}>
                      <Text style={styles.shopName}>{item.ShopName}</Text>
                      <Button
                        transparent
                        style={styles.btn}
                        onPress={() => console.log("I'm pressed")}
                      >
                        <MaterialCommunityIconsIcon
                          name="close"
                          style={styles.iconClose}
                        ></MaterialCommunityIconsIcon>
                      </Button>
                    </View>
                    <View style={styles.row2}>
                      <View style={styles.col1}>
                        <Text style={styles.key}>Total Items</Text>
                        <Text style={styles.number}>{item.TotalItems}</Text>
                      </View>
                      <View style={styles.col2}>
                        <View style={styles.col2_row}>
                          <Text style={styles.key}>Time</Text>
                          <Text style={styles.value}>{item.Time}</Text>
                        </View>
                        <View style={styles.col2_row}>
                          <Text style={styles.key}>Status</Text>
                          <Text style={styles.value}>{item.Status}</Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.row3}>
                      <View style={styles.orderWrapper}>
                        <Text style={styles.order}>Order No - </Text>
                        <Text style={styles.orderNumber}>{item.OrderNo}</Text>
                      </View>
                      <Button
                        transparent
                        style={styles.btnContact}
                        onPress={() => console.log("I'm pressed")}
                      >
                        <Icon
                          name="phone-outgoing"
                          style={styles.iconClose}
                        ></Icon>
                        <Text style={styles.btn_text}>Call</Text>
                      </Button>
                    </View>
                  </View>
                </View>
              </Card>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    );
  }
}

export default YourList;
