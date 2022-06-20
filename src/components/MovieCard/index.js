import { View, Text, Image, Pressable } from "react-native";
import styles from "./styles";

export const MovieCard = ({ data, onPress }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
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
    </Pressable>
  );
};
