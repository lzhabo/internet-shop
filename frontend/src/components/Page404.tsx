import styled from "@emotion/styled";
import React from "react";
import Btn from "@components/Btn";
import { ROUTES } from "@stores/RouterStore";
import { useHistory } from "react-router-dom";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 250px;
  & > * {
    padding: 15px;
  }
`;
const Title = styled.div`
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
`;
const Page404: React.FC<IProps> = () => {
  const history = useHistory();
  console.log("404 called");
  return (
    <Root>
      <Title>404</Title>
      <Title>The page you are looking for cannot be found.</Title>
      <Btn
        onClick={() => history.push(ROUTES.ROOT)}
        backgroundColor={"#52b48A"}
      >
        Go to homepage
      </Btn>
    </Root>
  );
};
export default Page404;
