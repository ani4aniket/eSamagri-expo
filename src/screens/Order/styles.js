import { StyleSheet, Dimensions } from "react-native";
import { theme } from "../../constants";
import Constants from "expo-constants";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  header: {},
  stepsContainer: {
    position: "absolute",
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
    flexDirection: "column",
    flex: 1,
    position: "absolute",
    left: 0,
    top: 0,

    width: width,
  },
});

export default styles;
