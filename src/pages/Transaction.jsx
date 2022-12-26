import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
  margin: 20px;
  padding-bottom: 50px;
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
  margin: 10px 200px;
  padding-top: 50px;
`;

const ProductDetail = styled.div`
  flex: 4;
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
  margin: 0px 200px;
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
  padding: 20px 40px;
  background-color: white;
  color: black;
  cursor: pointer;
  margin: 10px 100px;
  border-radius: 5px;
  border: 3px solid #86b049;
  width: 20%;
  font-weight: bold;
  font-size: 18px;
`;
const Transaction = () => {
  return (
    <Container>
      <Wrapper>
        <Title>My Transactions</Title>

        <Button>FROM ME</Button>
        <Button>TO ME</Button>
        <Product>
          <ProductDetail>
            <Details>
              <ProductId>
                <b>Name Surname: </b> Burak İmdat
              </ProductId>
              <ProductName>
                <b>Date:</b>
                12/12/2022
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

export default Transaction;
