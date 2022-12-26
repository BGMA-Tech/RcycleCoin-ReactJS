import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announc";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

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
  return (
    <Container>
      <Wrapper>
        <Title>Products</Title>
        <Details>
          <ProductName>
            <b>Type: </b>
            <Input placeholder="Write type name..." />
            <Button>ADD</Button>
          </ProductName>
          <Hr />
          <ProductName>
            <b>Product: </b>
            <Select name="Type" id="Type">
              <Option value="Bottle">Bottle</Option>
              <Option value="Glass">Glass</Option>
            </Select>
            <Input placeholder="Name..." type={"text"} />
            <Input placeholder="Price..." type={"number"} />
            <Button>ADD</Button>
          </ProductName>
        </Details>

        <Hr />
        <Product>
          <ProductDetail>
            <Image src="" />
            <Details>
              <ProductName>
                <b>Product:</b> JESSIE THUNDER SHOES
              </ProductName>
              <ProductId>
                <b>ID:</b> 93813718293
              </ProductId>
            </Details>
          </ProductDetail>
          <PriceDetail>
            <ProductPrice>RC 30</ProductPrice>
          </PriceDetail>
        </Product>
        <Hr />
        <Product>
          <ProductDetail>
            <Image src="" />
            <Details>
              <ProductName>
                <b>Product:</b> HAKURA T-SHIRT
              </ProductName>
              <ProductId>
                <b>ID:</b> 93813718293
              </ProductId>
            </Details>
          </ProductDetail>
          <PriceDetail>
            <ProductPrice>RC 20</ProductPrice>
          </PriceDetail>
        </Product>
      </Wrapper>
    </Container>
  );
};

export default AdminProducts;
