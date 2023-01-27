import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  useWindowDimensions,
} from 'react-native';

import GlobalStyles from '../GlobalStyles';
import { AuthContext } from '../src/providers/AuthProvider.js';

const SignInScreen = () => {
  const navigation = useNavigation();
  const authContext = useContext(AuthContext);
  const loginFn = authContext.login;
  const logoutFn = authContext.logout;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={[styles.login, styles.loginLayout]}>
      <View>
        <Image
          style={[styles.background]}
          resizeMode="cover"
          source={require('../../assets/background2.png')}
        />
        <Text style={[styles.loginGreeting, styles.generalFont]}>Welcome back</Text>
      </View>
      <View style={styles.buttons}>
        <View style={[styles.submitButton, styles.selectionBg]}>
          <View style={styles.submitParent}>
            <Text style={[styles.submitButtonFont, styles.textInputTypo]}>Sign In</Text>
            <Image
              style={styles.iconMarginMD}
              resizeMode="cover"
              source={require('../../assets/chevronright.png')}
            />
          </View>
        </View>
        <Image
          style={[styles.googleButtonIconPosition, styles.socialButtonLayout]}
          resizeMode="cover"
          source={require('../../assets/google-button.png')}
        />
        <Image
          style={[styles.appleButtonIconPosition, styles.socialButtonLayout]}
          resizeMode="cover"
          source={require('../../assets/apple-button.png')}
        />
      </View>
      <View style={styles.inputs}>
        <Pressable
          style={styles.forgotPassword}
          onPress={() => navigation.navigate('ForgotPasswordScreen')}>
          <Text style={[styles.forgotPassword1, styles.login1Typo]}>Forgot Password</Text>
        </Pressable>

        <View style={[styles.password, styles.emailLayout]}>
          <TextInput
            placeholder="Password"
            placeholderTextColor="white"
            style={[styles.textInput, styles.textInputTypo]}
            secureTextEntry
          />
        </View>
        <View style={[styles.email, styles.emailLayout]}>
          <TextInput
            placeholder="Email"
            placeholderTextColor="white"
            style={[styles.textInput, styles.textInputTypo]}
          />
        </View>
      </View>

      <Pressable style={styles.tabs} onPress={() => navigation.navigate('SignUpScreen')}>
        <Text style={[styles.login1, styles.login1Typo, styles.login1Position]}>Login</Text>
        <Text style={[styles.signUp1, styles.login1Typo, styles.login1Position]}>Sign up</Text>
        <View style={[styles.selection, styles.selectionBg]} />
      </Pressable>
      <Image
        style={styles.avatarIcon}
        resizeMode="cover"
        source={require('../../assets/profile-picture.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconMarginMD: {
    marginLeft: GlobalStyles.Margin.margin_md,
  },
  loginLayout: {
    width: '100%',
    overflow: 'hidden',
    flex: 1,
  },
  selectionBg: {
    backgroundColor: GlobalStyles.Color.gray_100,
    position: 'absolute',
  },
  textInputTypo: {
    fontFamily: GlobalStyles.FontFamily.subtitleSemibold,
    fontSize: GlobalStyles.FontSize.subtitleSemibold_size,
    color: GlobalStyles.Color.white,
  },
  socialButtonLayout: {
    width: 54,
    height: 54,
    top: 0,
    position: 'absolute',
  },
  login1Typo: {
    lineHeight: 16,
    fontSize: GlobalStyles.FontSize.footnoteMedium_size,
    fontFamily: GlobalStyles.FontFamily.subtitleSemibold,
    fontWeight: '600',
    textAlign: 'left',
  },
  emailLayout: {
    height: 60,
    width: 311,
    left: 0,
    position: 'absolute',
  },
  login1Position: {
    color: GlobalStyles.Color.white,
    fontSize: GlobalStyles.FontSize.footnoteMedium_size,
    top: 0,
    position: 'absolute',
  },
  background: {
    width: '100%',
    height: 384,
    left: 0,
    top: 0,
    position: 'absolute',
    // resizeMode: 'scale',
  },
  generalFont: {
    fontFamily: GlobalStyles.FontFamily.roboto,
  },
  loginGreeting: {
    top: 295,
    fontSize: 36,
    lineHeight: 43,
    textAlign: 'left',
    color: GlobalStyles.Color.white,
    left: 32,
    position: 'absolute',
  },
  submitButtonFont: {
    textAlign: 'center',
    fontWeight: '600',
    fontFamily: GlobalStyles.FontFamily.subtitleSemibold,
    fontSize: GlobalStyles.FontSize.subtitleSemibold_size,
  },
  submitParent: {
    flexDirection: 'row',
  },
  submitButton: {
    top: 2,
    left: 185,
    borderRadius: GlobalStyles.Border.br_md,
    paddingLeft: GlobalStyles.Padding.padding_lg,
    paddingTop: GlobalStyles.Padding.padding_sm,
    paddingRight: GlobalStyles.Padding.padding_md,
    paddingBottom: GlobalStyles.Padding.padding_sm,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  googleButtonIconPosition: {
    left: 75,
  },
  appleButtonIconPosition: {
    left: 0,
  },
  buttons: {
    top: 714,
    width: 310,
    height: 54,
    left: 32,
    position: 'absolute',
  },
  forgotPassword1: {
    color: GlobalStyles.Color.gray_100,
  },
  forgotPassword: {
    left: 196,
    top: 160,
    position: 'absolute',
  },
  password: {
    top: 80,
  },
  email: {
    top: 0,
  },
  inputs: {
    top: 490,
    height: 176,
    width: 311,
    left: 32,
    position: 'absolute',
  },
  login1: {
    left: 0,
  },
  signUp1: {
    left: 67,
  },
  selection: {
    top: 23,
    width: 35,
    height: 3,
    left: 0,
  },
  tabs: {
    top: 58,
    width: 113,
    height: 26,
    left: 32,
    position: 'absolute',
  },
  avatarIcon: {
    top: 43,
    left: 286,
    width: 58,
    height: 58,
    position: 'absolute',
  },
  icon: {
    top: 47,
    left: 290,
    borderRadius: 64,
    width: 50,
    height: 50,
    position: 'absolute',
  },
  login: {
    backgroundColor: GlobalStyles.Color.dark1,
    flex: 1,

    overflow: 'hidden',
  },
  textInput: {
    height: 50,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 25,
    paddingLeft: 10,
  },
});

export default SignInScreen;
