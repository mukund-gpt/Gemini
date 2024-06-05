import React from 'react';
import './SignOut.css'
import { auth } from './firebaseConfig';
import { signOut } from 'firebase/auth';

const SignOut = () => {
  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <button onClick={handleSignOut} className='sign-out'>Sign Out</button>
  );
};

export default SignOut;
