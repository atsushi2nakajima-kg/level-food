import React from 'react';
import './style.css'
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg"
import { useCart } from "../../context/cartcontext";
const Header = () => {
    const { cart } = useCart();
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <div>
            <header className="header">
                <div className="logo">
                    <div className="logo-icon"><img src={Logo} alt="Level Food — Premium marble beef" /></div>
                </div>

                <nav>
                    <Link to="/company">О компании</Link>
                    <Link to="/product">Товары</Link>
                    <Link to="/certificates">Сертификаты</Link>
                </nav>

                <div className="header-right">
                    <Link to="/cart" className="cart" aria-label={`Корзина, товаров: ${cartCount}`}>
                        🛍
                        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                    </Link>
                    <Link to="/order" className="header-order">Сделать заказ</Link>
                </div>
            </header>
        </div>
    );
}

export default Header;
