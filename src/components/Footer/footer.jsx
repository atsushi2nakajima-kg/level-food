import React from 'react';
import './style.css'
import Logo from "../../assets/logo.svg"
const Footer = () => {
    return (
        <div>
             <footer className="footer">

        <div className="footer-links">
          <a href="#">О компании</a>
          <a href="#">Товары</a>
          <a href="#">Сертификаты</a>
        </div>

        <div className="footer-logo">
          <h3>Level Food</h3>
          <div className="logo-icon"><img src={Logo} alt="" /></div>
          <small>Premium marble beef</small>
        </div>

        <div className="contacts">
          <p>8-939-748-21-49</p>
          <p>8-917-924-11-89</p>
          <p>level.food2023@yandex.ru</p>
          <p>Республика Татарстан, г. Казань</p>
          <p>ООО "ЛЕВЕЛ ФУД"</p>
        </div>

      </footer>
        </div>
    );
}

export default Footer;
