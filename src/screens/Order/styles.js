import { StyleSheet, Dimensions } from "react-native";
import { theme } from "../../constants";
import Constants from "expo-constants";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  statusBar: {
    marginTop: Constants.statusBarHeight,
    backgroundColor: "transparent",
  },
  header: {},
  stepsContainer: {
    bottom: theme.sizes.base * 3,
    right: 0,
    left: 0,
  },
  steps: {
    width: 5,
    height: 5,
    borderRadius: 5,
    marginHorizontal: 2.5,
  },
  photos: {
    // flex: 1,
    // position: "relative",
    // left: 0,
    // top: 0,
    // width: width,
  },
  nameBar: {
    flexDirection: "row",
    backgroundColor: "transparent",
    alignItems: "center",
  },
  storeName: {
    fontFamily: "Poppins-Regular",
    fontSize: 20,
    fontWeight: "bold",
    color: "rgb(255, 255, 255)",
  },
  storeNameParent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
