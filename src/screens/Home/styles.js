import { StyleSheet } from "react-native";
import Constants from "expo-constants";
const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#fff",
  },
  searchContainer: {
    marginTop: 0,
    paddingTop: 0,
  },
  searchBox: {
    marginHorizontal: "3%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 0,
    borderWidth: 0,
    height: 35,
  },
  searchInput: {
    width: "90%",
    fontSize: 15,
    fontFamily: "Poppins-Regular",
  },
  searchIcon: {
    marginHorizontal: "2%",
    color: "#C5CCD6",
  },
});

export default styles;
