import React from "react";
import {
  StyleSheet,
  Button,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  ActivityIndicator,
  TextInput,
  Alert,
} from "react-native";
import {
  MaterialIcons,
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItemsIsLoading: false,
      cartItems: [
        {
          itemId: "1",
          name: "Fortune Everyday Basmati",
          thumbnailImage:
            "https://rukminim1.flixcart.com/image/612/612/k7assy80/rice/6/3/y/1-white-everyday-basmati-rice-pouch-fortune-original-imafpkaetxutpbt6.jpeg?q=70",
          type: "Rice",
          qty: 0,
          salePrice: "105",
          checked: 0,
        },
        {
          itemId: "2",
          name: "Tata Salt",
          thumbnailImage:
            "https://rukminim1.flixcart.com/image/612/612/jq4353k0/salt/q/w/m/1-na-iodized-salt-tata-original-imafc7agxkbypvgr.jpeg?q=70",
          qty: 0,
          type: "Table Salt",
          salePrice: "19",
          checked: 0,
        },
        {
          itemId: "3",
          name: "Madhur Sugar",
          thumbnailImage:
            "https://rukminim1.flixcart.com/image/612/612/jx3kn0w0/sugar/n/g/m/1-na-pouch-white-sugar-madhur-crystal-original-imafhmq6h7eznxdc.jpeg?q=70",
          qty: 0,
          type: "Sugar",
          salePrice: "27.99",
          checked: 0,
        },
        {
          itemId: "4",
          name: "Bournvita",
          thumbnailImage:
            "https://rukminim1.flixcart.com/image/612/612/k6s82vk0/energy-sport-drink-mix/g/e/x/750-health-drink-cadbury-bournvita-original-imafp669zzf9drjf.jpeg?q=70",
          type: "Nutrition Drink",
          qty: 0,
          salePrice: "129.99",
          checked: 0,
        },
        {
          itemId: "5",
          name: "Toor Dal",
          thumbnailImage:
            "https://rukminim1.flixcart.com/image/612/612/j8rnpu80/pulses/q/g/w/500-toor-dal-arhar-dal-desi-arhar-dal-un-branded-original-imaeymjgrjw8xgvw.jpeg?q=70",
          qty: 0,
          type: "Pulses",
          salePrice: "69",
          checked: 0,
        },
      ],
    };
  }

  selectHandler = (index, value) => {
    const newItems = [...this.state.cartItems];
    newItems[index]["checked"] = value == 1 ? 0 : 1;
    this.setState({ cartItems: newItems });
  };

  quantityHandler = (action, index) => {
    const newItems = [...this.state.cartItems];

    let currentQty = newItems[index]["qty"];

    if (action == "more") {
      newItems[index]["qty"] = currentQty + 1;
    } else if (action == "less") {
      newItems[index]["qty"] = currentQty > 1 ? currentQty - 1 : 0;
    }

    this.setState({ cartItems: newItems });
  };

  render() {
    const { cartItems, cartItemsIsLoading } = this.state;

    return (
      <View style={{ flex: 1, backgroundColor: "#f6f6f6" }}>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#fff",
            marginBottom: 10,
            backgroundColor: "#5B7EFB",
          }}
        >
          <View style={[styles.centerElement, { width: 50, height: 50 }]}>
            <Ionicons name="ios-cart" size={25} color="#fff" />
          </View>
          <View style={[styles.centerElement, { height: 50 }]}>
            <Text style={{ fontSize: 18, color: "#fff" }}>
              Select Brand and Quantity
            </Text>
          </View>
        </View>

        {cartItemsIsLoading ? (
          <View style={[styles.centerElement, { height: 300 }]}>
            <ActivityIndicator size="large" color="#ef5739" />
          </View>
        ) : (
          <ScrollView>
            {cartItems &&
              cartItems.map((item, i) => (
                <View
                  key={i}
                  style={{
                    flexDirection: "row",
                    backgroundColor: "#fff",
                    marginBottom: 2,
                    height: 120,
                    paddingHorizontal: "5%",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      flexGrow: 1,
                      flexShrink: 1,
                      alignSelf: "center",
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => {
                        /*this.props.navigation.navigate('ProductDetails', {productDetails: item})*/
                      }}
                      style={{ paddingRight: 10 }}
                    >
                      <Image
                        source={{ uri: item.thumbnailImage }}
                        style={[
                          styles.centerElement,
                          { height: 60, width: 60, backgroundColor: "#eeeeee" },
                        ]}
                      />
                    </TouchableOpacity>
                    <View
                      style={{
                        flexGrow: 1,
                        flexShrink: 1,
                        alignSelf: "center",
                      }}
                    >
                      <Text numberOfLines={1} style={{ fontSize: 15 }}>
                        {item.name}
                      </Text>
                      <Text numberOfLines={1} style={{ color: "#8f8f8f" }}>
                        {item.type ? "Category: " + item.type : ""}
                      </Text>
                      <View style={{ paddingRight: 20, width: "70%" }}>
                        <TextInput
                          style={{
                            paddingHorizontal: 10,
                            backgroundColor: "#f0f0f0",
                            height: 25,
                            borderRadius: 4,
                            marginVertical: 5,
                          }}
                          placeholder="Enter quantity (kg/g)"
                          value={""}
                          onChangeText={(searchKeyword) => {}}
                        />
                      </View>
                      <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity
                          onPress={() => this.quantityHandler("less", i)}
                          style={{
                            backgroundColor: "#5B7EFB",
                            borderRadius: 25,
                          }}
                        >
                          <MaterialIcons name="remove" size={22} color="#fff" />
                        </TouchableOpacity>
                        <Text
                          style={[
                            {
                              paddingHorizontal: 7,
                              paddingTop: 3,
                              fontSize: 13,
                            },
                            item.qty > 0
                              ? { color: "#000" }
                              : { color: "#bbbbbb" },
                          ]}
                        >
                          {item.qty}
                        </Text>
                        <TouchableOpacity
                          onPress={() => this.quantityHandler("more", i)}
                          style={{
                            backgroundColor: "#5B7EFB",
                            borderRadius: 25,
                          }}
                        >
                          <MaterialIcons name="add" size={22} color="#fff" />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              ))}
          </ScrollView>
        )}

        {!cartItemsIsLoading && (
          <View
            style={{
              backgroundColor: "#fff",
              borderTopWidth: 2,
              borderColor: "#f6f6f6",
              paddingVertical: 5,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                height: 32,
                paddingRight: 20,
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={[
                  styles.centerElement,
                  {
                    backgroundColor: "#5B7EFB",
                    width: 100,
                    height: 25,
                    borderRadius: 5,
                  },
                ]}
                onPress={this.props.done}
              >
                <Text style={{ color: "#ffffff" }}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    );
  }
}

export default Cart;

const styles = StyleSheet.create({
  centerElement: { justifyContent: "center", alignItems: "center" },
});
