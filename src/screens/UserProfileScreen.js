import React, { createContext, useContext, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Avatar, IconButton } from 'react-native-paper';
import Button from '../components/Button.js';
import FullLogo from '../components/FullLogo.js';
import InteractiveChart from '../components/InteractiveChart.js';
import { TableView } from '../components/TableView.js';
import { theme } from '../core/theme';
import { AuthContext } from '../providers/AuthProvider.js';
import { PatternProvider } from '../providers/PatternProvider.js';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

export const UserProfileScreen = () => {
  const { profile } = useContext(AuthContext);
  const [tableView, setTableView] = useState(true);

  const visualizeData = (tableView) => {
    if (tableView) {
      return <TableView />;
    } else {
      return <InteractiveChart />;
    }
  };

  return (
    <>
      <View style={styles.logo}>
        <FullLogo />
      </View>
      <View style={styles.userInfo}>
        <Avatar.Image size={100} source={require('../../assets/avatar.jpeg')} />
        <View style={styles.nameAge}>
          <View style={styles.spaceBetweenRow}>
            <Text style={styles.boldText}>NAME:</Text>
            <Text style={styles.normalText}>{profile?.displayName}</Text>
          </View>
          <View style={styles.spaceBetweenRow}>
            <Text style={styles.boldText}>AGE:</Text>
            <Text style={styles.normalText}>{profile?.age}</Text>
          </View>
          <View style={styles.spaceBetweenRow}>
            <Text style={styles.boldText}>CLAN:</Text>
            <Text style={styles.normalText}>The Fire Pucks</Text>
          </View>
        </View>
      </View>
      <View style={styles.button}>
        <Button
          style={{ width: WIDTH * 0.8 }}
          icon="pencil"
          mode="contained"
          onPress={() => console.log('Pressed')}>
          EDIT PROFILE / HISTORY
        </Button>
      </View>
      <View style={styles.historyParent}>
        <Text style={styles.historyText}>HISTORY</Text>
        <View style={styles.viewButtonsParent}>
          <IconButton
            default
            type="contained"
            icon="table"
            iconColor="black"
            size={40}
            onPress={() => {
              setTableView(true);
              console.log('table view =', tableView);
            }}
          />
          <IconButton
            icon="chart-line"
            iconColor="black"
            size={40}
            onPress={() => {
              setTableView(false);
              console.log('table view =', tableView);
            }}
          />
        </View>
      </View>
      <PatternProvider>{visualizeData(tableView)}</PatternProvider>
    </>
  );
};

const styles = StyleSheet.create({
  logo: {
    marginTop: HEIGHT * 0.06,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  userInfo: {
    flexDirection: 'row',
    marginTop: HEIGHT * 0.02,
    marginHorizontal: WIDTH * 0.02,
    justifyContent: 'space-between',
  },
  nameAge: {
    width: WIDTH * 0.63,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  spaceBetweenRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  boldText: {
    fontSize: 20,
    fontWeight: '800',
  },
  normalText: {
    fontSize: 20,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: WIDTH * 0.02,
  },
  historyParent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: HEIGHT * 0.1,
    alignItems: 'center',
    paddingHorizontal: WIDTH * 0.03,
  },
  historyText: {
    fontSize: 26,
    fontWeight: '900',
    color: theme.colors.primary,
  },
  viewButtonsParent: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
