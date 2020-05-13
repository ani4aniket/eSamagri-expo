import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Accordian from "./Accordian";
import { Colors } from "./colors";

export default class OrderList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [
        {
          title: "Oils and Ghee",
          data: [
            { key: "Mustard Oil", value: false },
            { key: "Refine Oil", value: false },
            { key: "Olive Oil", value: false },
          ],
        },
        {
          title: "Rice and Flour",
          data: [
            { key: "Basmati Rice", value: false },
            { key: "Aashirwad Aata", value: false },
            { key: "Loose Aata", value: false },
            { key: "Loose Rice", value: false },
          ],
        },
        {
          title: "Mixture and Namkeen",
          data: [
            { key: "Bikaji", value: false },
            { key: "Haldiram", value: false },
            { key: "Bikano", value: false },
            { key: "Mangal", value: false },
          ],
        },
        {
          title: "Pulses",
          data: [
            { key: "Toor Dal", value: false },
            { key: "Masoor Dal", value: false },
            { key: "Chana Dal", value: false },
            { key: "Moong Dal", value: false },
          ],
        },
        {
          title: "Pulses",
          data: [
            { key: "Toor Dal", value: false },
            { key: "Masoor Dal", value: false },
            { key: "Chana Dal", value: false },
            { key: "Moong Dal", value: false },
          ],
        },
        {
          title: "Pulses",
          data: [
            { key: "Toor Dal", value: false },
            { key: "Masoor Dal", value: false },
            { key: "Chana Dal", value: false },
            { key: "Moong Dal", value: false },
          ],
        },
        {
          title: "Pulses",
          data: [
            { key: "Toor Dal", value: false },
            { key: "Masoor Dal", value: false },
            { key: "Chana Dal", value: false },
            { key: "Moong Dal", value: false },
          ],
        },
        {
          title: "Pulses",
          data: [
            { key: "Toor Dal", value: false },
            { key: "Masoor Dal", value: false },
            { key: "Chana Dal", value: false },
            { key: "Moong Dal", value: false },
          ],
        },
      ],
    };
  }

  render() {
    return <View style={styles.container}>{this.renderAccordians()}</View>;
  }

  renderAccordians = () => {
    const items = [];
    for (item of this.state.menu) {
      items.push(<Accordian title={item.title} data={item.data} />);
    }
    return items;
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
});
