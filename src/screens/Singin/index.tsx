import { View, Text, Image } from "react-native";
import { styles } from "./styles";

import IllustrationImg from "../../assets/illustration.png";
import { ButtonIcon } from "../../components/ButtonIcon";
import { useNavigation } from "@react-navigation/native";
import { Background } from "../../components/Background";

import { useAuth } from "../../hooks/auth";

export function Singin() {
  const navigation = useNavigation();
  const { user } = useAuth();

  function handleSignIn() {
    navigation.navigate('Home' as never);
  }

  return (
    <Background>
      <View style={styles.container}>
        <Image
          source={IllustrationImg}
          style={styles.image}
          resizeMode="stretch"
        />
        <View style={styles.content}>
          <Text style={styles.title}>
            Organize {`\n`}
            suas jogatinas {`\n`}
            facilmente
          </Text>
          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {`\n`}
            favoritos com seus amigos
          </Text>
          <ButtonIcon
            title="Entrar com Discord"
            activeOpacity={0.7}
            onPress={handleSignIn}
          />
        </View>
      </View>
    </Background>
  )
}