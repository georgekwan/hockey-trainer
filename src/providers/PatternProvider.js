import { collection, getDocs, onSnapshot, query, where } from 'firebase/firestore';
import React, { createContext, useContext, useEffect, useState } from 'react';
import * as C from '../helpers/constants.js';
import { AuthContext } from './AuthProvider.js';
import { FirebaseContext } from './FirebaseProvider.js';

export const PatternContext = createContext({});

export const PatternProvider = (props) => {
  const children = props.children;
  const [patternHistory, setPatternHistory] = useState();
  const [selectedPatternName, setSelectedPatternName] = useState();
  const { myDb } = useContext(FirebaseContext);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    console.log('PROFILE HERE IUD', user.uid);
    const q = query(collection(myDb, C.COLL_DRILL_RESULTS), where(C.FLD_USER_ID, '==', user.uid));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const theDocs = querySnapshot.docs.map((docSnap) => docSnap.data());
      console.log('got docs: ', querySnapshot.size);
      setPatternHistory(theDocs);
    });
    return unsubscribe;
  }, []);

  const theValues = {
    patternHistory: patternHistory,
    setSelectedPatternName: setSelectedPatternName,
    selectedPatternName: selectedPatternName,
  };

  return <PatternContext.Provider value={theValues}>{children}</PatternContext.Provider>;
};
