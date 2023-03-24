import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

export default function Button({ textButton, onPress }) {
  return (
    <>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.textButton}>{textButton}</Text>
      </TouchableOpacity>
    </>
  );
}
