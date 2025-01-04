import React, { useState } from 'react';
import { HDTM_ACCOUNT_NO } from '@site/src/components/Payments/accountNo';

const AccountNoCopyClipboard: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const accountNumber = `${HDTM_ACCOUNT_NO}`;

  const handleCopy = () => {
    navigator.clipboard
        .writeText(accountNumber)
        .then(() => {
          setShowPopup(true);
          setTimeout(() => setShowPopup(false), 2000); // Hide popup after 2 seconds
        })
        .catch((err) => {
          console.error('Failed to copy: ', err);
        });
  };

  return (
      <div style={containerStyle}>
        <p>
          Please pay the room fee 6,000 won to Kakao pay&nbsp;
          <span onClick={handleCopy} style={paragraphStyle}>
          {accountNumber}
        </span>
        </p>
        {showPopup && <div style={popupStyle}>Account number copied!</div>}
      </div>
  );
};

const containerStyle: React.CSSProperties = {
  position: 'relative',
};

const paragraphStyle: React.CSSProperties = {
  cursor: 'pointer',
  textDecoration: 'underline',
};

const popupStyle: React.CSSProperties = {
  position: 'absolute',
  top: '100%',
  left: '50%',
  transform: 'translateX(-50%)',
  backgroundColor: '#000',
  color: '#fff',
  padding: '5px 10px',
  borderRadius: '5px',
  marginTop: '5px',
  fontSize: '12px',
};

export default AccountNoCopyClipboard;
