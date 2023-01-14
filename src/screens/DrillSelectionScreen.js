import * as React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const DrillSelectionScreen = () => {
  return (
    <View>
      <View>
        <Text>DrillSelectionScreen</Text>
      </View>
      <View>
        <View>
          <Text>Drill One</Text>
        </View>
        <View>
          <Text>Drill Two</Text>
        </View>
        <View>
          <Text>Drill Three</Text>
        </View>
        <View>
          <Text>Drill Four</Text>
        </View>
        <View>
          <Text>Drill Fire</Text>
        </View>
        <View>
          <Text>Drill Six</Text>
        </View>
      </View>

      <View
        style={
          ({ flexDirection: 'row' },
          { margin: WIDTH * 0.005 },
          { paddingVertical: WIDTH * 0.001 })
        }
      >
        <View>
          <Button mode="contained" onPress={() => console.log('Pressed')}>
            3 SEC
          </Button>
        </View>
        <View>
          <Button mode="contained" onPress={() => console.log('Pressed')}>
            5 SEC
          </Button>
        </View>
        <View>
          <Button mode="contained" onPress={() => console.log('Pressed')}>
            7 SEC
          </Button>
        </View>
      </View>
      <View style={{ margin: WIDTH * 0.025 }}>
        <Button
          mode="contained"
          onPress={() => console.log('Pressed')}
          style={{ borderRadius: 25 }}
          labelStyle={[styles.fontStyles, styles.md3FontStyles]}
        >
          TRAIN NOW
        </Button>
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
});
