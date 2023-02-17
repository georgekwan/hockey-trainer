import * as React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import { DataTable } from 'react-native-paper';

import FullLogo from '../components/FullLogo.js';
import { LeaderboardContext } from '../providers/RankingsProvider.js';

const HEIGHT = Dimensions.get('screen').height;
const WIDTH = Dimensions.get('screen').width;

//TODO - make array of data and map through it

export const Leaderboard = () => {
  const { leaderboard } = React.useContext(LeaderboardContext);

  leaderboard.sort((a, b) => b.accuracy - a.accuracy);
  console.log(leaderboard);

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
          {/* <DataTable.Row>
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
          <DataTable.Row>
            <DataTable.Cell>Romell</DataTable.Cell>
            <DataTable.Cell numeric>200</DataTable.Cell>
            <DataTable.Cell numeric>10</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Abby</DataTable.Cell>
            <DataTable.Cell numeric>25</DataTable.Cell>
            <DataTable.Cell numeric>75</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Cobi</DataTable.Cell>
            <DataTable.Cell numeric>5</DataTable.Cell>
            <DataTable.Cell numeric>95</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Abneet</DataTable.Cell>
            <DataTable.Cell numeric>16</DataTable.Cell>
            <DataTable.Cell numeric>73</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Afshin</DataTable.Cell>
            <DataTable.Cell numeric>30</DataTable.Cell>
            <DataTable.Cell numeric>68</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Danielle</DataTable.Cell>
            <DataTable.Cell numeric>33</DataTable.Cell>
            <DataTable.Cell numeric>78</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Ashish</DataTable.Cell>
            <DataTable.Cell numeric>8</DataTable.Cell>
            <DataTable.Cell numeric>89</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Jennifer</DataTable.Cell>
            <DataTable.Cell numeric>3</DataTable.Cell>
            <DataTable.Cell numeric>84</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Vince</DataTable.Cell>
            <DataTable.Cell numeric>23</DataTable.Cell>
            <DataTable.Cell numeric>91</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Jared</DataTable.Cell>
            <DataTable.Cell numeric>22</DataTable.Cell>
            <DataTable.Cell numeric>81</DataTable.Cell>
          </DataTable.Row> */}
        </DataTable>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  logo: {
    marginTop: HEIGHT * 0.06,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
