import React, { useState } from 'react';
import { signInWithGoogle } from '@site/src/firebase/auth';
import Link from '@docusaurus/Link';
import styles from './common.module.css';

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
            <div className={styles.buttons}>
              <Link
                  className="button button--primary button--lg"
                  onClick={handleLogin}
              >
                {loading ? 'Signing in...' : 'Sign in with Google'}
              </Link>
            </div>
        )}
      </div>
  );
};

export default Login;
