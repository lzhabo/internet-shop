import styled from "@emotion/styled";
import React from "react";
import { useObserver } from "mobx-react-lite";
import { useStores } from "@stores";
import BasketItem from "@src/screens/Basket/BasketItem";
import Btn from "@components/Btn";
import { FlexContainer } from "@components/FlexContaner";
import Title from "@components/Title";
import { ROUTES } from "@src/stores/RouterStore";
import { useHistory } from "react-router-dom";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 35px 25px;
`;
const Total = styled.div`
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  font-style: normal;
  color: #1c1b1b;
  transition: color 0.2s ease-in-out;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  padding: 25px 0;
`;

const BasketPage: React.FC<IProps> = () => {
  const { basketStore } = useStores();
  const history = useHistory();
  const SubmitCheckout = () => {
    history.push(ROUTES.CHECKOUT);
  };
  return useObserver(() => (
    <Root>
      {basketStore.basketItems.length === 0 ? (
        <Title>Your cart is empty</Title>
      ) : (
        <FlexContainer flexDirection="column" justifyContent="center">
          <FlexContainer alignItems="center" justifyContent="center">
            <Title>Cart</Title>
          </FlexContainer>
          {basketStore.basketItems.map((item, index) => (
            <BasketItem id={item.id} quantity={item.amount} key={index} />
          ))}
          <Total>Total : $ {basketStore.totalCost}</Total>
          <Btn style={{ maxWidth: 250 }} onClick={SubmitCheckout}>
            Check 0ut
          </Btn>
        </FlexContainer>
      )}
    </Root>
  ));
};
export default BasketPage;
