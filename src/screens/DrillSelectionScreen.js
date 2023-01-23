import React, { useEffect, useState } from 'react';
import { Dimensions, Image, Pressable, StyleSheet, ScrollView, Text, View } from 'react-native';
import { Button, List } from 'react-native-paper';
import { theme } from '../core/theme';
import { ResultInputScreen } from './ResultInputScreen';
import * as patterns from '../../temp/drill_patterns.json';
import { useNavigation } from '@react-navigation/native';
import FullLogo from '../components/FullLogo.js';

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
          marginTop: HEIGHT * 0.06,
        }}>
        <FullLogo />
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          marginHorizontal: WIDTH * 0.05,
          marginTop: HEIGHT * 0.02,
        }}>
        <List.Icon icon="hockey-puck" color={theme.colors.primary} />
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

      <View style={{ height: HEIGHT * 0.25 }}>
        <ScrollView
          persistentScrollbar={false}
          style={{
            marginHorizontal: 5,
            height: HEIGHT * 0.2,
            borderColor: 'red',
            borderWidth: 5,
          }}>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              alignContent: 'center',
              // height: HEIGHT * 0.2,
            }}>
            <Button
              mode="elevated"
              // buttonColor={theme.colors.primary}
              onPress={() => setPatternName('Around the World')}
              style={styles.patternButton}>
              <View>
                <Text
                  style={{
                    fontWeights: 'bold',
                    textAlign: 'center',
                    fontSize: 18,
                    color: 'black',
                  }}>
                  {'Around the World'}
                </Text>
              </View>
            </Button>
            <Button
              mode="elevated"
              buttonColor={theme.colors.primary}
              onPress={() => setPatternName("Pick'n Corners")}
              style={styles.patternButton}>
              <View>
                <Text
                  style={{
                    fontWeights: 'bold',
                    textAlign: 'center',
                    fontSize: 18,
                    color: 'white',
                  }}>
                  {"Pick'n Corners"}
                </Text>
              </View>
            </Button>
            <Button
              mode="elevated"
              buttonColor={theme.colors.primary}
              onPress={() => setPatternName('Up Down')}
              style={styles.patternButton}>
              <View>
                <Text
                  style={{
                    fontWeights: 'bold',
                    textAlign: 'center',
                    fontSize: 18,
                    color: 'white',
                  }}>
                  {'Up Down'}
                </Text>
              </View>
            </Button>
            <Button
              mode="elevated"
              buttonColor={theme.colors.primary}
              onPress={() => setPatternName('Downtown')}
              style={styles.patternButton}>
              <View>
                <Text
                  style={{
                    fontWeights: 'bold',
                    textAlign: 'center',
                    fontSize: 18,
                    color: 'white',
                  }}>
                  {'Downtown'}
                </Text>
              </View>
            </Button>
            <Button
              mode="elevated"
              buttonColor={theme.colors.primary}
              onPress={() => setPatternName('Crash and Bang')}
              style={styles.patternButton}>
              <View>
                <Text
                  style={{
                    fontWeights: 'bold',
                    textAlign: 'center',
                    fontSize: 18,
                    color: 'white',
                  }}>
                  {'Crash and Bang'}
                </Text>
              </View>
            </Button>
            <Button
              mode="elevated"
              buttonColor={theme.colors.primary}
              onPress={() => setPatternName('Titanic')}
              style={styles.patternButton}>
              <View>
                <Text
                  style={{
                    fontWeights: 'bold',
                    textAlign: 'center',
                    fontSize: 18,
                    color: 'white',
                  }}>
                  {'Titanic'}
                </Text>
              </View>
            </Button>
            <Button
              mode="elevated"
              buttonColor={theme.colors.primary}
              onPress={() => setPatternName("Mom's Cookies")}
              style={styles.patternButton}>
              <View>
                <Text
                  style={{
                    fontWeights: 'bold',
                    textAlign: 'center',
                    fontSize: 18,
                    color: 'white',
                  }}>
                  {"Mom's Cookies"}
                </Text>
              </View>
            </Button>
            <Button
              mode="elevated"
              buttonColor={theme.colors.primary}
              onPress={() => setPatternName('Riding Pine')}
              style={styles.patternButton}>
              <View>
                <Text
                  style={{
                    fontWeights: 'bold',
                    textAlign: 'center',
                    alignItems: 'center',
                    fontSize: 18,
                    color: 'white',
                  }}>
                  {'Riding Pine'}
                </Text>
              </View>
            </Button>
            <Button
              mode="elevated"
              buttonColor={theme.colors.primary}
              onPress={() => setPatternName('Dump and Chase')}
              style={styles.patternButton}>
              <View>
                <Text
                  style={{
                    fontWeights: 'bold',
                    textAlign: 'center',
                    fontSize: 18,
                    color: 'white',
                  }}>
                  {'Dump and Chase'}
                </Text>
              </View>
            </Button>
            <Button
              mode="elevated"
              buttonColor={theme.colors.primary}
              onPress={() => setPatternName('The Frustrating One')}
              style={styles.patternButton}>
              <View>
                <Text
                  style={{
                    fontWeights: 'bold',
                    textAlign: 'center',
                    fontSize: 18,
                    color: 'white',
                  }}>
                  {'The Frustrating One'}
                </Text>
              </View>
            </Button>
          </View>
        </ScrollView>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          marginHorizontal: WIDTH * 0.05,
          marginTop: HEIGHT * 0.05,
          alignContent: 'center',
        }}>
        <List.Icon icon="timer" color={theme.colors.primary} />
        <Text
          style={{
            fontSize: WIDTH * 0.08,
            fontWeight: '800',
            textAlign: 'center',
            paddingVertical: WIDTH * 0.02,
          }}>
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
    width: WIDTH * 0.435,
    height: WIDTH * 0.29,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 0,
    margin: 5,
    alignContent: 'center',
  },
});
