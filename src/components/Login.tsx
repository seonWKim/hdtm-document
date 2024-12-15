import React, { useState } from 'react';
import { signInWithGoogle } from '@site/src/firebase/auth';

const Login: React.FC = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      const result = await signInWithGoogle();
      setUser(result.user);
      console.log(result);
    } catch (error) {
      console.error('Error during sign-in: ', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {user ? (
        <div>
          <p>Welcome, {user.displayName}</p>
          <img
            src={user.photoURL}
            alt="User Avatar"
            style={{ borderRadius: '50%' }}
          />
        </div>
      ) : (
        <button
          onClick={handleLogin}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#4285F4',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          disabled={loading}
        >
          {loading ? 'Signing in...' : 'Sign in with Google'}
        </button>
      )}
    </div>
  );
};

export default Login;
