import React, { useState } from 'react'
import '@dotlottie/player-component';
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
    <div className='signIn-container'>
      <button className='sign-in' onClick={signInWithGoogle} disabled={isSigningIn}>
        <dotlottie-player
          src="https://lottie.host/d3dd437c-30b1-4a8f-b0d9-b49c4e9754c4/dY11TBiqw9.json"
          background="transparent"
          speed="0.5"
          style={{ width: '300px', height: '300px' }}
          loop
          autoplay>
        </dotlottie-player>

        {isSigningIn ? 'Signing in...' : 'Sign in with Google'}
      </button>
    </div>
  );
};

export default SignIn;
