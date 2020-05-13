import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import { theme } from "../../constants";
const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    backgroundColor: "#fff",
  },
  searchBox: {
    backgroundColor: theme.colors.primary,
    flexDirection: "row",
    alignItems: "center",
  },
  wrapper: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginHorizontal: "2%",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: "2%",
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    fontFamily: "Poppins-Regular",
    paddingVertical: "1%",
  },
  searchIcon: {
    marginLeft: "5%",
    color: "#C5CCD6",
  },
  placeholder: {
    backgroundColor: "red",
    justifyContent: "center",
  },
});

export default styles;
