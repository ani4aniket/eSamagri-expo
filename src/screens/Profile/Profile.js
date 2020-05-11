import React, { Component } from "react";
import { View, Text, Image, ImageBackground, FlatList } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import Icon from "react-native-vector-icons/Entypo";
import Svg, { Ellipse } from "react-native-svg";
import { Card, CardItem, Body, Button } from "native-base";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

import styles from "./styles";
import HeaderBack from "../../components/HeaderBack/HeaderBack";

const data = [
  { id: 1, key: "Name", value: "Rajesh Verma" },
  { id: 2, key: "Birthday", value: "08 May, 1997" },
  { id: 3, key: "Mobile No", value: "+91-64789 24321" },
  { id: 4, key: "Gender", value: "Male" },
  { id: 5, key: "Email", value: "rajeshverma234@gmail.com" },
];
const itemdata = [
  { id: 1, key: "Shops Explored", value: "10" },
  { id: 2, key: "Lists Sent", value: "37	" },
  { id: 3, key: "Item Bought", value: "136" },
];

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const renderRow = data.map((item) => {
      return (
        <View style={styles.data_row} key={item.id}>
          <Text style={styles.key}>{item.key}</Text>
          <Text style={styles.value}>{item.value}</Text>
        </View>
      );
    });

    const renderCol = itemdata.map((item) => {
      return (
        <View style={styles.orderCol} key={item.id}>
          <Text style={styles.orderKey}>{item.key}</Text>
          <Text style={styles.orderValue}>{item.value}</Text>
        </View>
      );
    });

    return (
      <View style={styles.container}>
        <HeaderBack heading="User Profile" />
        <Text style={styles.heading}>Profile Picture</Text>

        <View style={styles.imgContainer}>
          <ImageBackground
            source={require("../../../assets/profile.png")}
            resizeMode="contain"
            style={styles.image}
            imageStyle={styles.image_imageStyle}
          />
        </View>

        <Button transparent onPress={() => console.log("I'm pressed")}>
          <View style={styles.camera}>
            <View style={styles.ellipseStack}>
              <Svg viewBox="0 0 33.54 33.54" style={styles.ellipse}>
                <Ellipse
                  strokeWidth={2}
                  fill="rgba(196,196,196,1)"
                  stroke="rgba(255,255,255,1)"
                  cx={17}
                  cy={17}
                  rx={16}
                  ry={16}
                />
              </Svg>
              <EntypoIcon name="camera" style={styles.icon} />
            </View>
          </View>
        </Button>

        <View style={styles.personalDetailsRow}>
          <Text style={styles.personalDetails}>Personal Details</Text>
          <Button transparent>
            <EntypoIcon name="edit" style={styles.iconEdit} />
          </Button>
        </View>
        <Card style={styles.card}>
          <CardItem>
            <Body>
              <View style={styles.data_table}>
                {renderRow}
                {/* <FlatList
                  data={data}
                  renderItem={({ item }) => {
                    return renderRow(item);
                  }}
                  keyExtractor={(item) => `${item.id}`}
                ></FlatList> */}
              </View>
            </Body>
          </CardItem>
        </Card>

        <Text style={styles.heading}>Order Summary</Text>
        <Card style={styles.card}>
          <View style={styles.orderContainer}>{renderCol}</View>
        </Card>

        <Text style={styles.heading}>Account Setting</Text>
        <Card style={styles.card}>
          <CardItem>
            <Body>
              <Text style={styles.changePassword}>Change Password</Text>
              <View style={styles.innerContainer}>
                <Text style={styles.passDescription}>
                  It’s Good Idea to use a strong Password that you’re not using
                  elsewhere
                </Text>
                <Button
                  transparent
                  style={styles.btn}
                  onPress={() => console.log("I'm pressed")}
                >
                  <Icon name="key" style={styles.iconKey}></Icon>
                  <Text style={styles.btn_text}>Change Password</Text>
                </Button>
              </View>
            </Body>
          </CardItem>
        </Card>
      </View>
    );
  }
}

export default Profile;
