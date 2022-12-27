import { Add, Remove } from "@material-ui/icons";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import Announcement from "../components/Announc";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductService from "../services/productService";
import TypeService from "../services/typeService";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
  margin: 20px;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span`
  text-align: left;
`;

const ProductId = styled.span`
  text-align: left;
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Button = styled.button`
  border: none;
  padding: 8px 40px;
  background-color: #86b049;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  border-radius: 5px;
`;

const ButtonDelete = styled.button`
  border: none;
  padding: 8px 40px;
  background-color: #d20909;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  border-radius: 5px;
`;
const Input = styled.input`
  flex: 1;
  min-width: 10%;
  max-width: 20%;
  margin: 5px 8px;
  padding: 4px;
  font-size: 15px;
  :focus {
    outline: none !important;
  }
`;
const Select = styled.select`
  flex: 1;
  min-width: 10%;
  max-width: 20%;
  margin: 5px 0;
  padding: 4px;
  font-size: 15px;
  :focus {
    outline: none !important;
  }
`;
const Option = styled.option`
  flex: 1;
  min-width: 10%;
  max-width: 20%;
  margin: 5px 0;
  padding: 4px;
  font-size: 15px;
`;

const AdminProducts = () => {
  const typeService = new TypeService();
  const productService = new ProductService();
  const [types, setTypes] = useState([]);
  const [typeName, setTypeName] = useState("");
  const [selectedTypeId, setSelectedTypeId] = useState(0);
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState(0);
  const [products, setProducts] = useState([]);

  const clearInput = () => {
    setTypeName("");
    setProductName("");
    setPrice(0);
  };

  const addType = () => {
    typeService
      .add(typeName)
      .then((res) => {
        console.log(res);
        getTypes();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setTypeName("");
      });
  };

  const addProduct = () => {
    productService
      .add(productName, price, types[selectedTypeId].id)
      .then((res) => {
        setProducts(products);

        window.location.reload();
      })
      .catch((err) => console.log(err))
      .finally(() => clearInput());
  };

  const deleteProduct = (id) => {
    productService
      .delete(id)
      .then((res) => {
        console.log(res);
        setProducts(products);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  const getAllProducts = () => {
    productService
      .getAll(0, 10)
      .then((res) => {
        setProducts(res.data.items);
      })
      .catch((err) => console.log(err));
  };

  const getTypes = () => {
    typeService
      .getAll(0, 10)
      .then((res) => {
        setTypes(res.data.items);
        setSelectedTypeId(res.data.items[0].id);
        getAllProducts();
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getTypes();
  }, []);

  return (
    <Container>
      <Wrapper>
        <Title>Products</Title>
        <Details>
          <ProductName>
            <b>Type: </b>
            <Input
              placeholder="Write type name..."
              value={typeName}
              onChange={(e) => setTypeName(e.target.value)}
            />
            <Button onClick={() => addType()}>ADD</Button>
          </ProductName>
          <Hr />
          <ProductName>
            <b>Product: </b>
            <Select
              name="Type"
              id="Type"
              onChange={(e) =>
                setSelectedTypeId(
                  types.findIndex(
                    (type) => type.recycleTypeName == e.target.value
                  )
                )
              }
            >
              {types.map((t) => (
                <Option key={t.id} value={t.recycleTypeName}>
                  {t.recycleTypeName}
                </Option>
              ))}
            </Select>
            <Input
              placeholder="Name..."
              type={"text"}
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
            <Input
              placeholder="Price..."
              type={"number"}
              value={price}
              min={0}
              max={100}
              onChange={(e) => setPrice(e.target.value)}
            />
            <Button onClick={() => addProduct()}>ADD</Button>
          </ProductName>
        </Details>

        <Hr />
        {products.map((p) => (
          <>
            <Product key={p.id}>
              <ProductDetail>
                <Image src="" />
                <Details>
                  <ProductName>
                    <b>Product: </b> {p.recycleName}
                  </ProductName>
                  <ProductId>
                    <b>Type: </b> {p.recycleTypeName}
                  </ProductId>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductPrice>RC {p.recyclePoint}</ProductPrice>
              </PriceDetail>
              <PriceDetail>
                <ButtonDelete onClick={() => deleteProduct(p.id)}>
                  DELETE
                </ButtonDelete>
              </PriceDetail>
            </Product>
            <Hr />
          </>
        ))}
      </Wrapper>
    </Container>
  );
};

export default AdminProducts;
