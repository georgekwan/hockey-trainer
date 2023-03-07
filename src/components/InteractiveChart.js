import React, { useContext, useEffect, useState } from 'react';
import { Dimensions, View, Text } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';
import { PatternContext } from '../providers/PatternProvider.js';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

export default React.memo(InteractiveChart);

function InteractiveChart() {
  const { patternHistory } = useContext(PatternContext);
  const [giftedValues, setGiftedValues] = useState([]);

  useEffect(() => {
    if (!patternHistory) return;

    const sortedData = patternHistory?.sort((a, b) => {
      let result = a?.date?.seconds - b?.date?.seconds;

      return result;
    });
    const giftedArray = [];
    for (let drill of sortedData) {
      let date = new Date(drill?.date?.seconds * 1000 + drill.date?.nanoseconds / 1000000);

      let misses = drill.totalMisses;
      let accuracy = ((15 - misses) / 15) * 100;
      accuracy = Math.round(accuracy * 100) / 100;
      const dateOptions = { month: 'short', day: '2-digit' };
      const timeOptions = { hour12: false, hour: '2-digit', minute: '2-digit' };
      giftedArray.push({
        value: Math.round(accuracy),
        name: drill.drillId,
        date: String(date.toLocaleDateString('en-US', timeOptions)),
        label: String(date.toLocaleDateString('en-US', dateOptions)),
        labelTextStyle: { color: '#2E3033', width: 60 },
      });
    }
    setGiftedValues(giftedArray);
  }, [patternHistory]);

  return (
    <View style={{ paddingHorizontal: WIDTH * 0.01, marginTop: 30 }}>
      <LineChart
        areaChart
        curved
        data={giftedValues}
        rotateLabel
        height={HEIGHT * 0.285}
        width={WIDTH * 0.85}
        hideDataPoints
        spacing={25}
        color="#DC3535"
        thickness={5}
        startFillColor="#DC3535"
        endFillColor="#DC3535"
        startOpacity={0.8}
        endOpacity={0}
        initialSpacing={2.5}
        noOfSections={5}
        maxValue={100}
        yAxisColor="#2E3033"
        yAxisThickness={2}
        rulesType="solid"
        rulesColor="#F2F0EB"
        yAxisTextStyle={{ color: '#2E3033' }}
        xAxisTextStyle={{ color: '#2E3033' }}
        yAxisSide="left"
        yAxisLabelSuffix="%"
        xAxisColor="#2E3033"
        xAxisThickness={2}
        pointerConfig={{
          pointerStripHeight: 160,
          pointerStripColor: 'white',
          pointerStripWidth: 2,
          pointerColor: '#DC3535',
          radius: 5,
          pointerLabelWidth: 100,
          pointerLabelHeight: 100,
          activatePointersOnLongPress: true,
          autoAdjustPointerLabelPosition: false,
          pointerLabelComponent: (items) => {
            return (
              <View
                style={{
                  height: 95,
                  width: 140,
                  justifyContent: 'center',
                  marginTop: -20,
                  marginLeft: -20,
                  marginRight: -20,
                  borderRadius: 5,
                  backgroundColor: '#2E3033',
                  opacity: 0.8,
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 16,
                    fontWeight: 'bold',
                    marginBottom: 6,
                    textAlign: 'center',
                  }}>
                  {items[0].name}
                </Text>

                <Text
                  style={{
                    color: 'white',
                    fontSize: 16,
                    marginBottom: 6,
                    textAlign: 'center',
                  }}>
                  {items[0].date}
                </Text>

                <Text
                  style={{
                    color: 'white',
                    fontSize: 20,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  {items[0].value + '%'}
                </Text>
              </View>
            );
          },
        }}
      />
    </View>
  );
}
