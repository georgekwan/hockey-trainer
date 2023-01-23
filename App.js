import React from 'react';
import { Provider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { theme } from './src/core/theme';
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  HomeScreen,
  DrillSelectionScreen,
  UserProfileScreen,
  InDrillScreen,
} from './src/screens';
import { FirebaseProvider } from './src/providers/FirebaseProvider.js';
import { AuthProvider } from './src/providers/AuthProvider.js';

import { NavBarContainer } from './src/components/NavBarContainer.js';
// import InDrillScreen from './src/screens/InDrillScreen.js';
import ResultInputScreen from './src/screens/ResultInputScreen.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <FirebaseProvider>
      <AuthProvider>
        <Provider theme={theme}>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="StartScreen"
              name="StartScreen"
              component={StartScreen}
              screenOptions={{
                headerShown: false,
              }}>
              <Stack.Screen name="StartScreen" component={StartScreen} />
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
              <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
              <Stack.Screen name="NavBarContainer" component={NavBarContainer} />
              <Stack.Screen name="InDrillScreen" component={InDrillScreen} />
              <Stack.Screen name="ResultInputScreen" component={ResultInputScreen} />
              <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
      </AuthProvider>
    </FirebaseProvider>
  );
}
