import React from 'react';
import { HDTM_ACCOUNT_NO } from '@site/src/components/Payments/accountNo';

const TossButton: React.FC = () => {
  const handleTossOpen = () => {
    const tossUrl = `toss://send?accountNumber=${HDTM_ACCOUNT_NO}&bankCode=090`;
    window.location.href = tossUrl;
  };

  const isMobile = window.matchMedia('(max-width: 768px)').matches;

  if (!isMobile) {
    return null;
  }

  return (
    <button onClick={handleTossOpen} style={buttonStyle}>
      Open Toss
    </button>
  );
};

const buttonStyle: React.CSSProperties = {
  padding: '10px 20px',
  fontSize: '16px',
  backgroundColor: '#1A73E8',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default TossButton;
