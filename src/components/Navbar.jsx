import { Search } from "@material-ui/icons";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Cookies from "universal-cookie";
import TokenService from "../services/tokenService";

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
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  color: black;
`;

const Navbar = () => {
  const cookies = new Cookies();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const tokenService = new TokenService();

  const logOut = () => {
    cookies.remove("token");
    setIsLoggedIn(false);
  };

  useEffect(() => {
    if (cookies.get("token")) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <Logo>BGMA.</Logo>
          </Link>
        </Left>
        <Right>
          {isLoggedIn ? (
            <>
              {tokenService.getUserRole() == "Admin" ? (
                <>
                  {" "}
                  <Link
                    to={"/adminVerification"}
                    style={{ textDecoration: "none" }}
                  >
                    <MenuItem>VERIFICATION</MenuItem>
                  </Link>
                  <Link
                    to={"/adminProducts"}
                    style={{ textDecoration: "none" }}
                  >
                    <MenuItem>PRODUCT</MenuItem>
                  </Link>
                </>
              ) : (
                <>
                  <Link to={"/productList"} style={{ textDecoration: "none" }}>
                    <MenuItem>PRODUCTS</MenuItem>
                  </Link>

                  <Link to={"/transaction"} style={{ textDecoration: "none" }}>
                    <MenuItem>TRANSACTION</MenuItem>
                  </Link>
                  <Link to={"/adminProfile"} style={{ textDecoration: "none" }}>
                    <MenuItem>PROFILE</MenuItem>
                  </Link>
                </>
              )}

              <Link to={"/"} style={{ textDecoration: "none" }}>
                <MenuItem onClick={logOut}>LOG OUT</MenuItem>
              </Link>
            </>
          ) : (
            <>
              <Link to={"/register"} style={{ textDecoration: "none" }}>
                <MenuItem>REGISTER</MenuItem>
              </Link>
              <Link to={"/login"} style={{ textDecoration: "none" }}>
                <MenuItem>LOGIN</MenuItem>
              </Link>
            </>
          )}
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
