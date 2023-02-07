import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { FirebaseContext } from './FirebaseProvider.js';

export const PatternContext = createContext({});

export const PatternProvider = (props) => {
  const children = props.children;
  const [patternHistory, setPatternHistory] = useState();
  const [selectedPatternName, setSelectedPatternName] = useState();
  const { myAuth, myDb } = useContext(FirebaseContext);

  // ! User accuracy needs to be fix
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

  const theValues = {
    patternHistory,
    setSelectedPatternName,
    selectedPatternName,
  };

  return <PatternContext.Provider value={theValues}>{children}</PatternContext.Provider>;
};
