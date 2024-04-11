// app/src/pages/index.js
'use client'
import { useState } from 'react';
import { signUpWithEmailAndPassword, signInWithEmailAndPassword } from '../_utils/auth';
import Link from 'next/link'

export default function Home() {
  const [emailSignup, setEmailSignup] = useState('');
  const [passwordSignup, setPasswordSignup] = useState('');
  const [emailLogin, setEmailLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');
  const [error, setError] = useState('');
  const [signinMsg, setSignInMsg] = useState('');
  const [signupMsg, setSignupMsg] = useState('');
  const [loginValid, setLoginValid] = useState();


  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      setError('')
      await signUpWithEmailAndPassword(emailSignup, passwordSignup);
      setSignupMsg('Signed Up Successfully');

    } catch (error) {
      setError(`Error signing up: ${error.message}`);
      
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      setError('')

      await signInWithEmailAndPassword(emailLogin, passwordLogin);
      setSignInMsg('Signed In Successfully');
      setLoginValid('Login')
    } catch (error) {
      setError('Error Logging in');
    }
  };

  

  return (
    <div className=''>
      <h1 className='text-xl mb-2'>Welcome to Gong Cha Login/Signup</h1>
      <form onSubmit={handleSignUp} className='bg-slate-500 w-1/2 p-4 mb-10'>
        <h1 className='text-xl font-bold'>Signup</h1>
        <input className="text-black mb-4 p-2 rounded" type="email" placeholder="Email" value={emailSignup} onChange={(e) => setEmailSignup(e.target.value)} />
        <input className="text-black p-2 rounded ml-4" type="password" placeholder="Password" value={passwordSignup} onChange={(e) => setPasswordSignup(e.target.value)} />
        <button className="bg-blue-400 p-2 rounded ml-2" type="submit">Sign Up</button>
        <p className='text-green-400 font-bold'>{signupMsg}</p>
      </form>
      <form onSubmit={handleSignIn} className='bg-slate-500 w-1/2 p-4 mb-10'>
      <h1 className='text-xl font-bold'>Sign in</h1>
        <input className="text-black mb-4 p-2 rounded"required  type="email" placeholder="Email" value={emailLogin} onChange={(e) => setEmailLogin(e.target.value)} />
        <input className="text-black p-2 rounded ml-4" required type="password" placeholder="Password" value={passwordLogin} onChange={(e) => setPasswordLogin(e.target.value)} />
        <button className="bg-blue-400 p-2 rounded ml-2" type="submit">Sign In</button>
        <p className='text-green-400 font-bold'>{signinMsg}</p>

      </form>
      {error && <p className='text-red-500 font-bold bg-white w-fit p-2 rounded'>{error}</p>}


      {!loginValid && (
  <button disabled className='bg-blue-400 p-2 rounded mt-2 opacity-50 cursor-not-allowed' style={{ pointerEvents: 'none' }}>
    Login to continue
  </button>
)}
    {loginValid && <button className='bg-blue-400 p-2 rounded mt-2'><Link href={'src/Dashboard'}>Go to Dashboard</Link></button>
}
    </div>
  );
}
