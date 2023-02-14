import { View, SafeAreaView, Text } from 'react-native';
import React from 'react';
import { ChartView } from '../components/ChartView';
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
