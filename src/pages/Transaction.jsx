import { Add, Remove } from "@material-ui/icons";
import { useState, useEffect } from "react";
import styled from "styled-components";
import TransactionService from "../services/transactionService";
import TokenService from "../services/tokenService";
import dateFormat from "dateformat";
import { CircularProgress } from "@material-ui/core";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
  margin: 60px 0px 0px 0px;
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
  font-weight: bold;
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
  margin: -20px 50px;
  border-radius: 5px;
  border: 3px solid #86b049;
  width: 20%;
  font-weight: bold;
  font-size: 18px;
`;

const ButtonTransaction = styled.button`
  padding: 8px 25px;
  background-color: white;
  color: black;
  cursor: pointer;
  margin: 0px 10px;
  border-radius: 5px;
  border: 3px solid #86b049;
  width: 10%;
  font-weight: bold;
  font-size: 16px;
`;

const TitleTransaction = styled.h1`
  text-align: center;
  padding-bottom: 3px;
`;

const Br = styled.div`
  height: 100px;
`;

const Transaction = () => {
  const [transactions, setTransactions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(0);
  const [toPersonelId, setToPersonelId] = useState("");
  const [coinAmount, setCoinAmount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const transactionService = new TransactionService();
  const tokenService = new TokenService();

  const getTransactionMethod = () => {
    return selectedOption == 0
      ? transactionService.getAllByFromId(tokenService.getUserPersonelId())
      : transactionService.getAllByToId(tokenService.getUserPersonelId());
  };

  const clearInputs = () => {
    setSelectedOption(0);
    setToPersonelId("");
    setCoinAmount(0);
  };

  const addTransaction = () => {
    if (coinAmount <= 0 || toPersonelId == tokenService.getUserPersonelId()) {
      alert("Check the written information for creating transaction");
      clearInputs();
      return;
    }
    transactionService
      .add(tokenService.getUserPersonelId(), toPersonelId, coinAmount)
      .then((res) => {
        clearInputs();
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setIsLoading(true);
    getTransactionMethod()
      .then((res) => {
        setTransactions(selectedOption == 0 ? res.data : res.data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);

        console.log(err);
      });
  }, [selectedOption]);

  return (
    <Container>
      <Wrapper>
        <TitleTransaction>Add Transaction</TitleTransaction>
        <Input
          placeholder="To Personel ID"
          type={"text"}
          value={toPersonelId}
          onChange={(e) => setToPersonelId(e.target.value)}
        />
        <Input
          placeholder="Coin Amount"
          type={"number"}
          value={coinAmount}
          onChange={(e) => setCoinAmount(e.target.value)}
        />
        <ButtonTransaction onClick={addTransaction}>ADD</ButtonTransaction>
        <Title>My Transactions</Title>

        <Button onClick={() => setSelectedOption(0)}>FROM ME</Button>
        <Button onClick={() => setSelectedOption(1)}>TO ME</Button>
        {isLoading ? (
          <>
            <Br />
            <CircularProgress />
          </>
        ) : transactions.length == 0 ? (
          <Br />
        ) : (
          transactions.map((t) => (
            <>
              <Product key={t.id}>
                <ProductDetail>
                  <Details>
                    <ProductId>
                      <b>{selectedOption == 0 ? "To" : "From"} Personel ID: </b>
                      {selectedOption == 0 ? t.toPersonelId : t.fromPersonelId}
                    </ProductId>
                    <ProductName>
                      <b>Date: </b>
                      {dateFormat(t.createdAt, "mmmm dS, yyyy")}
                    </ProductName>
                  </Details>
                </ProductDetail>

                <PriceDetail>
                  <ProductPrice
                    style={{ color: selectedOption == 0 ? "red" : "green" }}
                  >
                    RC {t.coinAmount}
                  </ProductPrice>
                </PriceDetail>
              </Product>
              <Hr />
            </>
          ))
        )}
      </Wrapper>
    </Container>
  );
};

export default Transaction;
