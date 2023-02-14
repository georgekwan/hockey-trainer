import { View, SafeAreaView, Text } from 'react-native';
import React from 'react';

import InteractiveChart from '../components/InteractiveChart';

const DevGraphScreen = () => {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        alignItems: 'stretch',
      }}>
      <InteractiveChart />
    </View>
  );
};

export default DevGraphScreen;
