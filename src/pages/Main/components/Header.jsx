import React from 'react';
import '../styles/Header.css';

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img className="logo-img" src="/images/logo.png" alt="" />
                <a href="/" className="logo"> Bebê-Vindo </a>
            </div>

            <nav className="navbar">
                <a id='login-btn' href="/login">Login</a>
            </nav>
        </header>
    );
};

export default Header;