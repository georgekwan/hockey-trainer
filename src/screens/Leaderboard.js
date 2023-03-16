import * as React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import { DataTable } from 'react-native-paper';

import FullLogo from '../components/FullLogo.js';
import { LeaderboardContext } from '../providers/RankingsProvider.js';

const HEIGHT = Dimensions.get('screen').height;
const WIDTH = Dimensions.get('screen').width;

const Leaderboard = () => {
  const { leaderboard } = React.useContext(LeaderboardContext);

  leaderboard.sort((a, b) => {
    return b.accuracy - a.accuracy;
  });

  return (
    <>
      <View style={styles.logo}>
        <FullLogo />
      </View>
      <Text
        style={{
          fontSize: WIDTH * 0.08,
          fontWeight: '800',
          textAlign: 'center',
          paddingVertical: WIDTH * 0.02,
          marginTop: HEIGHT * 0.02,
        }}>
        LEADERBOARD
      </Text>
      <ScrollView style={{ padding: 10 }}>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Player</DataTable.Title>
            <DataTable.Title>Total Drills</DataTable.Title>
            <DataTable.Title sortDirection="descending" numeric>
              % Accuracy
            </DataTable.Title>
          </DataTable.Header>

          {leaderboard.map((player, key) => {
            return (
              <DataTable.Row key={key}>
                <DataTable.Cell>{player.name}</DataTable.Cell>
                <DataTable.Cell numeric>{player.numOfDrills}</DataTable.Cell>
                <DataTable.Cell numeric>{player.accuracy}</DataTable.Cell>
              </DataTable.Row>
            );
          })}
        </DataTable>
      </ScrollView>
    </>
  );
};

export default React.memo(Leaderboard);

const styles = StyleSheet.create({
  logo: {
    marginTop: HEIGHT * 0.06,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
