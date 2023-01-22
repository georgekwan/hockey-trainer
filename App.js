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
  Dashboard,
  HomeScreen,
  DrillSelectionScreen,
} from './src/screens';
import { FirebaseProvider } from './src/providers/FirebaseProvider.js';
import { AuthProvider } from './src/providers/AuthProvider.js';

import { UserProfileScreen } from './src/screens/UserProfileScreen.js';
import { InDrillScreen } from './src/screens/InDrillScreen.js';

import { NavBarContainer } from './src/components/NavBarContainer.js';
import InDrillScreenTEST from './tester/InDrillScreenTEST.js';

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
              <Stack.Screen name="InDrillScreenTEST" component={InDrillScreenTEST} />
              {/* <Stack.Navigator
                            initialRouteName='StartScreen'
                            screenOptions={{
                                headerShown: false,
                            }}
                        > */}
              {/* <Stack.Screen name="StartScreen" component={StartScreen} /> */}
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
              {/* <Stack.Screen
                name="InDrillScreen"
                component={InDrillScreen}
                navigationKey="InDrillScreen"
              /> */}
              <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
      </AuthProvider>
    </FirebaseProvider>
  );
}
