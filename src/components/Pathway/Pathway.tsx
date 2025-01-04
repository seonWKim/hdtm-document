import React from 'react';

const Pathway: React.FC = () => {
    return (
        <div style={containerStyle}>
            <iframe
                src="https://drive.google.com/file/d/12hF4mxJ5Fchaga8kYEwUQv_UmqK4Cao2/preview"
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
    '@media only screen and (min-width: 900px)': {
        flexDirection: 'row',
    },
};

const iframeStyle: React.CSSProperties = {
    width: '100%',
    margin: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add elevation
    '@media only screen and (min-width: 900px)': {
        width: '50%',
    },
};

export default Pathway;
