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
  const [tutor, setTutor] = useState();
  const [selected, setSelected] = React.useState(false);

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

      <View style={{ height: HEIGHT * 0.2 }}>
        <ScrollView
          persistentScrollbar={false}
          style={{
            marginHorizontal: 5,
            height: HEIGHT * 0.2,
          }}>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              alignContent: 'center',
            }}>
            <Button
              mode="elevated"
              buttonColor={theme.colors.primary}
              onPress={() => {
                setSelected(!selected);
                setPatternName('Around the World');
                console.log('selected Around the World pattern');
              }}
              style={{
                width: WIDTH * 0.435,
                height: WIDTH * 0.29,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                padding: 0,
                margin: 5,
                alignContent: 'center',
                backgroundColor: selected ? theme.colors.primary : '#696969',
              }}>
              <View>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 18,
                    color: 'white',
                  }}>
                  {'Around the World'}
                </Text>
              </View>
            </Button>
            <Button
              mode="elevated"
              buttonColor={theme.colors.primary}
              onPress={() => {
                setPatternName("Pick'n Corners");
                console.log('selected Pick n Corners pattern');
              }}
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
              onPress={() => {
                setSelected(!selected);
                setPatternName('Up Down');
                console.log('selected Up Down pattern');
              }}
              style={[
                { backgroundColor: selected ? theme.colors.primary : '#696969' },
                styles.patternButton,
              ]}>
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
              onPress={() => {
                setPatternName('Downtown');
                console.log('selected Downtown pattern');
              }}
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
              onPress={() => {
                setPatternName('Crash and Bang');
                console.log('selected Crash and Bang pattern');
              }}
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
              onPress={() => {
                setPatternName('Titanic');
                console.log('selected Titanic pattern');
              }}
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
              onPress={() => {
                setPatternName("Mom's Cookies");
                console.log("selected Mom's Cookies pattern");
              }}
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
              onPress={() => {
                setPatternName('Riding Pine');
                console.log('selected Riding Pine pattern');
              }}
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
              onPress={() => {
                setPatternName('Dump and Chase');
                console.log('selected Dump and Chase pattern');
              }}
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
              onPress={() => {
                setPatternName('The Frustrating One');
                console.log('selected The Frustrating One pattern');
              }}
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
          marginTop: HEIGHT * 0.01,
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
        }}>
        <Button
          mode="elevated"
          onPress={() => {
            setTimeout(3000);
            console.log('selected 3 sec timeout');
          }}
          buttonColor={theme.colors.primary}
          style={{
            width: WIDTH * 0.3,
            height: HEIGHT * 0.05,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
            padding: 0,
            margin: 5,
          }}
          labelStyle={{
            fontSize: 15,
            lineHeight: 15,
          }}>
          {' '}
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
            }}>
            {'3 SEC'}
          </Text>
        </Button>
        <Button
          mode="elevated"
          buttonColor={theme.colors.primary}
          onPress={() => {
            setTimeout(5000);
            console.log('selected 5 sec timeout');
          }}
          style={{
            width: WIDTH * 0.3,
            height: HEIGHT * 0.05,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
            padding: 0,
            margin: 5,
          }}
          labelStyle={{
            fontSize: 15,
            lineHeight: 15,
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
            }}>
            {'5 SEC'}
          </Text>
        </Button>

        <Button
          mode="elevated"
          buttonColor={theme.colors.primary}
          onPress={() => {
            setTimeout(7000);
            console.log('selected 7 sec timeout');
          }}
          style={{
            width: WIDTH * 0.3,
            height: HEIGHT * 0.05,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
            padding: 0,
            margin: 5,
          }}
          labelStyle={{
            fontSize: 15,
            lineHeight: 15,
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
            }}>
            {'7 SEC'}
          </Text>
        </Button>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          marginHorizontal: WIDTH * 0.05,
          marginTop: HEIGHT * 0.01,
          alignContent: 'center',
          paddingTop: HEIGHT * 0.015,
        }}>
        <List.Icon icon="hockey-sticks" color={theme.colors.primary} />
        <Text
          style={{
            fontSize: WIDTH * 0.08,
            fontWeight: '800',
            textAlign: 'center',
            paddingVertical: WIDTH * 0.02,
          }}>
          SELECT TUTOR
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Button
          mode="elevated"
          buttonColor={theme.colors.primary}
          onPress={() => {
            setTutor('5 hole');
            console.log('selected 5 hole tutor');
          }}
          style={{
            width: WIDTH * 0.45,
            height: HEIGHT * 0.05,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
            padding: 0,
            margin: 5,
          }}
          labelStyle={{
            fontSize: 15,
            lineHeight: 15,
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
            }}>
            {'5 HOLE'}
          </Text>
        </Button>

        <Button
          mode="elevated"
          buttonColor={theme.colors.primary}
          onPress={() => {
            setTutor('11 hole');
            console.log('selected 11 hole tutor');
          }}
          style={{
            width: WIDTH * 0.45,
            height: HEIGHT * 0.05,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
            padding: 0,
            margin: 5,
          }}
          labelStyle={{
            fontSize: 15,
            lineHeight: 15,
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
            }}>
            {'11 HOLE'}
          </Text>
        </Button>
      </View>

      <View style={{ margin: WIDTH * 0.025 }}>
        <View
          style={{
            marginTop: HEIGHT * 0.015,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Button
            mode="elevated"
            buttonColor={'#DCDCDC'}
            onPress={() => navigation.navigate('InDrillScreen', { patternName, timeout, tutor })}
            style={{
              width: WIDTH * 0.8,
              height: HEIGHT * 0.07,
              borderRadius: 25,
            }}
            labelStyle={{
              fontSize: 35,
              lineHeight: 35,
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: 'black',
                fontWeight: '800',
              }}>
              {'TRAIN NOW'}
            </Text>
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
