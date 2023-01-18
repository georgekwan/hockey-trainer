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
} from './src/screens';
import { FirebaseProvider } from './src/providers/FirebaseProvider.js';
import { AuthProvider } from './src/providers/AuthProvider.js';
import { UserProfile } from './src/screens/UserProfile.js';

const Stack = createStackNavigator();

export default function App() {
    return (
        <FirebaseProvider>
            <AuthProvider>
                <Provider theme={theme}>
                    <NavigationContainer>
                        {/* TODO - revert code to the commented out code below */}
                        <Stack.Navigator
                            initialRouteName='UserProfile'
                            screenOptions={{
                                headerShown: false,
                            }}
                        >
                            <Stack.Screen
                                name='UserProfile'
                                component={UserProfile}
                            />
                            {/* <Stack.Navigator
              initialRouteName="StartScreen"
              screenOptions={{
                headerShown: false,
              }}
            >
              <Stack.Screen name="StartScreen" component={StartScreen} /> */}
                            <Stack.Screen
                                name='LoginScreen'
                                component={LoginScreen}
                            />
                            <Stack.Screen
                                name='RegisterScreen'
                                component={RegisterScreen}
                            />
                            {/* <Stack.Screen
                                name='Dashboard'
                                component={Dashboard}
                            /> */}
                            <Stack.Screen
                                name='HomeScreen'
                                component={HomeScreen}
                            />
                            <Stack.Screen
                                name='ResetPasswordScreen'
                                component={ResetPasswordScreen}
                            />
                        </Stack.Navigator>
                    </NavigationContainer>
                </Provider>
            </AuthProvider>
        </FirebaseProvider>
    );
}
