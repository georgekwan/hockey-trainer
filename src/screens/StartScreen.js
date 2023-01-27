import React from 'react';

import Background from '../components/Background';
import Button from '../components/Button';
import FullLogo from '../components/FullLogo.js';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';

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
