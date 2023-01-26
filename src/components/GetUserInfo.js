import React, { useState, useEffect, useContext } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { View, Text } from 'react-native';
import { FirebaseContext } from '../providers/FirebaseProvider.js';

const GetUserInfo = () => {
  const [user, setUser] = useState();
  const { myAuth, myDb } = useContext(FirebaseContext);
  console.log('auth is', myAuth);

  useEffect(() => {
    async function getUserProfile() {
      const userRef = doc(myDb, 'users', myAuth.currentUser.uid);

      const docSnap = await getDoc(userRef);
      console.log('docSnap', docSnap);
      if (!docSnap.exists) {
        console.log('No such document!');
      } else {
        const userData = docSnap.data();
        setUser({
          displayName: userData.displayName,
          email: userData.email,
          age: userData.age,
        });
      }
    }
    if (myAuth.currentUser) {
      getUserProfile();
    }
  }, [myAuth]);
  console.log('user auth!!!', myAuth);
  console.log('user', user);
  return (
    <View>
      <Text>{user?.displayName}</Text>
    </View>
  );
};

export default GetUserInfo;
