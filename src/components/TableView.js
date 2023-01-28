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

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

export const TableView = () => {
  const { myAuth, myDb } = useContext(FirebaseContext);
  // const [user, setUser] = useState();

  useEffect(() => {
    async function getPatternHistory() {
      const userId = myAuth.currentUser.uid;

      const q = query(collection(myDb, 'drillResults'), where('userId', '==', userId));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log('DOC ID===', doc.id, ' => ', doc.data());
      });
      // CHATGPT'S CODE:
      // const userRef = Firestore.collection('drillResults').where('userId', '==', userId);
      // const querySnapshot = await userRef.get();
      // querySnapshot.forEach((doc) => {
      //   console.log('LOGGING:', doc.data());
      // });

      // EMMANUEL'S CODE:
      // userRef.get().then((querySnapshot) => {
      //   QuerySnapshot.forEach((doc) => {
      //     console.log(doc.data());
      //   });
      // });
    }
    getPatternHistory();
  }, []);

  return (
    <ScrollView
      style={{
        marginBottom: WIDTH * 0.01,
        // borderColor: 'red',
        // borderWidth: 3,
        // height: HEIGHT * 0.9,
      }}>
      <DataTable
        style={{
          // paddingTop: WIDTH * 0.05,
          // borderColor: 'red',
          // borderWidth: 3,
          paddingHorizontal: WIDTH * 0.005,
        }}>
        <DataTable.Header>
          <DataTable.Title>Pattern</DataTable.Title>
          <DataTable.Title numeric>Accuracy</DataTable.Title>
          <DataTable.Title sortDirection="descending" numeric>
            Date
          </DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
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
        </DataTable.Row>
      </DataTable>
    </ScrollView>
  );
};

// const styles = StyleSheet.create({});

// const queryy = {
//   "_firestore": {
//     "app": [FirebaseAppImpl],
//     "databaseId": [$t],
//     "settings": [ga]
//     },
//   "_snapshot": {
//       "docChanges": [],
//       "docs": {
//         "comparator": [Function anonymous],
//         "keyedMap": [je],
//         "sortedSet": [je]
//       },
//       "excludesMetadataChanges": false,
//       "fromCache": false,
//       "hasCachedResults": true,
//       "mutatedKeys": {
//         "comparator": [Function comparator],
//         "data": [je]},
//         "oldDocs": {
//           "comparator": [Function anonymous],
//           "keyedMap": [je],
//           "sortedSet": [je]
//         },
//           "query": {
//             "_t": [nn],
//             "collectionGroup": null,
//             "dt": [Array],
//             "endAt": null,
//             "explicitOrderBy": [Array],
//             "filters": [Array],
//             "limit": null,
//             "limitType": "F",
//             "path": [ot],
//             "startAt": null
//           },
//           "syncStateChanged": true
//         },
//         "_userDataWriter": {
//           "firestore": [Object]
//         },
//         "metadata": {
//           "fromCache": false, "hasPendingWrites": false}, "query": {"_query": {"_t": [nn], "collectionGroup": null, "dt": [Array], "endAt": null, "explicitOrderBy": [Array], "filters": [Array], "limit": null, "limitType": "F", "path": [ot], "startAt": null}, "converter": null, "firestore": [Object], "type": "query"}}
