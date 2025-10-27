import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="camera" options={{ title: 'Analyze Oil' }} />
      <Stack.Screen name="results" options={{ title: 'Results' }} />
      <Stack.Screen name="calibration" options={{ title: 'Developer Mode' }} />
      <Stack.Screen name="settings" options={{ title: 'Quality Settings' }} />
    </Stack>
  );
}