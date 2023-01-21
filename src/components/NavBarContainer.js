// eslint-disable-next-line import/order
import * as React from 'react';

import { BottomNavigation as PaperBottomNavigation } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

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
      title: 'Pattern Selection',
      focusedIcon: 'hockey-sticks',
      unfocusedIcon: 'hockey-puck',
    },
    {
      key: 'user',
      title: 'User Details',
      focusedIcon: 'account-circle',
      unfocusedIcon: 'account-circle-outline',
    },
  ]);
  const renderScene = PaperBottomNavigation.SceneMap({
    home: HomeScreen,
    patternScreen: DrillSelectionScreen,
    user: UserProfileScreen,
  });
  return (
    <SafeAreaProvider>
      <PaperBottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={handleIndexChange}
        renderScene={renderScene}
      />
    </SafeAreaProvider>
  );
}
