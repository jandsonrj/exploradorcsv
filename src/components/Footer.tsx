import React from 'react';
import '../styles/style.css'

const Footer = () => {
    const footerStyle: React.CSSProperties = {
        backgroundColor: '#292928',
        textAlign: 'center',
        padding: '10px',
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100%',
    };

    const githubLink = "https://github.com/jandsonrj";

    return (
        <footer style={footerStyle}>
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="blinking-link">Desenvolvido por Jandev - 2023 &copy;</a>
        </footer>
    );
}

export default Footer;
