import React, { useContext, useState, useRef } from 'react';
import { ImageBackground, Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
// import { Button as PaperButton } from 'react-native-paper';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';

import MissShotInput from '../components/MissShotInput';
import { FirebaseContext } from '../providers/FirebaseProvider';
import { AuthContext } from '../providers/AuthProvider';
import { patternSelector } from '../helpers/patternSelector.js';
import { PatternContext } from '../providers/PatternProvider.js';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const ResultInputScreen = ({ route }) => {
  const navigation = useNavigation();
  const { selectedPatternName } = useContext(PatternContext);

  route = route || {};
  const { selectedTutor } = route.params;
  const pattern = patternSelector(selectedTutor, selectedPatternName);
  const { profile } = useContext(AuthContext);
  const { myDb } = useContext(FirebaseContext);

  const totalShots = 15;
  const [numberOfShotsLeft, setNumberOfShotsLeft] = useState(totalShots);
  const [loading, setLoading] = useState(false);
  const [misses, setMisses] = useState({
    topLeft: 0,
    leftShoulder: 0,
    rightShoulder: 0,
    topRight: 0,
    middleLeft: 0,
    underBlocker: 0,
    underGlove: 0,
    middleRight: 0,
    bottomLeft: 0,
    fiveHole: 0,
    bottomRight: 0,
  });

  const {
    topLeft,
    leftShoulder,
    rightShoulder,
    topRight,
    middleLeft,
    underBlocker,
    underGlove,
    middleRight,
    bottomLeft,
    fiveHole,
    bottomRight,
  } = misses;

  const onSubmit = async () => {
    setLoading(true);

    const missesCopy = {
      drillId: selectedPatternName,
      misses: { ...misses },
      totalMisses: totalShots - numberOfShotsLeft,
      date: serverTimestamp(),
      shooter: { ...profile },
    };
    // console.log(missesCopy);

    const docRef = await addDoc(collection(myDb, 'drillResults'), missesCopy);
    setLoading(false);

    navigation.navigate('NavBarContainer', { initialIndex: 2 });
  };

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
        }}>
        <Text
          style={{
            fontSize: WIDTH * 0.07,
            fontWeight: '800',
            textAlign: 'center',
            paddingVertical: WIDTH * 0.02,
          }}>
          INPUT PATTERN RESULTS
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: WIDTH * 0.05,
            fontWeight: '800',
            textAlign: 'center',
            paddingVertical: WIDTH * 0.02,
          }}>
          Tap the dropdown button to select number of shots missed
        </Text>
      </View>

      <View
        style={{
          position: 'relative',
          height: HEIGHT * 0.35,
        }}>
        <ImageBackground
          source={require('../../assets/hockeynet/hockeynet-basic.png')}
          style={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          resizeMode="contain">
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'relative',
              zIndex: 3,
              width: '100%',
              height: '100%',
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                paddingTop: 25,
                paddingHorizontal: 10,
              }}>
              <View style={{ width: 70 }}>
                {pattern.sequence.includes('TOP LEFT') && (
                  <MissShotInput
                    totalShots={totalShots}
                    numberOfShotsLeft={numberOfShotsLeft}
                    setNumberOfShotsLeft={setNumberOfShotsLeft}
                    setMisses={(num) =>
                      setMisses((currval) => {
                        let newObj = { ...currval };
                        newObj['topLeft'] = num;
                        return newObj;
                      })
                    }
                  />
                )}
              </View>
              <View style={{ width: 70 }}>
                {pattern.sequence.includes('LEFT SHOULDER') && (
                  <MissShotInput
                    totalShots={totalShots}
                    numberOfShotsLeft={numberOfShotsLeft}
                    setNumberOfShotsLeft={setNumberOfShotsLeft}
                    setMisses={(num) =>
                      setMisses((currval) => {
                        let newObj = { ...currval };
                        newObj['leftShoulder'] = num;
                        return newObj;
                      })
                    }
                  />
                )}
              </View>
              <View style={{ width: 70 }}>
                {pattern.sequence.includes('RIGHT SHOULDER') && (
                  <MissShotInput
                    totalShots={totalShots}
                    numberOfShotsLeft={numberOfShotsLeft}
                    setNumberOfShotsLeft={setNumberOfShotsLeft}
                    setMisses={(num) =>
                      setMisses((currval) => {
                        let newObj = { ...currval };
                        newObj['rightShoulder'] = num;
                        return newObj;
                      })
                    }
                  />
                )}
              </View>
              <View style={{ width: 70 }}>
                {pattern.sequence.includes('TOP RIGHT') && (
                  <MissShotInput
                    totalShots={totalShots}
                    numberOfShotsLeft={numberOfShotsLeft}
                    setNumberOfShotsLeft={setNumberOfShotsLeft}
                    setMisses={(num) =>
                      setMisses((currval) => {
                        let newObj = { ...currval };
                        newObj['topRight'] = num;
                        return newObj;
                      })
                    }
                  />
                )}
              </View>
            </View>
            <View style={{ flex: 1 }}></View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                paddingHorizontal: 10,
              }}>
              <View style={{ width: 70 }}>
                {pattern.sequence.includes('MIDDLE LEFT') && (
                  <MissShotInput
                    totalShots={totalShots}
                    numberOfShotsLeft={numberOfShotsLeft}
                    setNumberOfShotsLeft={setNumberOfShotsLeft}
                    setMisses={(num) =>
                      setMisses((currval) => {
                        let newObj = { ...currval };
                        newObj['middleLeft'] = num;
                        return newObj;
                      })
                    }
                  />
                )}
              </View>
              <View style={{ width: 70 }}>
                {pattern.sequence.includes('UNDER BLOCKER') && (
                  <MissShotInput
                    totalShots={totalShots}
                    numberOfShotsLeft={numberOfShotsLeft}
                    setNumberOfShotsLeft={setNumberOfShotsLeft}
                    style={{ marginTop: 20 }}
                    setMisses={(num) =>
                      setMisses((currval) => {
                        let newObj = { ...currval };
                        newObj['underBlocker'] = num;
                        return newObj;
                      })
                    }
                  />
                )}
              </View>
              <View style={{ width: 70 }}>
                {pattern.sequence.includes('UNDERGLOVE') && (
                  <MissShotInput
                    totalShots={totalShots}
                    numberOfShotsLeft={numberOfShotsLeft}
                    setNumberOfShotsLeft={setNumberOfShotsLeft}
                    style={{ marginTop: 20 }}
                    setMisses={(num) =>
                      setMisses((currval) => {
                        let newObj = { ...currval };
                        newObj['underGlove'] = num;
                        return newObj;
                      })
                    }
                  />
                )}
              </View>
              <View style={{ width: 70 }}>
                {pattern.sequence.includes('MIDDLE RIGHT') && (
                  <MissShotInput
                    totalShots={totalShots}
                    numberOfShotsLeft={numberOfShotsLeft}
                    setNumberOfShotsLeft={setNumberOfShotsLeft}
                    setMisses={(num) =>
                      setMisses((currval) => {
                        let newObj = { ...currval };
                        newObj['middleRight'] = num;
                        return newObj;
                      })
                    }
                  />
                )}
              </View>
            </View>

            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                paddingHorizontal: 10,
                paddingBottom: 20,
              }}>
              <View style={{ width: 70 }}>
                {pattern.sequence.includes('BOTTOM LEFT') && (
                  <MissShotInput
                    totalShots={totalShots}
                    numberOfShotsLeft={numberOfShotsLeft}
                    setNumberOfShotsLeft={setNumberOfShotsLeft}
                    style={{ marginTop: 30 }}
                    setMisses={(num) =>
                      setMisses((currval) => {
                        let newObj = { ...currval };
                        newObj['bottomLeft'] = num;
                        return newObj;
                      })
                    }
                  />
                )}
              </View>

              <View style={{ width: 70 }}>
                {pattern.sequence.includes('FIVE HOLE') && (
                  <MissShotInput
                    totalShots={totalShots}
                    numberOfShotsLeft={numberOfShotsLeft}
                    setNumberOfShotsLeft={setNumberOfShotsLeft}
                    setMisses={(num) =>
                      setMisses((currval) => {
                        let newObj = { ...currval };
                        newObj['fiveHole'] = num;
                        return newObj;
                      })
                    }
                  />
                )}
              </View>
              <View style={{ width: 70 }}>
                {pattern.sequence.includes('BOTTOM RIGHT') && (
                  <MissShotInput
                    totalShots={totalShots}
                    numberOfShotsLeft={numberOfShotsLeft}
                    setNumberOfShotsLeft={setNumberOfShotsLeft}
                    style={{ marginTop: 30 }}
                    setMisses={(num) =>
                      setMisses((currval) => {
                        let newObj = { ...currval };
                        newObj['bottomRight'] = num;
                        return newObj;
                      })
                    }
                  />
                )}
              </View>
            </View>
          </View>
        </ImageBackground>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            zIndex: 0,
          }}></View>
      </View>

      <View style={{ margin: WIDTH * 0.1, paddingBottom: HEIGHT * 0.1 }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Button
            mode="contained"
            onPress={onSubmit}
            style={{
              width: WIDTH * 0.8,
              height: HEIGHT * 0.06,
              borderRadius: 25,
            }}
            labelStyle={{
              fontSize: 30,
              fontWeight: 'bold',
              lineHeight: 30,
            }}>
            INPUT
          </Button>
        </View>
      </View>
    </View>
  );
};

export default React.memo(ResultInputScreen);

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
    buttonColor: 'blue',
  },
});
