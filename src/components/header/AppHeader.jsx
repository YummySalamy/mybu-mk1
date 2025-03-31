import React from "react";
import MyBuLogo from "../../assets/MyBu_logo.png";
import './assets/Header.css';

const AppHeader = () => {
    return (
        <header className="app-header">
          <div className="logo" style={{ marginLeft: '20px', height: '50px' }}>
            <img src={MyBuLogo} alt="Maibu Logo" style={{ height: 'auto' }} />
          </div>
        </header>
    )
}

export default AppHeader;