import React, { useEffect, useState } from 'react';
import { BottomNavigation } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { theme } from '../core/theme.js';
import { DrillSelectionScreen, HomeScreen } from '../screens';
import { Leaderboard } from '../screens/Leaderboard';
import { UserProfileScreen } from '../screens/UserProfileScreen';

const NavBarContainer = ({ route }) => {
  const { initialIndex } = route.params ?? {};

  const [index, setIndex] = useState(initialIndex ?? 0);
  const handleIndexChange = (newIndex) => setIndex(newIndex);

  useEffect(() => {
    if (initialIndex) {
      setIndex(initialIndex);
    }
  }, [initialIndex]);

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
      key: 'leaderboard',
      title: 'Leaderboard',
      focusedIcon: 'trophy',
      unfocusedIcon: 'trophy-outline',
      color: theme.colors.primary,
    },
    {
      key: 'user',
      title: 'User',
      focusedIcon: 'account-circle',
      unfocusedIcon: 'account-circle-outline',
      color: theme.colors.primary,
    },
  ]);
  const renderScene = BottomNavigation.SceneMap({
    home: () => <HomeScreen setIndex={setIndex} />,
    patternScreen: DrillSelectionScreen,
    leaderboard: Leaderboard,
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
};

export default React.memo(NavBarContainer);
