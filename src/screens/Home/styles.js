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
  header: {
    height: "35%",
    backgroundColor: "#e54b4b",
  },
  logo: {
    marginLeft: "2%",
  },
  whatsapp: {
    color: "#20b038",
  },
  listButton: {
    borderRadius: 25,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
});

export default styles;
