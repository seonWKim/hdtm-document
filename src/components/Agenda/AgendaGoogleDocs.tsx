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
  flexDirection: 'column',
  '@media only screen and (min-width: 900px)': {
    flexDirection: 'row',
  },
};

const iframeStyle: React.CSSProperties = {
  width: '100%',
  margin: '10px',
  '@media only screen and (min-width: 900px)': {
    width: '50%',
  },
};

export default AgendaGoogleDocs;
