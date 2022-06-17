import { View, Text, Image } from "react-native";
import styles from "./styles";

export const MovieCard = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftView}></View>
      <View style={styles.rightView}>
        <Text style={styles.movieName}>{data.Title}</Text>
        <Text style={styles.releaseDate}>{`Released: ${data.Year}`}</Text>
      </View>
      <Image
        style={styles.image}
        source={
          data.Poster === "N/A"
            ? require("../../../assets/no-photo.png")
            : {
                uri: data.Poster,
              }
        }
      />
    </View>
  );
};
