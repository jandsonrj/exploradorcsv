import React from 'react';

const Header = () => {
    const headerStyle: React.CSSProperties = {
        backgroundColor: '#6561de',
        color: 'black',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '6%'
    };

    return (
        <header style={headerStyle}>
            <h1 style={{ fontFamily: 'cursive', marginTop: '5px' }}>Explorador CSV</h1>
        </header>
    );
}

export default Header;
