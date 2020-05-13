import React, { Component } from "react";
import { View, Text, Image, ImageBackground, FlatList } from "react-native";
import { Button } from "native-base";

import styles from "./styles";
import Profile from "./Profile";
import NameRating from "./NameRating";
import Tag from "./Tag";
import AddressHourStatus from "./AddressHourStatus";
import ShopIdList from "./ShopIdList";
import Card from "../Card";

class ShopProfileCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Card style={styles.card} key={this.props.item.id}>
        <View style={styles.wrapper}>
          <View style={styles.ownerContainer}>
            <Profile item={this.props.item} />
          </View>
          <View style={styles.orderContainer}>
            <View style={styles.row1}>
              <NameRating item={this.props.item} />
            </View>
            <View style={styles.row2}>
              <Tag item={this.props.item.Tag}></Tag>
            </View>
            <View style={styles.row3}>
              <AddressHourStatus item={this.props.item} />
            </View>
            {/* <View style={styles.row4}>
              <ShopIdList item={this.props.item} />
            </View> */}
          </View>
        </View>
      </Card>
    );
  }
}

export default ShopProfileCard;
