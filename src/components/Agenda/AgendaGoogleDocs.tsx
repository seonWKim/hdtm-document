import React from 'react';

const AgendaGoogleDocs: React.FC = () => {
  return (
      <div style={containerStyle}>
        <iframe
            src="https://docs.google.com/spreadsheets/d/1iFlxdbKlpt89oWt9oZSxHJP8-bclmeDlyd6iz0S_LKM/edit?usp=sharing&embedded=true"
            style={iframeStyle}
            width="1048"
            height="1414"
        >
          Loading…
        </iframe>
      </div>
  );
};

const containerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column'
};

const iframeStyle: React.CSSProperties = {
  width: '100%',
  margin: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
};

export default AgendaGoogleDocs;
