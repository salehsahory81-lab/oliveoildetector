import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CalibrationScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Developer Calibration Mode</Text>
      <Text>🚧 Under Development</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});