import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";

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
  return (
    <Container>
      <Wrapper>
        <Title>Profile Detail</Title>
        <Product>
          <ProductDetail>
            <Details>
              <ProductId>
                <b>Personel ID: </b> 12345xx
              </ProductId>
              <ProductName>
                <b>Email:</b>
                contact@bgma.dev
              </ProductName>
            </Details>
          </ProductDetail>
          <ProductDetail>
            <Details>
              <ProductId>
                <b>First Name: </b> Burak
              </ProductId>
              <ProductName>
                <b>Last Name: </b> İMDAT
              </ProductName>
            </Details>
          </ProductDetail>
          <ProductDetail>
            <Details>
              <ProductId>
                <b>Kayıt Tarihi: </b> 26/12/2022
              </ProductId>
              <ProductName>
                <b>Role: </b> User
              </ProductName>
            </Details>
          </ProductDetail>
          <PriceDetail>
            <ProductPrice>RC 30</ProductPrice>
          </PriceDetail>
        </Product>
        <Hr />
      </Wrapper>
    </Container>
  );
};

export default AdminProfile;
