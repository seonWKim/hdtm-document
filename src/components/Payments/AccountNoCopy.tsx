import React, { useState } from 'react';
import { HDTM_ACCOUNT_NO } from '@site/src/components/Payments/accountNo';
import BrowserOnly from '@docusaurus/BrowserOnly';

const AccountNoCopy: React.FC = () => {
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

  const handleKakaoOpen = () => {
    navigator.clipboard.writeText(accountNumber).then(() => {
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        const kakaoUrl = `kakaotalk://send?accountNumber=${HDTM_ACCOUNT_NO}&bankCode=090`;
        window.location.href = kakaoUrl;
      }, 1000);
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

      <div>
        <BrowserOnly>
          {() => {
            const isMobile = window.matchMedia('(max-width: 768px)').matches;
            if (!isMobile) {
              return null;
            }
            return (
              <button onClick={handleKakaoOpen} style={buttonStyle}>
                Open KakaoTalk
              </button>
            );
          }}
        </BrowserOnly>
      </div>
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

const buttonStyle: React.CSSProperties = {
  padding: '10px 20px',
  fontSize: '16px',
  backgroundColor: '#FFEB00',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default AccountNoCopy;
