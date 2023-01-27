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

export default function RegisterScreen({ navigation }) {
  // const [name, setName] = useState({ value: '', error: '' })
  // const [email, setEmail] = useState({ value: '', error: '' })
  // const [password, setPassword] = useState({ value: '', error: '' })

  // const onSignUpPressed = () => {
  //   const nameError = nameValidator(name.value)
  //   const emailError = emailValidator(email.value)
  //   const passwordError = passwordValidator(password.value)
  //   if (emailError || passwordError || nameError) {
  //     setName({ ...name, error: nameError })
  //     setEmail({ ...email, error: emailError })
  //     setPassword({ ...password, error: passwordError })
  //     return
  //   }
  // navigation.reset({
  //   index: 0,
  //   routes: [{ name: 'Dashboard' }],
  // })
  // }
  const { register, authErrorMessages } = useContext(AuthContext);

  const [name, setName] = useState(''); // input field value cannot be null
  const [email, setEmail] = useState(''); // input field value cannot be null
  const [password, setPassword] = useState(''); // input field value cannot be null
  const [age, setAge] = useState(''); // input field value cannot be null

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
      <TextInput
        label="Name"
        returnKeyType="next"
        value={name}
        // onChangeText={(text) => setName({ value: text, error: '' })}
        onChangeText={(t) => setName(t)}
        // error={!!name.error}
        // errorText={name.error}
      />
      <TextInput
        label="Age"
        returnKeyType="next"
        value={age}
        keyboardType="numeric"
        // onChangeText={(text) => setName({ value: text, error: '' })}
        onChangeText={(t) => setAge(t)}
        // error={!!name.error}
        // errorText={name.error}
      />
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email}
        // onChangeText={(text) => setEmail({ value: text, error: '' })}
        onChangeText={(e) => setEmail(e)}
        // error={!!email.error}
        // errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password}
        // onChangeText={(text) => setPassword({ value: text, error: '' })}
        onChangeText={(e) => setPassword(e)}
        // error={!!password.error}
        // errorText={password.error}
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
