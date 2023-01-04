import React, { useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GlobalStyles from '../GlobalStyles';

const SignUpScreen = () => {
  const navigation = useNavigation();

  const [isSignUp, setIsSignUp] = useState(false);

  const signUpHandler = () => {};

  return (
    <View style={[styles.signUp, styles.signUpLayout]}>
      <View style={styles.background}>
        <Image
          style={styles.background}
          resizeMode="cover"
          source={require('../assets/background1.png')}
        />

        <Text style={[styles.signUpInstruction, styles.generalFont]}>
          Enter your informations below or login with a other account
        </Text>

        <Text
          style={[styles.greeting, styles.tabsPosition, styles.greetingFlexBox]}
        >
          <Text style={styles.generalFont}>Howdy </Text>
          <Text style={[styles.rookies, styles.generalFont]}>rookies,</Text>
        </Text>
      </View>
      <View style={styles.buttons}>
        <Pressable
          style={[styles.submitButton, styles.selectionBg]}
          onPress={signUpHandler}
        >
          <Text style={[styles.submitButtonFont, styles.textInputTypo]}>
            Sign up
          </Text>
          <Image
            style={styles.iconMarginMD}
            resizeMode="cover"
            source={require('../assets/chevronright.png')}
          />
        </Pressable>
        <Image
          style={[styles.googleButtonPosition, styles.socialButtonLayout]}
          resizeMode="cover"
          source={require('../assets/google-button.png')}
        />
        <Image
          style={[styles.appleButtonIconPosition, styles.socialButtonLayout]}
          resizeMode="cover"
          source={require('../assets/apple-button.png')}
        />
      </View>
      <Pressable
        style={[styles.tabs, styles.tabsPosition]}
        onPress={() => navigation.navigate('SignInScreen')}
      >
        <Text style={[styles.loginTabPosition, styles.TabTypo]}>Login</Text>
        <Text style={[styles.signUpTabPosition, styles.TabTypo]}>Sign up</Text>
        <View style={[styles.selection, styles.signUpTabPosition]} />
      </Pressable>
      <View style={styles.inputs}>
        <View
          style={[styles.emailInputPositionPosition, styles.passwordLayout]}
        >
          <TextInput
            placeholder="Email"
            placeholderTextColor="white"
            style={[styles.textInput, styles.textInputTypo]}
          />
        </View>
        <View style={[styles.passwordInputPosition, styles.passwordLayout]}>
          <TextInput
            placeholder="Password"
            placeholderTextColor="white"
            style={[styles.textInput, styles.textInputTypo]}
            secureTextEntry
          />
        </View>
        <View style={[styles.confirmPasswordPosition, styles.passwordLayout]}>
          <TextInput
            placeholder="Password again"
            placeholderTextColor="white"
            style={[styles.textInput, styles.textInputTypo]}
            secureTextEntry
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconMarginMD: {
    marginLeft: GlobalStyles.Margin.margin_md,
  },
  signUpLayout: {
    width: '100%',
    overflow: 'hidden',
  },
  greetingFlexBox: {
    textAlign: 'left',
    color: GlobalStyles.Color.white,
  },
  socialButtonLayout: {
    width: 54,
    height: 54,
    top: 0,
    position: 'absolute',
  },
  TabTypo: {
    fontSize: GlobalStyles.FontSize.footnoteMedium_size,
    fontFamily: GlobalStyles.FontFamily.subtitleSemibold,
    fontWeight: '600',
    textAlign: 'left',
    color: GlobalStyles.Color.white,
    lineHeight: 16,
    top: 0,
  },
  tabsPosition: {
    left: 32,
    position: 'absolute',
  },
  loginTabPosition: {
    left: 0,
    position: 'absolute',
  },
  signUpTabPosition: {
    left: 67,
    position: 'absolute',
  },
  passwordLayout: {
    height: 60,
    width: 311,
    left: 0,
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
  signUpInstruction: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
    top: 269,
    left: 34,
    fontSize: GlobalStyles.FontSize.size_xs,
    lineHeight: 16,
    color: GlobalStyles.Color.white,
    position: 'absolute',
  },
  generalFont: { fontFamily: GlobalStyles.FontFamily.roboto },
  text: {
    fontWeight: '300',
    fontFamily: GlobalStyles.FontFamily.inter,
  },
  rookies: {
    fontWeight: '700',
  },
  greeting: {
    top: 214,
    fontSize: 32,
    lineHeight: 43,
  },
  textInputTypo: {
    fontFamily: GlobalStyles.FontFamily.subtitleSemibold,
    fontSize: GlobalStyles.FontSize.subtitleSemibold_size,
    color: GlobalStyles.Color.white,
  },
  submitButtonFont: {
    textAlign: 'center',
    fontWeight: '600',
  },
  submitParent: {
    flexDirection: 'row',
  },
  selectionBg: {
    backgroundColor: GlobalStyles.Color.gray_100,
    position: 'absolute',
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
    position: 'absolute',
  },
  googleButtonPosition: {
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

  selection: {
    top: 23,
    width: 47,
    height: 3,
    backgroundColor: GlobalStyles.Color.gray_100,
  },
  tabs: {
    top: 58,
    width: 114,
    height: 26,
  },
  emailInputPosition: {
    top: 0,
  },
  passwordInputPosition: {
    top: 80,
  },
  confirmPasswordPosition: {
    top: 160,
  },
  inputs: {
    top: 414,
    height: 220,
    width: 311,
    left: 32,
    position: 'absolute',
  },
  signUp: {
    backgroundColor: GlobalStyles.Color.dark1,
    flex: 1,
    height: 812,
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

export default SignUpScreen;
