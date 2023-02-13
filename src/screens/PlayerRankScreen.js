import * as React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { DataTable } from 'react-native-paper';

// You can import from local files

export default function PlayerRankScreen() {
  const { patternHistory, sortedPatternHistory } = useContext(PatternContext);

  return (
    <ScrollView>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Player</DataTable.Title>
          <DataTable.Title>Clan</DataTable.Title>
          <DataTable.Title>Accuracy</DataTable.Title>
        </DataTable.Header>

        {sortedPatternHistory?.map((ph, key) => {
          return (
            <DataTable.Row key={key}>
              <DataTable.Cell>{ph.drillId}</DataTable.Cell>
              <DataTable.Cell numeric>
                {Math.round(((C.totalShots - ph?.totalMisses) / C.totalShots) * 100)}%
              </DataTable.Cell>
              <DataTable.Cell numeric>{convertTimestamp(ph.date?.seconds || 0)}</DataTable.Cell>
            </DataTable.Row>
          );
        })}
      </DataTable>
    </ScrollView>
  );
}
