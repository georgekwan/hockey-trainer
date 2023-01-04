import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GlobalStyles from '../GlobalStyles';

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.forgotPassword}>
      <View style={styles.passwordResetButton}>
        <View style={[styles.rectangle, styles.rectanglePosition]} />
        <Text style={styles.buttonText}>Send</Text>
      </View>
      <View style={styles.email}>
        {/* <Image
          style={[styles.rectangleIcon, styles.rectanglePosition]}
          resizeMode="cover"
          source={require('../assets/rectangle.png')}
        /> */}
        {/* <Text style={[styles.placeholder, styles.placeholderFlexBox]}>
          Email
        </Text> */}
        <TextInput
          placeholder="Email"
          placeholderTextColor="white"
          style={[styles.textInput, styles.signUpTypo]}
        />
      </View>
      <View style={styles.text}>
        <Text style={[styles.forgotPassword1, styles.placeholderFlexBox]}>
          Forgot Password?
        </Text>
        <Text
          style={[
            styles.enterYourInformationsBelow,
            styles.tryAnotherWayLayout,
          ]}
        >
          <Text style={styles.enterYourInformations}>
            Enter your email below
          </Text>
          {/* <Text style={styles.loginWithA}>login with another account</Text> */}
        </Text>
        {/* <Text style={[styles.tryAnotherWay, styles.tryAnotherWayLayout]}>
          Try another way
        </Text> */}
      </View>
      <Pressable
        style={styles.circleLeft}
        onPress={() => navigation.navigate('signInScreen')}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require('../assets/circle-left.png')}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  rectanglePosition: {
    left: '0%',
    right: '0%',
    position: 'absolute',
    width: '100%',
  },
  placeholderFlexBox: {
    textAlign: 'left',
    color: GlobalStyles.Color.white,
    position: 'absolute',
  },
  // tryAnotherWayLayout: {
  //   lineHeight: 16,
  //   textAlign: 'left',
  //   color: GlobalStyles.Color.white,
  //   position: 'absolute',
  // },
  rectangle: {
    top: '0%',
    bottom: '0%',
    borderRadius: 24,
    backgroundColor: GlobalStyles.Color.gray_100,
    height: '100%',
  },
  buttonText: {
    marginTop: -11,
    marginLeft: -20.5,
    top: '50%',
    left: '50%',
    textAlign: 'center',
    color: GlobalStyles.Color.white,
    fontFamily: GlobalStyles.FontFamily.subtitleSemibold,
    fontWeight: '600',
    fontSize: GlobalStyles.FontSize.subtitleSemibold_size,
    position: 'absolute',
  },
  passwordResetButton: {
    top: 439,
    left: 56,
    width: 263,
    height: 50,
    position: 'absolute',
  },
  // rectangleIcon: {
  //   height: '1.67%',
  //   top: '99.17%',
  //   bottom: '-0.83%',
  //   borderRadius: GlobalStyles.Border.br_sm,
  //   maxWidth: '100%',
  //   maxHeight: '100%',
  //   overflow: 'hidden',
  // },
  placeholder: {
    top: 19,
    left: 16,
    fontFamily: GlobalStyles.FontFamily.subtitleSemibold,
    fontSize: GlobalStyles.FontSize.subtitleSemibold_size,
    textAlign: 'left',
  },
  email: {
    top: 222,
    left: 41,
    width: 311,
    height: 60,
    position: 'absolute',
  },
  forgotPassword1: {
    top: 0,
    left: 0,
    fontSize: 24,
    lineHeight: 30,
    fontWeight: '700',
    fontFamily: GlobalStyles.FontFamily.roboto,
  },
  enterYourInformations: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  // loginWithA: {
  //   margin: GlobalStyles.Margin.margin_sm,
  // },
  enterYourInformationsBelow: {
    top: 46,
    left: 2,
    fontSize: GlobalStyles.FontSize.size_xs,
    fontFamily: GlobalStyles.FontFamily.roboto,
    lineHeight: 16,
    textAlign: 'left',
    color: GlobalStyles.Color.white,
    position: 'absolute',
  },
  // tryAnotherWay: {
  //   top: 277,
  //   left: 97,
  //   fontSize: GlobalStyles.FontSize.footnoteMedium_size,
  //   fontFamily: GlobalStyles.FontFamily.subtitleSemibold,
  //   fontWeight: '600',
  //   lineHeight: 16,
  // },
  text: {
    top: 114,
    left: 32,
    width: 200,
    height: 293,
    position: 'absolute',
  },
  icon: {
    height: '100%',
    width: '100%',
  },
  circleLeft: {
    left: 24,
    top: 56,
    width: 32,
    height: 32,
    position: 'absolute',
  },
  forgotPassword: {
    backgroundColor: GlobalStyles.Color.dark1,
    flex: 1,
    height: 812,
    overflow: 'hidden',
    width: '100%',
  },
  signUpTypo: {
    fontFamily: GlobalStyles.FontFamily.subtitleSemibold,
    fontSize: GlobalStyles.FontSize.subtitleSemibold_size,
    color: GlobalStyles.Color.white,
  },
  textInput: {
    height: 50,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 25,
    paddingLeft: 10,
  },
});

export default ForgotPasswordScreen;
