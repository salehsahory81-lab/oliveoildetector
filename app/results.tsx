import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { useLocalSearchParams, router } from 'expo-router';

export default function CameraScreen() {
  const { bottle } = useLocalSearchParams();
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef(null);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to use the camera</Text>
        <TouchableOpacity onPress={requestPermission} style={styles.button}>
          <Text style={styles.buttonText}>Grant Permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      router.push({
        pathname: '/results',
        params: { 
          bottleType: bottle,
          imageUri: photo.uri 
        }
      });
    }
  };

  return (
    <View style={styles.container}>
      <CameraView 
        style={styles.camera} 
        facing={facing}
        ref={cameraRef}
      >
        <View style={styles.overlay}>
          <View style={styles.instructionContainer}>
            <Text style={styles.instruction}>
              {bottle === 'A' 
                ? '📸 Take picture of Bottle A color' 
                : '⏱️ Record video of Bottle B reaction'}
            </Text>
          </View>
          
          <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
            <Text style={styles.captureText}>📷</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.flipButton} 
            onPress={() => setFacing(current => current === 'back' ? 'front' : 'back')}
          >
            <Text style={styles.flipText}>🔄 Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  instructionContainer: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    padding: 15,
    borderRadius: 10,
    marginTop: 50,
  },
  instruction: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  captureButton: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    padding: 20,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: 'white',
  },
  captureText: {
    fontSize: 24,
    color: 'white',
  },
  flipButton: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    padding: 15,
    borderRadius: 10,
    marginBottom: 30,
  },
  flipText: {
    color: 'white',
    fontSize: 16,
  },
});