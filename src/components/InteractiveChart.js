import React, { useContext, useEffect, useRef, useState } from 'react';
import { Dimensions, View } from 'react-native';
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

export default React.memo(InteractiveChart);

function InteractiveChart() {
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
      let result = a?.date.seconds - b.date.seconds;

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
    <View>
      <LineChart
        data={giftedValues}
        height={250}
        showVerticalLines
        spacing={44}
        initialSpacing={0}
        color1="skyblue"
        textColor1="green"
        dataPointsHeight={6}
        dataPointsWidth={6}
        dataPointsColor1="blue"
        textShiftY={-2}
        textShiftX={-5}
        textFontSize={13}
      />
    </View>
  );
}
