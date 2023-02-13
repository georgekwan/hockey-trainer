import * as React from 'react';
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native';
import { DataTable } from 'react-native-paper';

import FullLogo from '../components/FullLogo.js';

const HEIGHT = Dimensions.get('screen').height;

// You can import from local files
// Cannot use PatternProvider to pull data
export default function PlayerRankScreen() {
  // const { patternHistory, sortedPatternHistory } = useContext(PatternContext);

  return (
    <>
      <View style={styles.logo}>
        <FullLogo />
      </View>
      <ScrollView>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Player</DataTable.Title>
            <DataTable.Title numeric># of completed drills</DataTable.Title>
            <DataTable.Title sortDirection="descending" numeric>
              Accuracy
            </DataTable.Title>
          </DataTable.Header>
          {/* return (
        <DataTable.Row>
          <DataTable.Cell>George</DataTable.Cell>
          <DataTable.Cell numeric>15</DataTable.Cell>
          <DataTable.Cell numeric>80%</DataTable.Cell>
        </DataTable.Row>
        ); */}

          <DataTable.Row>
            <DataTable.Cell>George</DataTable.Cell>
            <DataTable.Cell numeric>15</DataTable.Cell>
            <DataTable.Cell numeric>80</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell>Gabe</DataTable.Cell>
            <DataTable.Cell numeric>10</DataTable.Cell>
            <DataTable.Cell numeric>82</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell>Emmanuel</DataTable.Cell>
            <DataTable.Cell numeric>11</DataTable.Cell>
            <DataTable.Cell numeric>79</DataTable.Cell>
          </DataTable.Row>
        </DataTable>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  logo: {
    marginTop: HEIGHT * 0.06,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
