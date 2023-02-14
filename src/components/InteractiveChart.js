import React, { useContext, useEffect, useRef, useState } from 'react';
// import * as React from 'react'
import { PanResponder, Dimensions, Text, TouchableOpacity, View } from 'react-native';
import { PatternContext } from '../providers/PatternProvider.js';
import { AreaChart, XAxis, YAxis } from 'react-native-svg-charts';
import {
  Circle,
  Defs,
  G,
  Line,
  LinearGradient,
  Path,
  Rect,
  Stop,
  Text as SvgText,
} from 'react-native-svg';
import * as shape from 'd3-shape';

// Convert timestamp to date
function convertTimestamp(unixTimestamp) {
  if (patternHistory.length > 0) {
    const date = new Date(unixTimestamp * 1000);
    const options = { month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }
}

export default InteractiveChart;

function InteractiveChart() {
  const { patternHistory } = useContext(PatternContext);
  const apx = (size = 0) => {
    let width = Dimensions.get('window').width;
    return (width / 750) * size;
  };
  const [newDrillName, setNewDrillName] = useState([]);
  const [drillTime, setDrillTime] = useState([]);
  const [shotAccuracy, setShotAccuracy] = useState([]);
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
    for (let drill of sortedData) {
      let date = new Date(
        drill.date.seconds * 1000 + drill.date.nanoseconds / 1000000
      ).toLocaleString('en-GB', {
        year: 'numeric',
        day: '2-digit',
        month: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      });

      let misses = drill.totalMisses;
      let accuracy = ((15 - misses) / 15) * 100;
      accuracy = Math.round(accuracy * 100) / 100;
      newDrillTime.push(date);
      newShotAccuracy.push(accuracy);

      newDrillName.push(drill.drillId);
    }
    setNewDrillName(newDrillName);
    setDrillTime(newDrillTime);
    setShotAccuracy(newShotAccuracy);
    size.current = newDrillTime.length;
  }, [patternHistory]);

  // function snapshotToArray(snapshot) {
  //   let returnArr = [];

  //   snapshot.forEach((childSnapshot.) => {
  //     let item = childSnapshot.val();
  //     item.key = childSnapshot.key;
  //     returnArr.push(item);
  //   });

  //   return returnArr;
  // }

  const [positionX, setPositionX] = useState(-1); // The currently selected X coordinate position
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      onPanResponderTerminationRequest: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => {
        updatePosition(evt.nativeEvent.locationX);
        return true;
      },
      onPanResponderMove: (evt, gestureState) => {
        updatePosition(evt.nativeEvent.locationX);
        return true;
      },
      onPanResponderRelease: () => {
        setPositionX(-1);
      },
    })
  );

  const updatePosition = (x) => {
    const YAxisWidth = apx(130);
    const x0 = apx(0); // x0 position
    const chartWidth = apx(750) - YAxisWidth - x0;
    const xN = x0 + chartWidth; //xN position
    const xDistance = chartWidth / size.current; // The width of each coordinate point
    if (x <= x0) {
      x = x0;
    }
    if (x >= xN) {
      x = xN;
    }

    // console.log((x - x0) )

    // The selected coordinate x :
    // (x - x0)/ xDistance = value
    let value = ((x - x0) / xDistance).toFixed(0);
    if (value >= size.current - 1) {
      value = size.current - 1; // Out of chart range, automatic correction
    }

    setPositionX(Number(value));
  };

  const CustomGrid = ({ x, y, ticks }) => (
    <G>
      {
        // Horizontal grid
        ticks.map((tick) => (
          <Line key={tick} x1="0%" x2="100%" y1={y(tick)} y2={y(tick)} stroke="#EEF3F6" />
        ))
      }
      {
        // Vertical grid
        shotAccuracy.map((_, index) => (
          <Line
            key={index.toString()}
            y1="0%"
            y2="100%"
            x1={x(index)}
            x2={x(index)}
            stroke="#EEF3F6"
          />
        ))
      }
    </G>
  );

  const CustomLine = ({ line }) => (
    <Path key="line" d={line} stroke="#DC3535" strokeWidth={apx(6)} fill="none" />
  );

  const CustomGradient = () => (
    <Defs key="gradient">
      <LinearGradient id="gradient" x1="0" y="0%" x2="0%" y2="100%">
        {/* <Stop offset="0%" stopColor="rgb(134, 65, 244)" /> */}
        {/* <Stop offset="100%" stopColor="rgb(66, 194, 244)" /> */}

        <Stop offset="0%" stopColor="#DC3535" stopOpacity={1} />
        <Stop offset="55%" stopColor="#DC3535" stopOpacity={0} />
      </LinearGradient>
    </Defs>
  );

  const Tooltip = ({ x, y, ticks }) => {
    if (positionX < 0) {
      return null;
    }

    const date = drillTime[positionX];
    // console.log(date);

    return (
      <G x={x(positionX)} key="tooltip">
        <G
          x={positionX > size.current / 2 ? -apx(300 + 10) : apx(10)}
          y={y(shotAccuracy[positionX]) - apx(10)}>
          <Rect
            y={-apx(24 + 24 + 20) / 2}
            rx={apx(12)} // borderRadius
            ry={apx(12)} // borderRadius
            width={apx(350)}
            height={apx(150)}
            stroke="rgba(255, 255, 255, 0.8)"
            fill="rgba(99,102,106, .8)"
          />
          <SvgText
            x={apx(20)}
            fill="rgba(255, 255, 255, 255)"
            opacity={0.85}
            fontSize={apx(30)}
            fontWeight="bold">
            {newDrillName[positionX]}
          </SvgText>
          <SvgText
            x={apx(20)}
            y={apx(24 + 20)}
            fill="rgba(255, 255, 255, 255)"
            opacity={0.85}
            fontSize={apx(30)}>
            {date}
          </SvgText>
          <SvgText
            x={apx(20)}
            y={apx(24 + 80)}
            fontSize={apx(45)}
            fontWeight="bold"
            fill="rgba(255, 255, 255, 255)">
            {shotAccuracy[positionX]}%
          </SvgText>
        </G>

        <G x={x}>
          <Line
            y1={ticks[0]}
            y2={ticks[Number(ticks.length)]}
            stroke="#DC3535"
            strokeWidth={apx(4)}
            strokeDasharray={[6, 3]}
          />

          <Circle
            cy={y(shotAccuracy[positionX])}
            r={apx(20 / 2)}
            stroke="#fff"
            strokeWidth={apx(2)}
            fill="#DC3535"
          />
        </G>
      </G>
    );
  };

  const verticalContentInset = { top: apx(40), bottom: apx(40) };

  return (
    <View>
      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Drill Accuracy % Over Time</Text>
      </View>
      {/*
      {drillTime.map((time, index) => (
        <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text>{time}</Text>
          <Text>{shotAccuracy[index]}%</Text>
        </View>
      ))}*/}
      <View
        style={{
          backgroundColor: '#fff',
          alignItems: 'stretch',
        }}>
        <View
          style={{
            flexDirection: 'row',
            width: apx(750),
            height: apx(570),
            alignSelf: 'stretch',
          }}>
          <View style={{ flex: 1 }} {...panResponder.current.panHandlers}>
            <AreaChart
              style={{ flex: 1 }}
              data={shotAccuracy}
              // curve={shape.curveNatural}
              curve={shape.curveMonotoneX}
              contentInset={{ ...verticalContentInset }}
              svg={{ fill: 'url(#gradient)' }}>
              <CustomLine />
              <CustomGrid />
              <CustomGradient />
              <Tooltip />
            </AreaChart>
          </View>

          <YAxis
            style={{ width: apx(80) }}
            data={shotAccuracy}
            contentInset={verticalContentInset}
            svg={{ fontSize: apx(35), fill: '#617485' }}
          />
        </View>
        <XAxis
          style={{
            alignSelf: 'stretch',
            // marginTop: apx(57),
            width: apx(750),
            height: apx(60),
          }}
          numberOfTicks={5}
          data={shotAccuracy}
          formatLabel={(value, index) => {
            const date = new Date(drillTime[value]);
            const month = date.toLocaleString('default', { month: 'short' });
            const day = date.getDate();
            return `${month} ${day}`;
          }}
          contentInset={{
            left: apx(25),
            right: apx(25),
          }}
          svg={{
            fontSize: apx(20),
            fill: '#617485',
            y: apx(20),
            // originY: 30,
          }}
        />
      </View>
    </View>
  );
}
