import { Text, View, StyleSheet } from "react-native";
import {Link} from 'expo-router';
import { Button } from "expo-router/build/react-navigation";

export default function Sobre() {
  return (
    <View style={styles.container}>
      <Text>Contaê App</Text>
      <Link href="/" style={styles.button}>inicio</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#7f1ece"
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'none',
    color: '#ffff'
  }
});
