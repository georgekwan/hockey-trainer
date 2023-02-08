import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { createContext, useContext, useEffect, useState } from 'react';
import * as C from '../helpers/constants.js';
import { AuthContext } from './AuthProvider.js';
import { FirebaseContext } from './FirebaseProvider.js';

export const PatternContext = createContext({});

export const PatternProvider = (props) => {
  const children = props.children;
  const [patternHistory, setPatternHistory] = useState();
  const [selectedPatternName, setSelectedPatternName] = useState();
  const { myAuth, myDb } = useContext(FirebaseContext);
  const { profile } = useContext(AuthContext);

  useEffect(() => {
    async function getPatternHistory() {
      console.log('PROFILE HERE IUD', profile.uid);
      // const userId = myAuth.currentUser.uid;
      const q = query(
        collection(myDb, C.COLL_DRILL_RESULTS),
        where(C.FLD_USER_ID, '==', profile.uid)
      );
      const querySnapshot = await getDocs(q);
      const theDocs = querySnapshot.docs.map((docSnap) => docSnap.data());
      // console.log(theDocs);
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
