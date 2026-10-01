import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/header/header";
import Chekout from "./components/from";
import Footer from "./components/Footer/footer";
import Certificates from "./components/certificat/certificates";
import Products from "./components/product/product";
import CardPage from "./components/card-page/cadr-page";
import CartPage from "./components/cart/cart-page";
import { CartProvider } from "./context/cartcontext";
import Section1 from "./components/section1";
import Section2 from "./components/section2"
import Section3 from "./components/section3";
import Section456 from "./components/section456";

import "./App.css";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />

        <Routes>

          <Route path="/" element={<Navigate to="/company" replace />} />
          <Route path="/company" element={<>
            <Section1 />
            <Section2 />
            <Section456 />
          </>} />
          <Route path="section1" element={<Section1/>} />
          <Route path="section2" element={<Section2/>} />
          <Route path="section3" element={<Section3 />} />
          <Route path="section456" element={<Section456 />} />
          <Route path="/card-page" element={<CardPage />} />
          <Route path="/order" element={<Chekout />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product" element={<Products />} />
          <Route path="/certificates" element={<Certificates />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
