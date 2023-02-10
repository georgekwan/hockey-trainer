import { View, Text, StyleSheet, Dimensions, PanResponder } from 'react-native';
import React, { useContext, useRef, useState } from 'react';
import { PatternContext } from '../providers/PatternProvider.js';
const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;
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

export const ChartView = () => {
  const { patternHistory } = useContext(PatternContext);

  const apx = (size = 0) => {
    let width = Dimensions.get('window').width;
    return (width / 750) * size;
  };

  const [dateList, setDateList] = useState([
    '08-31 15:09',
    '08-31 15:10',
    '08-31 15:11',
    '08-31 15:12',
    '08-31 15:13',
    '08-31 15:09',
    '08-31 15:10',
    '08-31 15:11',
    '08-31 15:12',
  ]);
  const [priceList, setPriceList] = useState([
    80.5, 60.63, 50.6, 40.6, 90.1, 85.4, 70.5, 95.1, 30.5, 75.8,
  ]);
  const size = useRef(dateList.length);

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
        priceList.map((_, index) => (
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
    <Path key="line" d={line} stroke="#FEBE18" strokeWidth={apx(6)} fill="none" />
  );

  const CustomGradient = () => (
    <Defs key="gradient">
      <LinearGradient id="gradient" x1="0" y="0%" x2="0%" y2="100%">
        {/* <Stop offset="0%" stopColor="rgb(134, 65, 244)" /> */}
        {/* <Stop offset="100%" stopColor="rgb(66, 194, 244)" /> */}

        <Stop offset="0%" stopColor="#FEBE18" stopOpacity={0.25} />
        <Stop offset="100%" stopColor="#FEBE18" stopOpacity={0} />
      </LinearGradient>
    </Defs>
  );

  const Tooltip = ({ x, y, ticks }) => {
    if (positionX < 0) {
      return null;
    }

    const date = dateList[positionX];

    return (
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
              data={priceList}
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
            style={{ width: apx(130) }}
            data={priceList}
            contentInset={verticalContentInset}
            svg={{ fontSize: apx(20), fill: '#617485' }}
          />
        </View>
        <XAxis
          style={{
            alignSelf: 'stretch',
            // marginTop: apx(57),
            width: apx(750),
            height: apx(60),
          }}
          numberOfTicks={7}
          data={priceList}
          formatLabel={(value, index) => dateList[value]}
          contentInset={{
            left: apx(36),
            right: apx(130),
          }}
          svg={{
            fontSize: apx(20),
            fill: '#617485',
            y: apx(20),
            // originY: 30,
          }}
        />
      </View>
    );
  };
};

// const styles = StyleSheet.create({
//   container: {
//     borderColor: 'red',
//     borderWidth: 8,
//     height: HEIGHT * 0.33,
//     marginHorizontal: WIDTH * 0.02,
//     textAlign: 'center',
//     justifyContents: 'center',
//     fontSize: 50,
//   },
// });
