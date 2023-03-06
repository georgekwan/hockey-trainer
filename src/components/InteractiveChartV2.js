import React, { useContext, useEffect, useRef, useState } from 'react';
import { Dimensions, View, Text } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';
import { PatternContext } from '../providers/PatternProvider.js';

// Convert timestamp to date
function convertTimestamp(unixTimestamp) {
  if (patternHistory.length > 0) {
    const date = new Date(unixTimestamp * 1000);
    const options = { month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }
}

export default React.memo(InteractiveChartV2);

function InteractiveChartV2() {
  const { patternHistory } = useContext(PatternContext);
  const apx = (size = 0) => {
    let width = Dimensions.get('window').width;
    return (width / 750) * size;
  };
  const [newDrillName, setNewDrillName] = useState([]);
  const [drillTime, setDrillTime] = useState([]); // This was for the old chart
  const [shotAccuracy, setShotAccuracy] = useState([]); // This was for the old chart
  const [giftedValues, setGiftedValues] = useState([]);
  const size = useRef(drillTime.length); // This was for the old chart

  useEffect(() => {
    if (!patternHistory) return;

    const sortedData = patternHistory?.sort((a, b) => {
      let result = a?.date?.seconds - b?.date?.seconds;

      return result;
    });
    const newDrillTime = []; // This was for the old chart
    const newShotAccuracy = []; // This was for the old chart
    const newDrillName = []; // This was for the old chart
    const giftedArray = [];
    for (let drill of sortedData) {
      let date = new Date(drill?.date?.seconds * 1000 + drill.date.nanoseconds / 1000000);

      let misses = drill.totalMisses;
      let accuracy = ((15 - misses) / 15) * 100;
      accuracy = Math.round(accuracy * 100) / 100;
      newDrillTime.push(date); // This was for the old chart
      newShotAccuracy.push(accuracy); // This was for the old chart

      newDrillName.push(drill.drillId); // This was for the old chart
      giftedArray.push({
        value: Math.round(accuracy),
        dataPointText: String(accuracy),
        name: drill.drillId,
        date: String(date),
      }); // need to include Drill name and Drill date
      console.log('🚀 ~ file: InteractiveChartV2.js:60 ~ useEffect ~ giftedArray:', giftedArray);
    }
    setGiftedValues(giftedArray);
    setNewDrillName(newDrillName); // This was for the old chart
    setDrillTime(newDrillTime); // This was for the old chart
    setShotAccuracy(newShotAccuracy); // This was for the old chart
    size.current = newDrillTime.length;
  }, [patternHistory]);

  return (
    <View>
      <LineChart
        areaChart
        data={giftedValues}
        rotateLabel
        height={255}
        width={330}
        hideDataPoints
        spacing={10}
        color="#DC3535"
        thickness={5}
        startFillColor="#DC3535"
        endFillColor="#DC3535"
        startOpacity={0.8}
        endOpacity={0.2}
        initialSpacing={0}
        noOfSections={10}
        maxValue={100}
        yAxisColor="black"
        yAxisThickness={2}
        rulesType="solid"
        rulesColor="lightgray"
        yAxisTextStyle={{ color: 'grey' }}
        xAxisTextStyle={{ color: 'black' }}
        yAxisSide="left"
        yAxisLabelSuffix="%"
        xAxisColor="black"
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
                  height: 110,
                  width: 150,
                  justifyContent: 'center',
                  // marginTop: -30,
                  // marginLeft: -40,
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
                    fontSize: 16,
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
