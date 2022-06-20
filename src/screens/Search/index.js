import {
  View,
  Pressable,
  ActivityIndicator,
  FlatList,
  ScrollView,
  Text,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Header } from "../../components/Header";
import { Input } from "../../components/SearchBar";
import styles from "./styles";
import { COLORS } from "../../theme/colors";
import { useState } from "react";
import { getMoviesList } from "../../api/movies";
import { MovieCard } from "../../components/MovieCard";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FONTS } from "../../theme/fonts";
import { useDispatch, useSelector } from "react-redux";
import { storeMovie } from "../../store/actions";

const SearchScreen = () => {
  const [value, setValue] = useState();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);

  const onPressSearch = async () => {
    setLoading(true);
    const data = await getMoviesList({ searchValue: value });
    setData(data);
    setLoading(false);
  };

  const onChangeText = (val) => {
    setValue(val);
  };

  const renderItem = ({ item }) => {
    return (
      <MovieCard
        data={item}
        onPress={() => {
          dispatch(storeMovie(item));
          navigation.navigate("MovieScreen", {
            id: item.imdbID,
          });
        }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.stickySearchBar}>
        <Input
          value={value}
          onChangeText={onChangeText}
          right={
            <Pressable onPress={onPressSearch} style={styles.searchBtn}>
              <FontAwesome name="search" size={24} color={COLORS.sun} />
            </Pressable>
          }
        />
        <Header title={value !== "" ? "Search Results" : "Recent Searches"} />
      </View>
      {loading ? (
        <ActivityIndicator
          color={COLORS.sun}
          size={"large"}
          style={styles.activityIndicator}
        />
      ) : (
        <FlatList
          data={value !== "" ? data : state.movies}
          renderItem={renderItem}
          contentContainerStyle={styles.contentContainer}
          ListEmptyComponent={
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 100,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: COLORS.hitGrey,
                  fontFamily: FONTS.medium,
                }}
              >
                {"No Search Results Found!"}
              </Text>
            </View>
          }
        />
      )}
    </SafeAreaView>
  );
};

export default SearchScreen;
