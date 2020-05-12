import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: "#000000",
    borderWidth: 0,
  },
  heading: {
    width: "100%",
    height: 25,
    color: "#121212",
    fontSize: 17,
    fontFamily: "Poppins-Regular",
    fontWeight: "bold",
    marginTop: "2%",
    marginHorizontal: "5%",
  },
  personalDetailsRow: {
    marginHorizontal: "5%",
    marginVertical: 1,
    flexDirection: "row",
    width: "100%",
  },
  personalDetails: {
    color: "#121212",
    fontSize: 17,
    fontWeight: "bold",
    fontFamily: "Poppins-Regular",
    marginTop: 2,
  },
  edit: {
    marginLeft: "5%",
    marginTop: -10,
  },
  iconEdit: {
    color: "rgba(82,113,194,1)",
    fontSize: 17,
  },
  imgContainer: {
    width: "100%",
  },
  image: {
    width: 144,
    height: 144,
    borderRadius: 100,
    borderColor: "#000000",
    borderWidth: 1,
    marginTop: "2%",
    alignSelf: "center",
    overflow: "hidden",
  },
  image_imageStyle: {
    width: 142,
    height: 142,
  },
  camera: {
    width: 34,
    height: 34,
    marginTop: -30,
    marginLeft: "55%",
  },
  ellipse: {
    width: 34,
    height: 34,
    position: "absolute",
  },
  icon: {
    top: 9,
    left: 8,
    position: "absolute",
    color: "rgba(0,0,0,1)",
    fontSize: 17,
  },
  ellipseStack: {
    width: 34,
    height: 34,
  },
  card: {
    width: "90%",
    marginTop: 1,
    marginHorizontal: "5%",
    alignSelf: "center",
    borderRadius: 5,
  },
  data_table: {
    marginHorizontal: "5%",
    marginVertical: "1%",
    textAlign: "center",
  },
  data_row: {
    width: "100%",
    height: 20,
    flexDirection: "row",
  },
  key: {
    flex: 2,
    fontWeight: "600",
    fontSize: 12,
    fontFamily: "Poppins-Regular",
    color: "#828282",
  },
  value: {
    flex: 5,
    fontSize: 12,
    fontFamily: "Poppins-Regular",
  },

  orderContainer: {
    marginHorizontal: "5%",
    marginVertical: "2%",
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
  },
  orderCol: {
    flex: 1,
    flexDirection: "column",
    alignSelf: "center",
    marginBottom: "3%",
  },
  orderKey: {
    fontWeight: "600",
    fontSize: 12,
    fontFamily: "Poppins-Regular",
    alignSelf: "center",
    color: "#828282",
  },
  orderValue: {
    fontSize: 17,
    fontFamily: "Poppins-Regular",
    fontWeight: "bold",
    alignSelf: "center",
  },

  changePassword: {
    width: "100%",
    height: 20,
    fontWeight: "600",
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    marginVertical: "2%",
  },
  innerContainer: {
    width: "100%",
    flexDirection: "row",
    marginLeft: "5%",
  },
  passDescription: {
    flex: 1,
    color: "#828282",
    fontSize: 12,
  },
  btn: {
    width: 100,
    height: 30,
    backgroundColor: "rgba(222,54,54,1)",
    borderRadius: 10,
    flexDirection: "row",
    alignSelf: "center",
    marginHorizontal: "5%",
  },
  iconKey: {
    marginLeft: 5,
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    height: 20,
    width: "20%",
  },
  btn_text: {
    height: 30,
    width: "80%",
    textAlignVertical: "center",
    color: "rgba(255,255,255,1)",
    fontSize: 12,
    marginLeft: "7%",
    fontFamily: "Poppins-Regular",
    textAlign: "center",
  },
});

export default styles;
