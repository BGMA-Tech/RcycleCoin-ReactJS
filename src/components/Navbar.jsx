import { Search} from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const Container = styled.div`
  height: 60px;
  margin-bottom: 20px;
`;
 
const Wrapper = styled.div`
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  
`;


const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  color: black;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  color: black;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
           <SearchContainer>
            <Input placeholder="Search" />
          </SearchContainer> 
        </Left>
        <Center>
          <Link to={"/"} style={{ textDecoration: 'none' }}>
            <Logo>BGMA.</Logo>
          </Link>
        </Center>
        <Right>
          <Link to={"/productList"} style={{ textDecoration: 'none' }}><MenuItem>CATEGORY</MenuItem></Link>
          <Link to={"/register"} style={{ textDecoration: 'none' }}><MenuItem>REGISTER</MenuItem></Link>
          <Link to={"/login"} style={{ textDecoration: 'none' }}><MenuItem>LOGIN</MenuItem></Link>
        
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;