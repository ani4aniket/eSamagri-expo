import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  heroImage: {
    width: "100%",
    height: "100%",
  },
  cardBody: {
    minHeight: "80%",
    marginTop: "10%",
    borderRadius: 40,
  },
  heroText: {
    fontFamily: "Poppins-Regular",
    color: "#f4f4f4",
    marginTop: "15%",
    marginHorizontal: "5%",
  },
  albums: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: "5%",
    marginTop: "7%",
  },
});

export default styles;
