import { Text } from "react-native";
import styles from "./styles";

export default function Title({ title }) {
  return (
    <>
      <Text style={styles.textTitle}>{title}</Text>
    </>
  );
}
