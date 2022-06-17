import { StyleSheet } from "react-native";
import { COLORS } from "../../theme/colors";
import { FONTS } from "../../theme/fonts";

export default StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: COLORS.spaceCadet,
    height: 45,
    marginVertical: 16,
    borderRadius: 8,
    overflow: "hidden",
  },
  input: {
    height: "100%",
    width: "70%",
    color: COLORS.white,
    fontSize: 16,
    paddingStart: 10,
    fontFamily: FONTS.medium,
  },
});
