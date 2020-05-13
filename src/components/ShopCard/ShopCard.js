import React, { Component } from "react";
import { View, Text, Image, ImageBackground, FlatList } from "react-native";
import { Card, Button } from "native-base";

import styles from "./styles";
import Profile from "../../components/CardComponents/Profile";
import NameRating from "../../components/CardComponents/NameRating";
import Tag from "../../components/CardComponents/Tag";
import AddressHourStatus from "../../components/CardComponents/AddressHourStatus";
import ShopIdList from "../../components/CardComponents/ShopIdList";

class ShopCard extends Component {
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
            <View style={styles.row4}>
              <ShopIdList item={this.props.item} />
            </View>
          </View>
        </View>
      </Card>
    );
  }
}

export default ShopCard;
