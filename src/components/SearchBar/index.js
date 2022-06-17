import { View, TextInput } from "react-native";
import { COLORS } from "../../theme/colors";
import styles from "./styles";

export const Input = ({
  value,
  onChangeText,
  left,
  right,
  containerStyle,
  inputStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {left && left}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={[styles.input, inputStyle]}
        placeholder={"Enter movie name ..."}
        placeholderTextColor={COLORS.sun}
      />
      {right && right}
    </View>
  );
};
