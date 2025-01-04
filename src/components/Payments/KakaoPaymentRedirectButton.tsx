import React from 'react';
import { HDTM_ACCOUNT_NO } from '@site/src/components/Payments/accountNo';
import BrowserOnly from '@docusaurus/BrowserOnly';

const KakaoPaymentRedirectButton: React.FC = () => {
  const handleKakaoOpen = () => {
    const kakaoUrl = `kakaotalk://send?accountNumber=${HDTM_ACCOUNT_NO}&bankCode=090`;
    window.location.href = kakaoUrl;
  };

  return (
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
  );
};

const buttonStyle: React.CSSProperties = {
  padding: '10px 20px',
  fontSize: '16px',
  backgroundColor: '#FFEB00',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default KakaoPaymentRedirectButton;
