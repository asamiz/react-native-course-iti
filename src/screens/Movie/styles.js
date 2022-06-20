import { StyleSheet } from "react-native";
import { COLORS } from "../../theme/colors";
import { FONTS } from "../../theme/fonts";

export default StyleSheet.create({
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.spaceCadet,
    padding: 16,
    marginBottom: 8,
  },
  activityIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: COLORS.white,
    fontSize: 14,
    fontFamily: FONTS.semiBold,
  },
  shortInfoText: {
    color: COLORS.white,
    fontFamily: FONTS.regular,
    fontSize: 12,
    marginTop: 6,
  },
  image: {
    width: 140,
    height: 200,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.sun,
    marginRight: 16,
  },
  ratingsContainer: {
    backgroundColor: COLORS.spaceCadet,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 8,
  },
  ratingContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
    paddingVertical: 16,
  },
  sourceText: {
    color: COLORS.sun,
    fontSize: 12,
    fontFamily: FONTS.semiBold,
    textAlign: "center",
  },
  ratingText: {
    color: COLORS.white,
    textAlign: "center",
    marginTop: 4,
    fontFamily: FONTS.medium,
  },
  contentContainer: {
    paddingBottom: 20,
  },
  topInfoContainer: {
    width: "50%",
  },
});
