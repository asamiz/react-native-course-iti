import { StyleSheet } from "react-native";
import { COLORS } from "../../theme/colors";
import { FONTS } from "../../theme/fonts";

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.spaceCadet,
    borderLeftWidth: 3,
    borderLeftColor: COLORS.sun,
    padding: 12,
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    color: COLORS.white,
    marginBottom: 8,
    fontFamily: FONTS.semiBold,
  },
  body: {
    fontFamily: FONTS.medium,
    color: COLORS.white,
    fontSize: 14,
  },
});
