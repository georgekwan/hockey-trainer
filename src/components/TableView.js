import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { DataTable } from 'react-native-paper';
import { FirebaseContext } from '../providers/FirebaseProvider.js';
import {
  collection,
  doc,
  Firestore,
  getDoc,
  getDocs,
  getFirestore,
  query,
  QuerySnapshot,
  where,
} from 'firebase/firestore';
import { patternIDToText } from '../helpers/patternIDToText.js';

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
      setPatternHistory(querySnapshot);
      // querySnapshot.forEach((doc) => {
      //   console.log('DOC ID===', doc.id, ' => ', doc.data());
      // });
    }
    getPatternHistory();
  }, []);

  patternHistory.forEach((doc) => {
    console.log('DOC ID HERE IT IS===', doc.id, ' => ', doc.data().drillPatternId);
  });
  console.log('HERE IS THE PATTERN HISTORY STATE VARIABLE', patternHistory);

  const renderTable = (patternHistory) => {
    if (patternHistory) {
      return patternHistory.forEach((doc) => {
        <DataTable.Row>
          <DataTable.Cell>{patternIDToText(doc.data().drillPatternId)}</DataTable.Cell>
          <DataTable.Cell numeric>92%</DataTable.Cell>
          <DataTable.Cell numeric>Sep 28</DataTable.Cell>
        </DataTable.Row>;
      });
    }
  };

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
        {renderTable(patternHistory)}
        {/* <DataTable.Row>
          <DataTable.Cell>(5)Around the World</DataTable.Cell>
          <DataTable.Cell numeric>87%</DataTable.Cell>
          <DataTable.Cell numeric>Sep 21</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>(11)Up Down</DataTable.Cell>
          <DataTable.Cell numeric>92%</DataTable.Cell>
          <DataTable.Cell numeric>Sep 28</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>(11)Titanic</DataTable.Cell>
          <DataTable.Cell numeric>76%</DataTable.Cell>
          <DataTable.Cell numeric>Oct 2</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>(5)Dump and Chase</DataTable.Cell>
          <DataTable.Cell numeric>89%</DataTable.Cell>
          <DataTable.Cell numeric>Oct 4</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>(11)Riding Pine</DataTable.Cell>
          <DataTable.Cell numeric>95%</DataTable.Cell>
          <DataTable.Cell numeric>Oct 5</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>(5)Frustrating One</DataTable.Cell>
          <DataTable.Cell numeric>90%</DataTable.Cell>
          <DataTable.Cell numeric>Oct 7</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>(11)Riding Pine</DataTable.Cell>
          <DataTable.Cell numeric>95%</DataTable.Cell>
          <DataTable.Cell numeric>Oct 5</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>(5)Frustrating One</DataTable.Cell>
          <DataTable.Cell numeric>90%</DataTable.Cell>
          <DataTable.Cell numeric>Oct 7</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>(11)Up Down</DataTable.Cell>
          <DataTable.Cell numeric>92%</DataTable.Cell>
          <DataTable.Cell numeric>Sep 28</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>(11)Titanic</DataTable.Cell>
          <DataTable.Cell numeric>76%</DataTable.Cell>
          <DataTable.Cell numeric>Oct 2</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>(5)Dump and Chase</DataTable.Cell>
          <DataTable.Cell numeric>89%</DataTable.Cell>
          <DataTable.Cell numeric>Oct 4</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>(11)Riding Pine</DataTable.Cell>
          <DataTable.Cell numeric>95%</DataTable.Cell>
          <DataTable.Cell numeric>Oct 5</DataTable.Cell>
        </DataTable.Row> */}
      </DataTable>
    </ScrollView>
  );
};
