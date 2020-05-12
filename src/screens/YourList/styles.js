import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: "#000000",
    borderWidth: 0,
  },
  card: {
    width: "100%",
    marginTop: "2%",
    alignSelf: "center",
    borderRadius: 5,
  },
  wrapper: {
    marginHorizontal: "3%",
    marginVertical: "1%",
    flexDirection: "row",
  },
  ownerContainer: {
    flex: 1,
    flexDirection: "column",
    alignSelf: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 100,
    borderColor: "#000000",
    borderWidth: 1,
    overflow: "hidden",
  },
  image_imageStyle: {
    width: 70,
    height: 70,
  },
  name: {
    fontWeight: "600",
    fontSize: 12,
    fontFamily: "Poppins-Regular",
    // alignSelf: "center",
  },
  orderContainer: {
    flex: 3,
  },
  shopName: {
    flex: 2,
    height: 25,
    fontSize: 17,
    fontFamily: "Poppins-Regular",
    fontWeight: "bold",
    marginTop: "2%",
  },
  row1: {
    flexDirection: "row",
    alignItems: "center",
    // marginHorizontal: "5%",
  },
  row2: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#000",
    borderWidth: 0.5,
    borderRadius: 5,
    marginVertical: "1%",
    paddingVertical: "1%",
  },
  col1: {
    flex: 5,
    alignItems: "center",
  },
  col2: {
    flex: 10,
    flexDirection: "column",
    marginLeft: "5%",
  },
  col2_row: {
    flexDirection: "row",
    width: "100%",
  },
  btn: {
    width: 26,
    height: 26,
    backgroundColor: "rgba(222,54,54,1)",
    borderRadius: 100,
    flexDirection: "row",
    alignSelf: "center",
  },
  iconClose: {
    marginLeft: "10%",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    alignSelf: "center",
  },
  btn_text: {
    height: 30,
    width: 70,
    fontWeight: "600",
    textAlignVertical: "center",
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    textAlign: "left",
    marginLeft: 10,
  },
  key: {
    flex: 2,
    fontFamily: "Poppins-Regular",
    alignSelf: "center",
    fontSize: 11,
  },
  value: {
    flex: 3,
    fontFamily: "Poppins-Regular",
    alignSelf: "flex-start",
    fontSize: 11,
  },
  number: {
    fontSize: 20,
    fontFamily: "Poppins-Regular",
    fontWeight: "bold",
    marginTop: "2%",
    marginHorizontal: "5%",
  },
  row3: {
    flexDirection: "row",
    marginTop: "1%",
  },
  orderWrapper: {
    flexDirection: "row",
    paddingHorizontal: "2%",
    borderColor: "#000",
    borderWidth: 0.5,
    borderRadius: 5,
    alignItems: "center",
    paddingVertical: "1%",
  },
  order: {
    fontFamily: "Poppins-Regular",
    fontSize: 11,
  },
  orderNumber: {
    fontSize: 15,
    fontFamily: "Poppins-Regular",
    fontWeight: "bold",
  },
  btnContact: {
    width: 80,
    height: 30,
    backgroundColor: "#5B7EFB",
    borderRadius: 100,
    flexDirection: "row",
    alignSelf: "center",
    marginLeft: "auto",
    // justifyContent: "flex-end",
  },
});

export default styles;
