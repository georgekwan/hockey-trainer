import { View, Text } from 'react-native';
import React, { createContext, useContext, useEffect } from 'react';
import { FirebaseContext } from './FirebaseProvider.js';
import { collection, getDocs, query } from 'firebase/firestore';

export const PatternHistoryContext = createContext({});

export const PatternHistoryProvider = () => {
  const { myAuth, myDb } = useContext(FirebaseContext);

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

  return (
    <View>
      <Text>PatternHistoryProvider</Text>
    </View>
  );
};
