import { StyleSheet } from "react-native";
import { COLORS } from "../../theme/colors";
import { FONTS } from "../../theme/fonts";

export default StyleSheet.create({
  container: {},
  title: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: FONTS.semiBold,
  },
  border: {
    height: 2,
    backgroundColor: COLORS.sun,
    width: "33%",
    marginTop: 8,
  },
});
