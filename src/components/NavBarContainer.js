// eslint-disable-next-line import/order
import * as React from 'react';

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
  const [index, setIndex] = React.useState(0);
  const handleIndexChange = (newIndex) => setIndex(newIndex);

  const [routes] = React.useState([
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
    home: HomeScreen,
    patternScreen: DrillSelectionScreen,
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
