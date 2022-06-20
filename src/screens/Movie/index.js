import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { ActivityIndicator, Image, ScrollView, Text, View } from "react-native";
import { getMovieDetails } from "../../api/movies";
import { Section } from "../../components/Section";
import { COLORS } from "../../theme/colors";
import styles from "./styles";

const MovieScreen = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const route = useRoute();
  const { id } = route?.params;

  useEffect(() => {
    _onLoad();
  }, []);

  const _onLoad = async () => {
    const data = await getMovieDetails({ id });
    setData(data);
    setLoading(false);
  };

  // Race conditions

  return loading ? (
    <ActivityIndicator
      color={COLORS.sun}
      style={styles.activityIndicator}
      size={"large"}
    />
  ) : (
    <>
      <View style={styles.topContainer}>
        <Image
          source={
            data?.Poster === "N/A"
              ? require("../../../assets/no-photo.png")
              : { uri: data?.Poster }
          }
          style={styles.image}
        />
        <View style={styles.topInfoContainer}>
          <Text style={styles.title}>{data?.Title}</Text>
          <Text style={styles.shortInfoText}>{data?.Released}</Text>
          <Text style={styles.shortInfoText}>{data?.Genre}</Text>
          <Text style={styles.shortInfoText}>{data?.Runtime}</Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.ratingsContainer}>
          {data.Ratings.map((item) => {
            return (
              <View style={styles.ratingContainer} key={item.Source}>
                <Text style={styles.sourceText}>
                  {item.Source === "Internet Movie Database"
                    ? "IMDB"
                    : item.Source}
                </Text>
                <Text style={styles.ratingText}>{item.Value}</Text>
              </View>
            );
          })}
        </View>
        <Section title={"Summary"} body={data.Plot} />
        <Section title={"Director"} body={data.Director} />
        <Section title={"Actors"} body={data.Actors} />
      </ScrollView>
    </>
  );
};

export default MovieScreen;
