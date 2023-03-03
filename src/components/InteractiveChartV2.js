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

const giftedValues = [
  { name: 'Drill One', value: 90, date: '1 Apr 2022' },
  { name: 'Drill Three', value: 70, date: '2 Apr 2022' },
  { name: 'Drill Five', value: 45, date: '3 Apr 2022' },
  { name: 'Drill Two', value: 88, date: '4 Apr 2022' },
  { name: 'Drill One', value: 65, date: '5 Apr 2022' },
  { name: 'Drill Six', value: 55, date: '6 Apr 2022' },
  { name: 'Drill Eight', value: 76, date: '7 Apr 2022' },
  { name: 'Drill Two', value: 89, date: '8 Apr 2022' },

  { name: 'Drill Seven', value: 65, date: '9 Apr 2022' },
  {
    name: 'Drill One',
    value: 84,
    date: '10 Apr 2022',
    label: '10 Apr',
    labelTextStyle: { color: 'lightgray', width: 60 },
  },
  { name: 'Drill Two', value: 68, date: '11 Apr 2022' },
  { name: 'Drill Four', value: 46, date: '12 Apr 2022' },
  { name: 'Drill Three', value: 34, date: '13 Apr 2022' },
  { name: 'Drill Six', value: 85, date: '14 Apr 2022' },
  { name: 'Drill One', value: 80, date: '15 Apr 2022' },
  { name: 'Drill Nine', value: 95, date: '16 Apr 2022' },

  { name: 'Drill Ten', value: 70, date: '17 Apr 2022' },
  { name: 'Drill Four', value: 85, date: '18 Apr 2022' },
  { name: 'Drill One', value: 95, date: '19 Apr 2022' },
  {
    name: 'Drill Three',
    value: 35,
    date: '20 Apr 2022',
    label: '20 Apr',
    labelTextStyle: { color: 'lightgray', width: 60 },
  },
  { name: 'Drill One', value: 48, date: '21 Apr 2022' },
  { name: 'Drill Ten', value: 95, date: '22 Apr 2022' },
  { name: 'Drill Three', value: 26, date: '23 Apr 2022' },
  { name: 'Drill Six', value: 55, date: '24 Apr 2022' },

  { name: 'Drill Eight', value: 89, date: '25 Apr 2022' },
  { name: 'Drill One', value: 62, date: '26 Apr 2022' },
  { name: 'Drill Four', value: 70, date: '27 Apr 2022' },
  { name: 'Drill Two', value: 53, date: '28 Apr 2022' },
  { name: 'Drill One', value: 61, date: '29 Apr 2022' },
  {
    name: 'Drill Three',
    value: 70,
    date: '30 Apr 2022',
    label: '30 Apr',
    labelTextStyle: { color: 'lightgray', width: 60 },
  },
  { name: 'Drill Ten', value: 84, date: '1 May 2022' },
  { name: 'Drill Seven', value: 95, date: '2 May 2022' },
  { name: 'Drill Five', value: 78, date: '3 May 2022' },
  { name: 'Drill Six', value: 65, date: '4 May 2022' },
  { name: 'Drill Three', value: 91, date: '5 May 2022' },
];

export default React.memo(InteractiveChartV2);

function InteractiveChartV2() {
  const { patternHistory } = useContext(PatternContext);
  const apx = (size = 0) => {
    let width = Dimensions.get('window').width;
    return (width / 750) * size;
  };
  const [newDrillName, setNewDrillName] = useState([]);
  const [drillTime, setDrillTime] = useState([]);
  const [shotAccuracy, setShotAccuracy] = useState([]);
  const [giftedValues, setGiftedValues] = useState([]);
  const size = useRef(drillTime.length);

  useEffect(() => {
    if (!patternHistory) return;

    const sortedData = patternHistory?.sort((a, b) => {
      let result = a?.date.seconds - b?.date.seconds;

      return result;
    });
    const newDrillTime = [];
    const newShotAccuracy = [];
    const newDrillName = [];
    const giftedArray = [];
    for (let drill of sortedData) {
      let date = new Date(drill?.date.seconds * 1000 + drill.date.nanoseconds / 1000000);

      let misses = drill.totalMisses;
      let accuracy = ((15 - misses) / 15) * 100;
      accuracy = Math.round(accuracy * 100) / 100;
      newDrillTime.push(date);
      newShotAccuracy.push(accuracy);

      newDrillName.push(drill.drillId);
      giftedArray.push({ value: accuracy, dataPointText: String(accuracy) });
    }
    setGiftedValues(giftedArray);
    setNewDrillName(newDrillName);
    setDrillTime(newDrillTime);
    setShotAccuracy(newShotAccuracy);
    size.current = newDrillTime.length;
  }, [patternHistory]);

  //  console.log('giftedValues is:', giftedValues);
  return (
    <View
      style={{
        paddingVertical: 5,
        paddingLeft: 5,
        backgroundColor: 'black',
      }}>
      <LineChart
        areaChart
        data={giftedValues}
        rotateLabel
        height={250}
        width={330}
        hideDataPoints
        spacing={10}
        color="rgb(220, 53, 53)"
        thickness={5}
        startFillColor="rgb(220, 53, 53)"
        endFillColor="rgb(220, 53, 53)"
        startOpacity={0.8}
        endOpacity={0.2}
        initialSpacing={0}
        noOfSections={10}
        maxValue={100}
        yAxisColor="white"
        yAxisThickness={2}
        rulesType="solid"
        rulesColor="gray"
        yAxisTextStyle={{ color: 'gray' }}
        yAxisSide="right"
        xAxisColor="lightgray"
        xAxisThickness={2}
        pointerConfig={{
          pointerStripHeight: 160,
          pointerStripColor: 'lightgray',
          pointerStripWidth: 2,
          pointerColor: 'lightgray',
          radius: 6,
          pointerLabelWidth: 100,
          pointerLabelHeight: 90,
          activatePointersOnLongPress: true,
          autoAdjustPointerLabelPosition: false,
          pointerLabelComponent: (items) => {
            return (
              <View
                style={{
                  height: 100,
                  width: 100,
                  justifyContent: 'center',
                  marginTop: -30,
                  marginLeft: -40,
                  borderRadius: 16,
                  backgroundColor: 'gray',
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 15,
                    fontWeight: 'bold',
                    marginBottom: 6,
                    textAlign: 'center',
                  }}>
                  {items[0].name}
                </Text>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 15,
                    marginBottom: 6,
                    textAlign: 'center',
                  }}>
                  {items[0].date}
                </Text>

                <Text
                  style={{
                    color: 'white',
                    fontSize: 15,
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
