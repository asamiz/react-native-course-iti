import { StyleSheet } from "react-native";
import { COLORS } from "../../theme/colors";
import { FONTS } from "../../theme/fonts";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 160,
    backgroundColor: COLORS.spaceCadet,
    marginTop: 100,
    borderRadius: 12,
    // ios
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    // android
    elevation: 8,
  },
  leftView: {
    width: "40%",
  },
  rightView: {
    width: "60%",
  },
  image: {
    position: "absolute",
    bottom: 30,
    left: 5,
    width: 130,
    height: 190,
    zIndex: 99,
    borderRadius: 16,
  },
  movieName: {
    color: COLORS.white,
    fontFamily: FONTS.semiBold,
    fontSize: 16,
    marginBottom: 4,
  },
  releaseDate: {
    color: COLORS.white,
    fontFamily: FONTS.medium,
    fontSize: 12,
  },
});
