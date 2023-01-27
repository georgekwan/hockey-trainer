import { initializeApp } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { getStorage, connectStorageEmulator } from 'firebase/storage';
import React, { createContext, useEffect, useState } from 'react';
import { Text } from 'react-native';

export const FirebaseContext = createContext({});

const firebaseConfig = {
  apiKey: 'AIzaSyBxqtRX_4QvpDIiirrQvZb0bpeL_zTDe0E',
  authDomain: 'project-three-dev-1092b.firebaseapp.com',
  projectId: 'project-three-dev-1092b',
  storageBucket: 'project-three-dev-1092b.appspot.com',
  messagingSenderId: '833559461370',
  appId: '1:833559461370:web:15759b03192e2bfe953843',
};

export const FirebaseProvider = (props) => {
  const children = props.children;

  const [firebaseInitializing, setFirebaseInitializing] = useState(true);
  const [usingEmulators, setUsingEmulators] = useState(false);
  const [emulatorsConfig, setEmulatorsConfig] = useState(false);

  const myApp = initializeApp(firebaseConfig);
  const myAuth = getAuth(myApp);
  const myDb = getFirestore(myApp);
  const myStorage = getStorage(myApp);

  useEffect(() => {
    const shouldUseEmulator = false; // or true :)

    if (shouldUseEmulator) {
      const mapEmulators = {};

      const FS_HOST = 'localhost';
      const FS_PORT = 5002;

      if (FS_HOST && FS_PORT) {
        connectFirestoreEmulator(myDb, FS_HOST, FS_PORT);
        // console.log(`firestore().useEmulator(${FS_HOST}, ${FS_PORT})`)
        mapEmulators.FS_HOST = FS_HOST;
        mapEmulators.FS_PORT = FS_PORT;
      }

      const AUTH_HOST = 'localhost';
      const AUTH_PORT = 9099; // or whatever you set the port to in firebase.json
      if (AUTH_HOST && AUTH_PORT) {
        const AUTH_URL = `http://${AUTH_HOST}:${AUTH_PORT}`;
        // console.log(`connectAuthEmulator(${AUTH_URL}, {disableWarnings: true})`)
        //    warns you not to use any real credentials -- we don't need that noise :)
        connectAuthEmulator(myAuth, AUTH_URL, { disableWarnings: true });

        mapEmulators.AUTH_HOST = AUTH_HOST;
        mapEmulators.AUTH_PORT = AUTH_PORT;
        mapEmulators.AUTH_URL = AUTH_URL;
      }

      const STORAGE_HOST = 'localhost';
      const STORAGE_PORT = 5004; // or whatever you have it set to in firebase.json
      if (STORAGE_HOST && STORAGE_PORT) {
        // console.log(`connectStorageEmulator(${STORAGE_HOST}, ${STORAGE_PORT})`)
        connectStorageEmulator(myStorage, STORAGE_HOST, STORAGE_PORT);

        mapEmulators.STORAGE_HOST = STORAGE_HOST;
        mapEmulators.STORAGE_PORT = STORAGE_PORT;
      }

      setUsingEmulators(true);
      setEmulatorsConfig(mapEmulators);

      console.log(
        'FIREBASE STARTUP: using Firebase emulator:',
        JSON.stringify(mapEmulators, null, 2)
      );
    }

    setFirebaseInitializing(false);
  }, [myAuth, myDb, myStorage]);

  if (firebaseInitializing) {
    return <Text>Loading</Text>;
  }

  const theValues = {
    usingEmulators,
    emulatorsConfig,
    myApp,
    myAuth,
    myDb,
    myStorage,
  };

  return <FirebaseContext.Provider value={theValues}>{children}</FirebaseContext.Provider>;
};
