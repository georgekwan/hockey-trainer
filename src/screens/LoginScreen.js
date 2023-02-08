import React, { useContext, useState } from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

import BackButton from '../components/BackButton';
import Background from '../components/Background';
import Button from '../components/Button';
import Header from '../components/Header';
import Logo from '../components/Logo';
import TextInput from '../components/TextInput';
import { theme } from '../core/theme';
import { emailValidator } from '../helpers/emailValidator';
import { passwordValidator } from '../helpers/passwordValidator';
import { AuthContext } from '../providers/AuthProvider.js';

function LoginScreen({ navigation }) {
  // const [email, setEmail] = useState({ value: '', error: '' })
  // const [password, setPassword] = useState({ value: '', error: '' })

  // const onLoginPressed = () => {
  //   const emailError = emailValidator(email.value)
  //   const passwordError = passwordValidator(password.value)
  //   if (emailError || passwordError) {
  //     setEmail({ ...email, error: emailError })
  //     setPassword({ ...password, error: passwordError })
  //     return
  //   }
  // navigation.reset({
  //   index: 0,
  //   routes: [{ name: 'Dashboard' }],
  // })
  // }

  const { login, authErrorMessages } = useContext(AuthContext);

  //TODO change email and password back to blank when deploy
  const [email, setEmail] = useState(''); // input field value cannot be null
  const [password, setPassword] = useState(''); // input field value cannot be null

  const [loginRunning, setLoginRunning] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const handleButtonClick = async () => {
    setLoginRunning(true);
    console.log('email is ', email);
    const success = await login(email, password);

    setLoginRunning(false);
    if (!success) {
      setErrorMessage('Registration failed!');
    } else {
      navigation.reset({
        index: 0,
        // routes: [{ name: 'Dashboard' }],
        routes: [{ name: 'NavBarContainer' }],
      });
    }
  };

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Welcome back.</Header>
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email}
        // onChangeText={(text) => setEmail({ value: text, error: '' })}
        onChangeText={(e) => {
          // console.log('e is', e);
          setEmail(e);
        }}
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
      <View style={styles.forgotPassword}>
        <TouchableOpacity onPress={() => navigation.navigate('ResetPasswordScreen')}>
          <Text style={styles.forgot}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <Button mode="contained" onPress={handleButtonClick}>
        Login
      </Button>
      <View style={styles.row}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}

export default React.memo(LoginScreen);

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});
