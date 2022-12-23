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

const RouterSize = styled.div`
  height: 800px;
`;

function App() {
  return (
    <div className="App">
      <Announcement />
      <Navbar />
      <RouterSize>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product" element={<Product />} />
          <Route path="/register" element={<Register />} />
          <Route path="/productList" element={<ProductList />} />
        </Routes>
      </RouterSize>
      <Footer />
    </div>
  );
}

export default App;
