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

const Stack = createStackNavigator();

export default function App() {
  return (
    <FirebaseProvider>
      <AuthProvider>
        <Provider theme={theme}>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="StartScreen"
              screenOptions={{
                headerShown: false,
              }}
            >
              <Stack.Screen name="StartScreen" component={StartScreen} />
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
              <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
              {/* <Stack.Screen
                                name='Dashboard'
                                component={Dashboard}
                            /> */}
              <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                navigationKey="HomeScreen"
              />
              {/* <Stack.Screen
                name="DrillSelectionScreen"
                component={DrillSelectionScreen}
                navigationKey="DrillSelectionScreen"
              /> */}
              <Stack.Screen
                name="ResetPasswordScreen"
                component={ResetPasswordScreen}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
      </AuthProvider>
    </FirebaseProvider>
  );
}
