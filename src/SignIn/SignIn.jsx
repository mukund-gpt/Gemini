import React, { useState } from 'react'
import { auth, provider } from './firebaseConfig';
import { signInWithPopup } from 'firebase/auth';

const SignIn = () => {
  const [isSigningIn, setIsSigningIn] = useState(false);

  const signInWithGoogle = async () => {
    setIsSigningIn(true);
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result.user); // User info
    } catch (error) {
      console.error("Error during sign-in:", error);
    } finally {
      setIsSigningIn(false);
    }
  };

  return (
    <div>
      <button onClick={signInWithGoogle} disabled={isSigningIn}>
        {isSigningIn ? 'Signing in...' : 'Sign in with Google'}
      </button>
    </div>
  );
};

export default SignIn;
