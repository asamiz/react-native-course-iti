import { StyleSheet } from "react-native";
import { COLORS } from "../../theme/colors";

export default StyleSheet.create({
  container: {
    // backgroundColor: COLORS.oxfordBlue,
    flex: 1,
  },
  searchBtn: {
    height: "100%",
    width: "20%",
    alignItems: "center",
    justifyContent: "center",
    borderStartWidth: 1,
    borderStartColor: COLORS.sun,
    backgroundColor: COLORS.cloudBurst,
  },
  activityIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  stickySearchBar: {
    paddingHorizontal: 16,
  },
  contentContainer: {
    paddingHorizontal: 16,
  },
});
