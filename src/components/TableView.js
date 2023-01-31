import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import { Dimensions, ScrollView } from 'react-native';
import { DataTable } from 'react-native-paper';
import { patternIDToText } from '../helpers/patternIDToText.js';
import { FirebaseContext } from '../providers/FirebaseProvider.js';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

export const TableView = () => {
  const { myAuth, myDb } = useContext(FirebaseContext);
  const [patternHistory, setPatternHistory] = useState();

  useEffect(() => {
    async function getPatternHistory() {
      const userId = myAuth.currentUser.uid;
      const q = query(collection(myDb, 'drillResults'), where('userId', '==', userId));
      const querySnapshot = await getDocs(q);
      const theDocs = querySnapshot.docs.map((docSnap) => docSnap.data());
      setPatternHistory(theDocs);
    }
    getPatternHistory();
  }, []);

  console.log('HERE IS THE PATTERN HISTORY STATE VARIABLE', patternHistory);

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

        {patternHistory?.map((ph, key) => {
          return (
            <DataTable.Row key={key}>
              <DataTable.Cell>{patternIDToText(ph.drillPatternId)}</DataTable.Cell>
              <DataTable.Cell numeric>92%</DataTable.Cell>
              <DataTable.Cell numeric>{convertTimestamp(ph.date.seconds)}</DataTable.Cell>
            </DataTable.Row>
          );
        })}

        {/* <DataTable.Row>
          <DataTable.Cell>(5)Around the World</DataTable.Cell>
          <DataTable.Cell numeric>87%</DataTable.Cell>
          <DataTable.Cell numeric>Sep 21</DataTable.Cell>
        </DataTable.Row>
      */}
      </DataTable>
    </ScrollView>
  );
};
