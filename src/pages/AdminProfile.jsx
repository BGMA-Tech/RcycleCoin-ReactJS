import { Add, Remove } from "@material-ui/icons";
import { useEffect, useState } from "react";
import styled from "styled-components";
import UserService from "../services/userService";
import jwtDecode from "jwt-decode";
import Cookies from "universal-cookie";
import TokenService from "../services/tokenService";
import dateFormat from "dateformat";
import { CircularProgress } from "@material-ui/core";

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
const AdminProfile = () => {
  const [user, setUser] = useState({
    info: {
      firstName: "",
    },
    coin: {
      totalCoin: 0,
    },
  });
  const userService = new UserService();
  const tokenService = new TokenService();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    userService
      .getById(tokenService.getUserId())
      .then((res) => {
        setUser(res.data.data.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <Wrapper>
        <Title>Profile Detail</Title>
        {isLoading ? (
          <CircularProgress color="primary" />
        ) : (
          <Product>
            <ProductDetail>
              <Details>
                <ProductId>
                  <b>Personel ID: </b> {user.personelId}
                </ProductId>
                <ProductName>
                  <b>Email: </b>
                  {user.email}
                </ProductName>
              </Details>
            </ProductDetail>
            <ProductDetail>
              <Details>
                <ProductId>
                  <b>First Name: </b> {user.info.firstName}
                </ProductId>
                <ProductName>
                  <b>Last Name: </b> {user.info.lastName}
                </ProductName>
              </Details>
            </ProductDetail>
            <ProductDetail>
              <Details>
                <ProductId>
                  <b>Kayıt Tarihi: </b>
                  {dateFormat(user.info.createdAt, "mmmm dS, yyyy")}
                </ProductId>
                <ProductName>
                  <b>Role: </b> {user.info.role}
                </ProductName>
              </Details>
            </ProductDetail>
            <PriceDetail>
              <ProductPrice>RC {user.coin.totalCoin}</ProductPrice>
            </PriceDetail>
          </Product>
        )}
        <Hr />
      </Wrapper>
    </Container>
  );
};

export default AdminProfile;
