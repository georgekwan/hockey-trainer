import React, { useEffect, useState } from 'react';
import { Dimensions, Image, Pressable, StyleSheet, ScrollView, Text, View } from 'react-native';
import { Button, List } from 'react-native-paper';
import { theme } from '../core/theme';
import { ResultInputScreen } from './ResultInputScreen';
import * as patterns from '../../temp/drill_patterns.json';
import { useNavigation } from '@react-navigation/native';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const DrillSelectionScreen = () => {
  const navigation = useNavigation();
  const [patternName, setPatternName] = useState();
  const [timeout, setTimeout] = useState(0);

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: HEIGHT * 0.05,
        }}>
        <Image
          source={require('../../assets/harpia-logo.png')}
          style={{ resizeMode: 'contain', height: HEIGHT * 0.085 }}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          width: WIDTH * 0.95,
        }}>
        <List.Icon icon="hockey-puck" color="blue" />
        <Text
          style={{
            fontSize: WIDTH * 0.08,
            fontWeight: '800',
            textAlign: 'center',
            paddingVertical: WIDTH * 0.02,
          }}>
          SELECT PATTERN
        </Text>
      </View>
      <ScrollView
        persistentScrollbar={false}
        style={{
          marginHorizontal: 5,
          height: HEIGHT * 0.3,
          borderColor: 'red',
          borderWidth: 5,
        }}>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            alignContent: 'space-between',
          }}>
          <Button
            mode="elevated"
            // buttonColor={theme.colors.primary}
            onPress={() => setPatternName('Around the World')}
            style={styles.patternButton}>
            <View>
              <Text style={{ fontWeights: 'bold', fontSize: 20, color: 'black' }}>
                {'Around the World'}
              </Text>
            </View>
          </Button>
          <Button
            mode="elevated"
            buttonColor={theme.colors.primary}
            onPress={() => console.log("Pick'n Corners")}
            style={styles.patternButton}>
            <View>
              <Text style={{ fontWeights: 'bold', fontSize: 20, color: 'white' }}>
                {"Pick'n Corners"}
              </Text>
            </View>
          </Button>
          <Button
            mode="elevated"
            buttonColor={theme.colors.primary}
            onPress={() => console.log('Up Down')}
            style={styles.patternButton}>
            <View>
              <Text style={{ fontWeights: 'bold', fontSize: 20, color: 'white' }}>{'Up Down'}</Text>
            </View>
          </Button>
          <Button
            mode="elevated"
            buttonColor={theme.colors.primary}
            onPress={() => console.log('Downtown')}
            style={styles.patternButton}>
            <View>
              <Text style={{ fontWeights: 'bold', fontSize: 14, color: 'white' }}>
                {'Downtown'}
              </Text>
            </View>
          </Button>
          <Button
            mode="elevated"
            buttonColor={theme.colors.primary}
            onPress={() => console.log('Crash and Bang')}
            style={styles.patternButton}>
            <View>
              <Text style={{ fontWeights: 'bold', fontSize: 20, color: 'white' }}>
                {'Crash and Bang'}
              </Text>
            </View>
          </Button>
          <Button
            mode="elevated"
            buttonColor={theme.colors.primary}
            onPress={() => console.log('Titanic')}
            style={styles.patternButton}>
            <View>
              <Text style={{ fontWeights: 'bold', fontSize: 20, color: 'white' }}>{'Titanic'}</Text>
            </View>
          </Button>
          <Button
            mode="elevated"
            buttonColor={theme.colors.primary}
            onPress={() => console.log("Mom's Cookies")}
            style={styles.patternButton}>
            <View>
              <Text style={{ fontWeights: 'bold', fontSize: 20, color: 'white' }}>
                {"Mom's Cookies"}
              </Text>
            </View>
          </Button>
          <Button
            mode="elevated"
            buttonColor={theme.colors.primary}
            onPress={() => console.log('Riding Pine')}
            style={styles.patternButton}>
            <View>
              <Text style={{ fontWeights: 'bold', fontSize: 20, color: 'white' }}>
                {'Riding Pine'}
              </Text>
            </View>
          </Button>
          <Button
            mode="elevated"
            buttonColor={theme.colors.primary}
            onPress={() => console.log('Dump and Chase')}
            style={styles.patternButton}>
            <View>
              <Text style={{ fontWeights: 'bold', fontSize: 20, color: 'white' }}>
                {'Dump and Chase'}
              </Text>
            </View>
          </Button>
          <Button
            mode="elevated"
            buttonColor={theme.colors.primary}
            onPress={() => console.log('The Frustrating One')}
            style={styles.patternButton}>
            <View>
              <Text style={{ fontWeights: 'bold', fontSize: 20, color: 'white' }}>
                {'The Frustrating One'}
              </Text>
            </View>
          </Button>
        </View>
      </ScrollView>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: HEIGHT * 0.05,
        }}>
        <Text
          style={{
            fontSize: WIDTH * 0.08,
            fontWeight: '800',
            textAlign: 'center',
            paddingVertical: WIDTH * 0.02,
          }}>
          <List.Icon icon="timer" color="blue" />
          SELECT TIMEOUT
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          borderColor: 'orange',
          borderWidth: 5,
        }}>
        <Button
          mode="elevated"
          onPress={() => setTimeout(3000)}
          style={{
            width: WIDTH * 0.3,
            height: HEIGHT * 0.08,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            padding: 5,
            margin: 5,
          }}>
          {'3 SEC'}
        </Button>
        <Button
          mode="elevated"
          onPress={() => setTimeout(5000)}
          style={{
            width: WIDTH * 0.3,
            height: HEIGHT * 0.08,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            padding: 5,
            margin: 5,
          }}>
          {'5 SEC'}
        </Button>

        <Button
          mode="elevated"
          onPress={() => setTimeout(7000)}
          style={{
            width: WIDTH * 0.3,
            height: HEIGHT * 0.08,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            padding: 5,
            margin: 5,
          }}>
          {'7 SEC'}
        </Button>
      </View>

      <View style={{ margin: WIDTH * 0.025 }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Button
            mode="elevated"
            onPress={() => navigation.navigate('InDrillScreen', { patternName, timeout })}
            // onPress={() => console.log('TRAIN NOW')}
            style={{
              width: WIDTH * 0.8,
              height: HEIGHT * 0.06,
              borderRadius: 25,
            }}
            labelStyle={[styles.fontStyles, styles.md3FontStyles]}>
            {'TRAIN NOW'}
          </Button>
        </View>
      </View>
    </View>
  );
};

export default DrillSelectionScreen;

const styles = StyleSheet.create({
  md3FontStyles: {
    lineHeight: 32,
  },
  fontStyles: {
    fontWeight: '800',
    fontSize: 24,
  },
  patternButton: {
    width: WIDTH * 0.29,
    height: WIDTH * 0.29,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 5,
    margin: 5,
    // backgroundColor: 'pink',
    // borderWidth: 2,
    // borderColor: 'green',
  },
});
