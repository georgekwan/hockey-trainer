import React, { useContext, useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';

import BackButton from '../components/BackButton';
import Background from '../components/Background';
import Button from '../components/Button';
import Header from '../components/Header';
import Logo from '../components/Logo';
import TextInput from '../components/TextInput';
import { theme } from '../core/theme';
import { emailValidator } from '../helpers/emailValidator';
import { nameValidator } from '../helpers/nameValidator';
import { passwordValidator } from '../helpers/passwordValidator';
import { AuthContext } from '../providers/AuthProvider.js';

function RegisterScreen({ navigation }) {
  const { register, authErrorMessages } = useContext(AuthContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');

  const [registrationRunning, setRegistrationRunning] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const handleButtonClick = async () => {
    setRegistrationRunning(true);

    let thename = name;
    if (thename?.length <= 0) {
      thename = 'NO DISPLAY NAME PROVIDED 😟';
    }

    let success = await register(email, password, thename, age);
    setRegistrationRunning(false);
    if (!success) {
      setErrorMessage('Registration failed!');
    } else {
      navigation.reset({
        index: 0,
        routes: [{ name: 'NavBarContainer' }],
      });
    }
  };

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Create Account</Header>
      <TextInput label="Name" returnKeyType="next" value={name} onChangeText={(t) => setName(t)} />
      <TextInput
        label="Age"
        returnKeyType="next"
        value={age}
        keyboardType="numeric"
        onChangeText={(t) => setAge(t)}
      />
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email}
        onChangeText={(e) => setEmail(e)}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password}
        onChangeText={(e) => setPassword(e)}
        secureTextEntry
      />
      <Button mode="contained" onPress={handleButtonClick} style={{ marginTop: 24 }}>
        Sign Up
      </Button>
      <View style={styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}

export default React.memo(RegisterScreen);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});
