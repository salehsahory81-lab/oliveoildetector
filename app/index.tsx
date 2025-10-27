import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olive Oil Quality Detector</Text>
      
      <Link href="/camera?bottle=A" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>🔍 Analyze Bottle A (Quality)</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/camera?bottle=B" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>⚗️ Analyze Bottle B (Adulteration)</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/calibration" asChild>
        <TouchableOpacity style={styles.developerButton}>
          <Text style={styles.developerButtonText}>👨‍💻 Developer Mode</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/settings" asChild>
        <TouchableOpacity style={styles.settingsButton}>
          <Text style={styles.settingsButtonText}>⚙️ Quality Criteria</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
    color: '#2c3e50',
  },
  button: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  developerButton: {
    backgroundColor: '#e67e22',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  developerButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  settingsButton: {
    backgroundColor: '#95a5a6',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  settingsButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});