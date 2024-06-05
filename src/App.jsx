import React, { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'
import SignIn from './SignIn/SignIn'
import { auth } from './SignIn/firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import SignOut from './SignIn/SignOut';


const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      {user ? (
        <>
          <h2>Welcome, {user.displayName}</h2>
          <SignOut />
        </>
      ) : (
        <SignIn />
      )}
      
      {/* <SignIn />
      <Sidebar />
      <Main /> */}
    </>
  )
}

export default App