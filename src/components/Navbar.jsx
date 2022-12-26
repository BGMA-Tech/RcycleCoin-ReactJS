import { Search } from "@material-ui/icons";
import React from "react";
import { useState } from "react";
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

const Logo = styled.h1`
  font-weight: bold;
  color: black;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
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
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <Logo>BGMA.</Logo>
          </Link>
        </Left>
        <Right>
          <Link to={"/productList"} style={{ textDecoration: "none" }}>
            <MenuItem>CATEGORY</MenuItem>
          </Link>
          <Link to={"/register"} style={{ textDecoration: "none" }}>
            <MenuItem>REGISTER</MenuItem>
          </Link>
          <Link to={"/login"} style={{ textDecoration: "none" }}>
            <MenuItem>LOGIN</MenuItem>
          </Link>
          <Link to={"/adminDashboard"} style={{ textDecoration: "none" }}>
            <MenuItem>DASHBOARD</MenuItem>
          </Link>
          <Link to={"/adminVerification"} style={{ textDecoration: "none" }}>
            <MenuItem>VERIFICATION</MenuItem>
          </Link>
          <Link to={"/adminProfile"} style={{ textDecoration: "none" }}>
            <MenuItem>PROFILE</MenuItem>
          </Link>
          <Link to={"/transaction"} style={{ textDecoration: "none" }}>
            <MenuItem>TRANSACTION</MenuItem>
          </Link>
          <Link to={"/adminProducts"} style={{ textDecoration: "none" }}>
            <MenuItem>PRODUCT</MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
