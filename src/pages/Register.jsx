import styled from "styled-components";

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

const Form = styled.form`
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
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="ID number" />
          <Form>
            {/* TODO: Max length doesn't work */}
            <Input placeholder="birthday year" type={"number"} maxLength={4} />
            <CheckButton>CREATE</CheckButton>
          </Form>
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Button>CREATE</Button>
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
