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
        style={[
          { flexDirection: 'row' },
          { alignItems: 'center' },
          { justifyContent: 'space-between' },
          { margin: WIDTH * 0.005 },
        ]}
      >
        <Button
          mode="contained"
          onPress={() => console.log('Pressed')}
          style={[{ width: WIDTH * 0.3 }, { borderRadius: 10 }]}
        >
          3 SEC
        </Button>

        <Button
          mode="contained"
          onPress={() => console.log('Pressed')}
          style={[{ width: WIDTH * 0.3 }, { borderRadius: 10 }]}
        >
          5 SEC
        </Button>

        <Button
          mode="contained"
          onPress={() => console.log('Pressed')}
          style={[{ width: WIDTH * 0.3 }, { borderRadius: 10 }]}
        >
          7 SEC
        </Button>
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
