import React from 'react';
import Background from '../components/Background';
import Header from '../components/Header';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';
import FullLogo from '../components/FullLogo.js';

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <FullLogo />
      <Header>Sports Development Made Affordable</Header>
      <Paragraph>Traditional Development, New Technology.</Paragraph>
      <Button mode="contained" onPress={() => navigation.navigate('LoginScreen')}>
        Login
      </Button>
      <Button mode="outlined" onPress={() => navigation.navigate('RegisterScreen')}>
        Sign Up
      </Button>
    </Background>
  );
}
