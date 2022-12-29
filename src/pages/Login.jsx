import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import styled from "styled-components";
import Cookies from "universal-cookie";
import UserService from "../services/userService";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://www.realsimple.com/thmb/wivEhy86KowWw4crdEaKAE5gNBM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-to-recycle-beauty-products-2000-b5fea85212ad443caedc2400ab953359.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  border-radius: 5%;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  :focus {
    outline: none !important;
  }
`;

const Button = styled.button`
  border: none;
  padding: 15px 20px;
  background-color: #86b049;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const CustomLink = styled.p`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const userService = new UserService();
  const cookies = new Cookies();

  const login = () => {
    userService
      .login(email, password)
      .then((res) => {
        cookies.set("token", res.data.token);
        setIsLoggedIn(true);
        window.location.replace("/");
      })
      .catch((err) => console.error(err))
      .finally(() => {
        setEmail("");
        setPassword("");
        setIsLoggedIn(false);
      });
  };

  return (
    <Container>
      <Wrapper>
        <Title>LOGIN</Title>
        <Form>
          <Input
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <Input
            placeholder="password"
            type={"password"}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <Button onClick={login}>LOGIN</Button>
          <Link to={"/register"}>
            <CustomLink>CREATE A NEW ACCOUNT</CustomLink>
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
