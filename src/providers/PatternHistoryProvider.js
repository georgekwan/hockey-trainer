import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { FirebaseContext } from './FirebaseProvider.js';

export const PatternHistoryContext = createContext({});

export const PatternHistoryProvider = (props) => {
  const children = props.children;
  const [patternHistory, setPatternHistory] = useState();
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
  }, [myAuth]);

  return (
    <PatternHistoryContext.Provider value={patternHistory}>
      {children}
    </PatternHistoryContext.Provider>
  );
};
