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
      <Header>Traditional Development, New Technology</Header>
      <Paragraph>Hockey Development for the Next Generation</Paragraph>
      <Button mode="contained" onPress={() => navigation.navigate('LoginScreen')}>
        Login
      </Button>
      <Button mode="outlined" onPress={() => navigation.navigate('RegisterScreen')}>
        Sign Up
      </Button>
    </Background>
  );
}
