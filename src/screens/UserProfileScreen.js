import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { Avatar, DataTable, IconButton } from 'react-native-paper';

import Button from '../components/Button.js';
import GetUserInfo from '../components/GetUserInfo.js';
import { doc, getDoc } from 'firebase/firestore';
import { FirebaseContext } from '../providers/FirebaseProvider.js';
import FullLogo from '../components/FullLogo.js';
import { theme } from '../core/theme';
import { TableView } from '../components/TableView.js';
import { ChartView } from '../components/ChartView.js';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

export const UserProfileScreen = ({ displayName }) => {
  const { myAuth, myDb } = useContext(FirebaseContext);

  const [user, setUser] = useState();
  const [tableView, setTableView] = useState(true);

  // console.log('auth is', myAuth);

  useEffect(() => {
    async function getUserProfile() {
      const userRef = doc(myDb, 'users', myAuth.currentUser.uid);

      const docSnap = await getDoc(userRef);
      console.log('docSnap', docSnap);
      if (!docSnap.exists) {
        console.log('No such document!');
      } else {
        const userData = docSnap.data();
        setUser({
          displayName: userData.displayName,
          email: userData.email,
          age: userData.age,
        });
      }
    }
    if (myAuth.currentUser) {
      getUserProfile();
    }
  }, [myAuth]);
  console.log('user auth!!!', myAuth);
  console.log('user', user);

  const visualizeData = (tableView) => {
    if (tableView) {
      return <TableView />;
    } else {
      return <ChartView />;
    }
  };
  return (
    <>
      <View
        style={{
          marginTop: HEIGHT * 0.06,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <FullLogo />
      </View>
      <View
        style={{
          flexDirection: 'row',
          // borderColor: 'red',
          // borderWidth: 3,
          marginTop: HEIGHT * 0.02,
          marginHorizontal: WIDTH * 0.02,
          justifyContent: 'space-between',
        }}>
        <Avatar.Icon size={90} icon="face-man-shimmer" />
        <View
          style={{
            // borderColor: 'red',
            // borderWidth: 3,
            width: WIDTH * 0.63,
            flexDirection: 'column',
            justifyContent: 'space-around',
          }}>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '800',
              }}>
              NAME:
            </Text>
            <Text
              style={{
                fontSize: 20,
              }}>
              {user?.displayName}
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '800',
              }}>
              AGE:
            </Text>
            <Text
              style={{
                fontSize: 20,
              }}>
              {user?.age}
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '800',
              }}>
              CLAN:
            </Text>
            <Text
              style={{
                fontSize: 20,
              }}>
              The Fire Pucks
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: WIDTH * 0.02,
        }}>
        <Button
          style={{ width: WIDTH * 0.8 }}
          icon="pencil"
          mode="contained"
          onPress={() => console.log('Pressed')}>
          EDIT PROFILE / HISTORY
        </Button>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          // borderColor: 'red',
          // borderWidth: 3,
          height: HEIGHT * 0.1,
          // marginTop: HEIGHT * 0.3,
          alignItems: 'center',
          paddingHorizontal: WIDTH * 0.03,
        }}>
        <Text
          style={{
            // paddingTop: WIDTH * 0.8,
            fontSize: 26,
            fontWeight: '900',
            // paddingLeft: WIDTH * 0.1,
            color: theme.colors.primary,
          }}>
          HISTORY
        </Text>
        <View
          style={{
            flexDirection: 'row',
            // borderColor: 'red',
            // borderWidth: 3,
            justifyContent: 'center',
          }}>
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
      {visualizeData(tableView)}
      {/* <TableView /> */}
      {/* <ChartView /> */}
    </>
  );
};
