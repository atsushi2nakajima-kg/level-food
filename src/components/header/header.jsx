import React from 'react';
import './style.css'
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg"
const Header = () => {
    return (
        <div>
            <header className="header">
                <div className="logo">
                    <div className="logo-icon"><img src={Logo} alt="" /></div>
                    <div>
                        <h2>Level Food</h2>
                        <p>Premium marble beef</p>
                    </div>
                </div>

                <nav>
                    <Link to="/company">О компании</Link>
                    <Link to="/product">Товары</Link>
                    <Link to="/certificates">Сертификаты</Link>
                </nav>

                <div className="header-right">
                    <div className="cart">🛍</div>
                    <button>Сделать заказ</button>
                </div>
            </header>
        </div>
    );
}

export default Header;
