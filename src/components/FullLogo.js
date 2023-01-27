import React from 'react';
import { Image, StyleSheet } from 'react-native';

export default function FullLogo() {
  return <Image source={require('../../assets/harpia-logo.png')} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 260,
    resizeMode: 'contain',
    height: 80,
  },
});
