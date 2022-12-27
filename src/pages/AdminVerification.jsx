import { Add, Remove } from "@material-ui/icons";
import { useEffect, useState } from "react";
import styled from "styled-components";
import UserProductService from "../services/userProductService";
import dateFormat from "dateformat";

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

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Product = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 100px;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
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
  margin: 0px 100px;
`;

const Input = styled.input`
  flex: 1;
  max-width: 70%;
  margin: 5px 8px;
  padding: 4px;
  font-size: 15px;
  border-radius: 5px;
`;
const Button = styled.button`
  border: none;
  padding: 0px 40px;
  background-color: #86b049;
  color: white;
  cursor: pointer;
  margin: 10px 100px;
  border-radius: 5px;
`;
const AdminVerification = () => {
  const [userProducts, setUserProducts] = useState([]);
  const userProductService = new UserProductService();

  const verifyRequest = (userProductId, userId, productId, quantity, coin) => {
    userProductService.verifyUserProductRequest(
      userProductId,
      userId,
      productId,
      quantity,
      coin
    );
  };

  useEffect(() => {
    userProductService
      .getAllByDynamicFilter(0, 10)
      .then((res) => {
        console.log(res.data.items);
        setUserProducts(res.data.items);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <Container>
      <Wrapper>
        <Title>Verification</Title>
        {userProducts.map((userProduct) => (
          <Product>
            <ProductDetail>
              <Details>
                <ProductId>
                  <b>User ID: </b> {userProduct.userId}
                </ProductId>
                <ProductName>
                  <b>Date: </b>
                  {dateFormat(userProduct.createdAt, "mmmm dS, yyyy")}
                </ProductName>
              </Details>
            </ProductDetail>
            <ProductDetail>
              <Details>
                <ProductId>
                  <b>Product Name: </b> {userProduct.recycleName}
                </ProductId>
                <ProductName>
                  <b>Quantity: </b> {userProduct.quantity}
                </ProductName>
              </Details>
            </ProductDetail>
            <PriceDetail>
              <ProductPrice>
                RC {userProduct.recyclePoint * userProduct.quantity}
              </ProductPrice>
            </PriceDetail>
            <Button
              onClick={() =>
                verifyRequest(
                  userProduct.id,
                  userProduct.userId,
                  userProduct.recycleProductId,
                  userProduct.quantity,
                  userProduct.recyclePoint
                )
              }
            >
              VERIFY
            </Button>
          </Product>
        ))}

        <Hr />
      </Wrapper>
    </Container>
  );
};

export default AdminVerification;
