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
  InDrillScreen,
  Dashboard,
  HomeScreen,
  DrillSelectionScreen,
  UserProfileScreen,
} from './src/screens';
import { FirebaseProvider } from './src/providers/FirebaseProvider.js';
import { AuthProvider } from './src/providers/AuthProvider.js';

import { NavBarContainer } from './src/components/NavBarContainer.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <FirebaseProvider>
      <AuthProvider>
        <Provider theme={theme}>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="NavBarContainer"
              screenOptions={{
                headerShown: false,
              }}>
              {/* <Stack.Screen name="InDrillScreen" component={InDrillScreen} /> */}
              {/* <Stack.Navigator
                            initialRouteName='StartScreen'
                            screenOptions={{
                                headerShown: false,
                            }}
                        > */}
              {/* <Stack.Screen
                                name='StartScreen'
                                component={StartScreen}
                            /> */}
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
              <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
              {/* <Stack.Screen
                                name='Dashboard'
                                component={Dashboard}
                            /> */}
              <Stack.Screen
                name="NavBarContainer"
                component={NavBarContainer}
                navigationKey="NavBarContainer"
              />
              <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
      </AuthProvider>
    </FirebaseProvider>
  );
}
