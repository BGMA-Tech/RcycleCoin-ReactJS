import { useState } from "react";
import styled from "styled-components";
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
  width: 40%;
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
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  max-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  :focus {
    outline: none !important;
  }
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 100%;
  border: none;
  padding: 15px 20px;
  background-color: #86b049;
  color: white;
  cursor: pointer;
  margin: 25px 30px 0px 25px;
`;
const CheckButton = styled.button`
  min-width: 40%;
  border: none;
  margin: 20px 10px 0px 6px;
  padding: 10px 10px;
  background-color: #86b049;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [year, setYear] = useState(0);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isVerify, setIsVerify] = useState(null);

  const userService = new UserService();

  const verifyIDNumber = () => {
    userService
      .getVerifyId(idNumber, name, lastName, year)
      .then((res) => setIsVerify(res.data.data));
  };

  const setYearWithControl = (text) => {
    let newText = text.length > 4 ? text.toString().substring(0, 4) : text;
    setYear(newText);
  };

  const register = () => {
    if (!isVerify) {
      alert("Please verify your ID number");
      return;
    }
    if (
      name == "" ||
      lastName == "" ||
      idNumber == "" ||
      year.length != 4 ||
      userName == "" ||
      email == "" ||
      password == "" ||
      confirmPassword == "" ||
      password != confirmPassword ||
      !email.includes("@") ||
      !email.includes(".")
    ) {
      alert("Please check the information you entered");
      return;
    }
    userService
      .register(email, password, name, lastName, "Personel", "")
      .then((res) => {
        console.log(res);
        window.location.replace("/login");
      })
      .catch((err) => console.log(err))
      .finally(() => {
        name = "";
        lastName = "";
        idNumber = "";
        userName = "";
        email = "";
        password = "";
        confirmPassword = "";
      });
  };
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            style={{
              color: isVerify == null ? "black" : isVerify ? "green" : "red",
            }}
          />
          <Input
            placeholder="last name"
            onChange={(e) => setLastName(e.target.value)}
            style={{
              color: isVerify == null ? "black" : isVerify ? "green" : "red",
            }}
            value={lastName}
          />
          <Input
            placeholder="ID number"
            onChange={(e) => setIdNumber(e.target.value)}
            style={{
              color: isVerify == null ? "black" : isVerify ? "green" : "red",
            }}
            maxLength={11}
            value={idNumber}
          />
          <Form>
            <Input
              placeholder="birthday year"
              type={"number"}
              maxLength={4}
              max={2200}
              size={4}
              minLength={4}
              value={year}
              onChange={(e) => setYearWithControl(e.target.value)}
              style={{
                color: isVerify == null ? "black" : isVerify ? "green" : "red",
              }}
            />
            <CheckButton onClick={() => verifyIDNumber()}>Check ID</CheckButton>
          </Form>
          <Input
            placeholder="username"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
          />
          <Input
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <Input
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
          />
          <Input
            placeholder="confirm password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            type="password"
          />
          <Button onClick={() => register()}>CREATE</Button>
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in <b>PRIVACY POLICY</b>
          </Agreement>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
