import { StyleSheet } from "react-native";
import { theme } from "../../constants";

const styles = StyleSheet.create({
  card: {
    width: "100%",
    borderRadius: 0,
  },
  wrapper: {
    flexDirection: "row",
  },
  ownerContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  orderContainer: {
    flex: 3,
  },

  row2: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: "1%",
    paddingVertical: "1%",
  },

  row3: {
    paddingVertical: "2%",
    // flexDirection:
  },
  row4: {
    flexDirection: "row",
  },
});

export default styles;
