import NavBar from "./assets/NavBar";
import Home from "./assets/Home";
import Footer from "./assets/Footer";
import MacbooksComp from "./assets/Macbooks";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from "./productDetails";
import AllProductsList from "./SerchedProducts";
import Search from "./assets/Search";
import ShoppingCart from "./assets/ShoppingCart";
import CheckOut from "./assets/CheckOut";
import OrderComplete from "./assets/OrderComplete"
import OrderCancelled from "./assets/OrderCancelled";

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/products/macbook" element={<MacbooksComp />} />
          <Route path="/products/iphones" element={<MacbooksComp />} />
          <Route path="/products/ipad" element={<MacbooksComp />} />
          <Route path="/products/watch" element={<MacbooksComp />} />
          <Route path="/products/others" element={<MacbooksComp />} />
          <Route path={`/product/:productId`} element={< ProductDetails/>} />
          <Route path="/products/apple-products" element={< AllProductsList/>} />
          <Route path="/shopping-cart" exact element={<ShoppingCart />} />
          <Route path="/products/search" element={<Search />} />
          <Route path="/products/completed" element={<OrderComplete />} />
          <Route path="/products/cancelled" element={<OrderCancelled />} />
          <Route path="/products/checkout" element={<CheckOut />} />
          <Route>404 Not Found!</Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
