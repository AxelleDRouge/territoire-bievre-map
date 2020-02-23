import React from 'react';
const logo = new Image(100, 100);
logo.src="./logo.PNG";

const Header:React.FC = () => {
    return <header className="header">
        <img src={logo.src} alt="l\'Assos REGAL" style={{height:"10vh"}}/>
        <h1>Territoire de la Bièvre</h1>
    </header>
}

export default Header;