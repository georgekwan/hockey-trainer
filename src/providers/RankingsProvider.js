import { collection, getDocs, onSnapshot, query, where } from 'firebase/firestore';
import React, { createContext, useContext, useEffect, useState } from 'react';
import * as C from '../helpers/constants.js';
import { AuthContext } from './AuthProvider.js';
import { FirebaseContext } from './FirebaseProvider.js';

export const LeaderboardContext = createContext({});

export const LeaderboardProvider = (props) => {
  const children = props.children;
  const { myDb } = useContext(FirebaseContext);
  const { user } = useContext(AuthContext);
  const [usersCollection, setUsersCollection] = useState();
  const [leaderboard, setLeaderboard] = useState([]);

  //Get array of all users
  useEffect(() => {
    if (!user) {
      // not logged in yet
      return;
    }
    const q = query(collection(myDb, C.COLL_USERS));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const theDocs = querySnapshot.docs.map((docSnap) => docSnap.data());
      setUsersCollection(theDocs);
    });
    return unsubscribe;
  }, [user]);

  //for each user, calculate their accuracy and number of drills
  useEffect(() => {
    const getPatterns = async () => {
      for (let i = 0; i < usersCollection.length; i++) {
        let user = usersCollection[i];
        let name = user.displayName;
        let totalAccuracy = 0;
        const q = query(
          collection(myDb, C.COLL_DRILL_RESULTS),
          where(C.FLD_USER_ID, '==', user.uid)
        );
        let querySnapshot = await getDocs(q);
        let usersPatternHistory = querySnapshot.docs.map((docSnap) => docSnap.data());

        if (usersPatternHistory.length > 0) {
          usersPatternHistory.forEach((pattern) => {
            totalAccuracy += (C.totalShots - pattern.totalMisses) / C.totalShots;
          });
          let accuracy = Math.round((totalAccuracy / usersPatternHistory.length) * 100);
          let numOfDrills = usersPatternHistory.length;
          setLeaderboard((prev) => [...prev, { name, accuracy, numOfDrills }]);
        }
      }
    };
    if (usersCollection) {
      setLeaderboard([]);
      getPatterns();
    }
  }, [usersCollection]);

  const theValues = {
    usersCollection: usersCollection,
    leaderboard: leaderboard,
  };

  return <LeaderboardContext.Provider value={theValues}>{children}</LeaderboardContext.Provider>;
};
