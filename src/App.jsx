import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Chekout from "./components/from";
import Footer from "./components/Footer/footer";
import Certificates from "./components/certificat/certificates";
import Products from "./components/product/product";
import CardPage from "./components/card-page/cadr-page";
import { CartProvider } from "./context/cartcontext";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Chekout />} />
          <Route path="/card-page" element={<CardPage />} />
          <Route path="/order" element={<Chekout />} />
          <Route path="/product" element={<Products />} />
          <Route path="/certificates" element={<Certificates />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;