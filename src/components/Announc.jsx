import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #86B049;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Come on Rcycle</Container>;
};

export default Announcement;