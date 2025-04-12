import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Shop } from "./pages/Shop";
import { ShopCategory } from "./pages/ShopCategory";
import { Product } from "./pages/Product";
import { LoginSignup } from "./pages/LoginSignup";
import { Cart } from "./pages/Cart";
import men_banner from "./components/assets/Frontend_Assets/banner_mens.png";
import kid_banner from "./components/assets/Frontend_Assets/banner_kids.png";
import women_banner from './components/assets/Frontend_Assets/banner_women.png'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/men" element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path="/women" element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path="/kids" element={<ShopCategory  banner={kid_banner} category="kid" />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
