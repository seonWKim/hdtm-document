import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import Login from '@site/src/components/Login';
import Link from '@docusaurus/Link';

const Feedback: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleFeedbackSubmit = () => {
    console.log('Feedback submitted:', feedback);
    // Add your feedback submission logic here
  };

  if (!user) {
    return <Login />;
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <textarea
          placeholder="Best toastmaster meetings ever!!"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          className="form-control"
          style={{
            width: '100%',
            height: '100px',
            marginBottom: '10px',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ced4da',
            fontSize: '16px',
          }}
        />
        <div style={{ alignSelf: 'flex-end' }}>
          <Link
            className="button button--primary button--lg"
            onClick={handleFeedbackSubmit}
          >
            Submit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
