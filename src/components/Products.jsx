import { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import ProductService from "../services/productService";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const Products = () => {
  const [products, setProuducts] = useState([]);
  const productService = new ProductService();

  useEffect(() => {
    productService
      .getAll(0, 10)
      .then((result) => {
        setProuducts(result.data.items);
        console.log(result.data.items[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
      {products.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
