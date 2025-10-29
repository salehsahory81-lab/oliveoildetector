import { Camera } from "expo-camera";
import { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function CameraScreen() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) return <Text>جارٍ طلب الإذن...</Text>;
  if (!hasPermission) return <Text>تم رفض إذن الكاميرا</Text>;

  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} />
    </View>
  );
}