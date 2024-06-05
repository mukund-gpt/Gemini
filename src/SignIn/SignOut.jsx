import React from 'react';
import './SignIn-Out.css'
import { auth } from './firebaseConfig';
import { signOut } from 'firebase/auth';
import { assets } from '../assets/assets';

const SignOut = () => {
  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <img src={assets.logout_icon} onClick={handleSignOut} className='sign-out' />
  );
};

export default SignOut;
