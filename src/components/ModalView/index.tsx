import { View, Text, Modal, ModalProps } from "react-native";
import { styles } from "./styles";
import { ReactNode } from "react";
import { Background } from "../Background";

interface Props extends ModalProps {
  children: ReactNode;
}

export function ModalView({ children, ...rest }: Props) {
  return (
    <Modal
      transparent
      animationType="slide"
      statusBarTranslucent
      {...rest}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Background>
            <View style={styles.bar} />
            {children}
          </Background>
        </View>
      </View>
    </Modal>
  );
}