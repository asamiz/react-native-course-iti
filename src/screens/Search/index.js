import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  ActivityIndicator,
  FlatList,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Header } from "../../components/Header";
import { Input } from "../../components/SearchBar";
import styles from "./styles";
import { COLORS } from "../../theme/colors";
import { useState } from "react";
import { getMoviesList } from "../../api/movies";
import { MovieCard } from "../../components/MovieCard";

const SearchScreen = () => {
  const [value, setValue] = useState();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

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
    return <MovieCard data={item} />;
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
        <Header title={"Search Results"} />
      </View>
      {loading ? (
        <ActivityIndicator
          color={COLORS.sun}
          size={"large"}
          style={styles.activityIndicator}
        />
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          contentContainerStyle={styles.contentContainer}
        />
      )}
    </SafeAreaView>
  );
};

export default SearchScreen;
