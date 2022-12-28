import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import rcycleIcon from "../assets/images/recycle.jpg";
import { Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import UserProductService from "../services/userProductService";
import TokenService from "../services/tokenService";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 80%;

  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`;

const EmptyDiv = styled.div`
  height: 250px;
`;

const EmptyDivHorizontally = styled.div`
  width: 75px;
`;

const Product = () => {
  const location = useLocation();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const userProductService = new UserProductService();
  const tokenService = new TokenService();

  const addUserProductService = () => {
    userProductService
      .add(tokenService.getUserId, product.id, quantity)
      .then((res) => window.location.replace("/"))
      .catch((err) => console.log(err));
  };

  const addQuantity = () => {
    if (quantity >= 30) return;

    setQuantity(quantity + 1);
  };
  const removeQuantity = () => {
    if (quantity <= 1) return;

    setQuantity(quantity - 1);
  };

  useEffect(() => {
    setProduct(location.state);
  }, []);

  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Image src={rcycleIcon} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.recycleName}</Title>
          <EmptyDiv />
          <AddContainer>
            <Price>RC {product.recyclePoint}</Price>
            <EmptyDivHorizontally />
            <AmountContainer>
              <Remove onClick={removeQuantity} />
              <Amount>{quantity}</Amount>
              <Add onClick={addQuantity} />
            </AmountContainer>
          </AddContainer>
          <AddContainer>
            <AmountContainer>
              <Price>Total RC = {quantity * product.recyclePoint}</Price>
            </AmountContainer>
          </AddContainer>
          <Button onClick={() => addUserProductService()}>
            ADD TO YOUR WALLET
          </Button>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default Product;
