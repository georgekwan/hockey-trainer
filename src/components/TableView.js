import React, { useContext } from 'react';
import { Dimensions, ScrollView } from 'react-native';
import { DataTable } from 'react-native-paper';
import * as C from '../helpers/constants.js';
import { patternIDToText } from '../helpers/patternIDToText.js';
import { PatternContext } from '../providers/PatternProvider.js';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const TableView = () => {
  const { patternHistory, sortedPatternHistory } = useContext(PatternContext);
  // console.log('HERE IS THE SORTED PATTERN HISTORY context VARIABLE', sortedPatternHistory);

  // Convert timestamp to date
  function convertTimestamp(unixTimestamp) {
    if (patternHistory.length > 0) {
      const date = new Date(unixTimestamp * 1000);
      const options = { month: 'short', day: 'numeric' };
      return date.toLocaleDateString('en-US', options);
    }
  }

  return (
    <ScrollView
      style={{
        marginBottom: WIDTH * 0.01,
      }}>
      <DataTable
        style={{
          paddingHorizontal: WIDTH * 0.005,
        }}>
        <DataTable.Header>
          <DataTable.Title>Pattern</DataTable.Title>
          <DataTable.Title numeric>Accuracy</DataTable.Title>
          <DataTable.Title sortDirection="descending" numeric>
            Date
          </DataTable.Title>
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
};

export default React.memo(TableView);
