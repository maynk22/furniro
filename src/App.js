import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartProvider from "./components/CartProvider";

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
