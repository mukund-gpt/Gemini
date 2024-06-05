import React, { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'
import SignIn from './SignIn/SignIn'
import { auth } from './SignIn/firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';


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
          <Sidebar />
          <Main />        
        </>
      ) : (
        <SignIn />
      )}
    </>
  )
}

export default App