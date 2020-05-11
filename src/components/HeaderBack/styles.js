import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "10%",
    backgroundColor: "#5B7EFB",
  },
  header_container: {
    flexDirection: "row",
    marginHorizontal: "2%",
    marginVertical: "8%",
  },
  userProfile: {
    flex: 12,
    height: 20,
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    fontFamily: "Poppins-Regular",
    textAlign: "left",
    marginLeft: "5%",
    marginTop: "2%",
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
  },
  iconWrapper: {
    flex: 1,
  },
});

export default styles;
