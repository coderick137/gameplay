import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import { Image } from "react-native";

export function GuildIcon() {
  const uri = 'https://github.com/coderick137.png';
  return (
    <Image
      source={{ uri }}
      style={styles.image}
      resizeMode="cover"
    />
  )
}