import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { createContext, useContext, useEffect, useState } from 'react';
import * as C from '../helpers/constants.js';
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
      const q = query(collection(myDb, C.COLL_DRILL_RESULTS), where(C.FLD_USER_ID, '==', userId));
      const querySnapshot = await getDocs(q);
      const theDocs = querySnapshot.docs.map((docSnap) => docSnap.data());
      setPatternHistory(theDocs);
    }
    getPatternHistory();
  }, [myAuth]);

  const theValues = {
    patternHistory: patternHistory,
    setSelectedPatternName: setSelectedPatternName,
    selectedPatternName: selectedPatternName,
  };

  return <PatternContext.Provider value={theValues}>{children}</PatternContext.Provider>;
};
