import { Routes, Route } from "react-router";
import "./App.css";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import styled from "styled-components";
import Announcement from "./components/Announc";
import AdminDashboard from "./pages/AdminDashboard";
import AdminVerification from "./pages/AdminVerification";
import AdminProducts from "./pages/AdminProducts";
import AdminProfile from "./pages/AdminProfile";
import Transaction from "./pages/Transaction";

const RoutesSize = styled.div`
  min-height: 700px;
`;

function App() {
  return (
    <div className="App">
      <Announcement />
      <Navbar />
      <RoutesSize>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product" element={<Product />} />
          <Route path="/register" element={<Register />} />
          <Route path="/productList" element={<ProductList />} />
          <Route path="/adminDashboard" element={<AdminDashboard />} />
          <Route path="/adminVerification" element={<AdminVerification />} />
          <Route path="/adminProducts" element={<AdminProducts />} />
          <Route path="/adminProfile" element={<AdminProfile />} />
          <Route path="/transaction" element={<Transaction />} />
        </Routes>
      </RoutesSize>
      <Footer />
    </div>
  );
}

export default App;
