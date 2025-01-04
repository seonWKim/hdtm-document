import React from 'react';

const VoteForm: React.FC = () => {
  return (
    <div style={containerStyle}>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSf13Lk2ZJDfb0PI7s49CpVpw9Y_rWxHQIDX7FvhZxnZD2YKIg/viewform?embedded=true"
        style={iframeStyle}
        width="640"
        height="1814"
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

export default VoteForm;
