import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";
import MovieScreen from "../screens/Movie";
import SearchScreen from "../screens/Search";
import { COLORS } from "../theme/colors";

const { Navigator, Screen } = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName={"SearchScreen"}
        screenOptions={{
          contentStyle: {
            backgroundColor: COLORS.oxfordBlue,
          },
        }}
      >
        <Screen
          name={"MovieScreen"}
          component={MovieScreen}
          options={{
            title: null,
            headerBackTitleVisible: false,
            headerTintColor: COLORS.sun,
            headerStyle: {
              backgroundColor: COLORS.spaceCadet,
              borderBottomWidth: 0,
              elevation: 0,
              shadowOpacity: 0,
            },
          }}
        />
        <Screen
          name={"SearchScreen"}
          component={SearchScreen}
          options={{
            header: () => null,
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
