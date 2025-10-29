import { View, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Button title="ابدأ الفحص" onPress={() => router.push("/camera")} />
      <Button title="سجل الفحوصات" onPress={() => router.push("/history")} />
      <Button title="وحدة المطور" onPress={() => router.push("/developer")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    gap: 20,
    padding: 30,
  },
});