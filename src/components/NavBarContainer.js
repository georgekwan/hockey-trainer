import React, { useState } from 'react';

import { BottomNavigation, BottomNavigationAction } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { theme } from '../core/theme.js';

import {
  DrillSelectionScreen,
  HomeScreen,
  // UserProfileScreen,
} from '../screens';
import { UserProfileScreen } from '../screens/UserProfileScreen';

export function NavBarContainer() {
  const [selectedPatternName, setSelectedPatternName] = useState();
  const [index, setIndex] = useState(0);
  const handleIndexChange = (newIndex) => setIndex(newIndex);

  const [routes] = useState([
    {
      key: 'home',
      title: 'Home',
      focusedIcon: 'home-circle',
      unfocusedIcon: 'home-circle-outline',
    },
    {
      key: 'patternScreen',
      title: 'Patterns',
      focusedIcon: 'hockey-sticks',
      unfocusedIcon: 'hockey-puck',
    },
    {
      key: 'user',
      title: 'User Details',
      focusedIcon: 'account-circle',
      unfocusedIcon: 'account-circle-outline',
      color: theme.colors.primary,
    },
  ]);
  const renderScene = BottomNavigation.SceneMap({
    home: () => (
      <HomeScreen
        setIndex={setIndex}
        setSelectedPatternName={setSelectedPatternName}
        selectedPatternName={selectedPatternName}
      />
    ),
    patternScreen: () => (
      <DrillSelectionScreen
        selectedPatternName={selectedPatternName}
        setSelectedPatternName={setSelectedPatternName}
      />
    ),
    user: UserProfileScreen,
  });
  return (
    <SafeAreaProvider>
      <BottomNavigation
        label={{ color: 'white' }}
        navigationState={{ index, routes }}
        onIndexChange={handleIndexChange}
        renderScene={renderScene}
        barStyle={{ backgroundColor: '#E8E8E8', height: 90 }}
        theme={{ colors: { secondaryContainer: 'white' } }}
      />
    </SafeAreaProvider>
  );
}
