import * as React from 'react';
import { ScrollView } from 'react-native';
import { DataTable } from 'react-native-paper';

// You can import from local files
// Cannot use PatternProvider to pull data
export default function PlayerRankScreen() {
  // const { patternHistory, sortedPatternHistory } = useContext(PatternContext);

  return (
    <ScrollView>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Player</DataTable.Title>
          <DataTable.Title numeric># of completed drills</DataTable.Title>
          <DataTable.Title numeric>Accuracy</DataTable.Title>
        </DataTable.Header>
        return (
        <DataTable.Row>
          <DataTable.Cell>George</DataTable.Cell>
          <DataTable.Cell numeric>15</DataTable.Cell>
          <DataTable.Cell numeric>80%</DataTable.Cell>
        </DataTable.Row>
        );
      </DataTable>
    </ScrollView>
  );
}
