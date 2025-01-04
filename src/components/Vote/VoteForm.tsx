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
  minWidth: '640px',
  minHeight: '1814px',
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

export default VoteForm;
