import React from 'react';

const Pathway: React.FC = () => {
  return (
    <div style={containerStyle}>
      <iframe
        src="https://docs.google.com/presentation/d/1uiw5Exb7g8rAKj_JeCaOH1wlukfVgqj1/edit?usp=sharing&ouid=104107781890492594894&rtpof=true&sd=true&embedded=true"
        style={iframeStyle}
        width="640"
        height="480"
        allow="autoplay"
      >
        Loading…
      </iframe>
    </div>
  );
};

const containerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
};

const iframeStyle: React.CSSProperties = {
  width: '100%',
  margin: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add elevation
};

export default Pathway;
