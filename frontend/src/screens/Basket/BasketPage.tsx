import styled from "@emotion/styled";
import React from "react";
import { useObserver } from "mobx-react-lite";
import { useStores } from "@stores";
import BasketItem from "@src/screens/Basket/BasketItem";
import Btn from "@components/Btn";
import Title from "@components/Title";
import { FlexContainer } from "@components/FlexContaner";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: center;
`;

const BasketPage: React.FC<IProps> = () => {
  const { basketStore } = useStores();
  const SubmitCheckout = () => {};
  return useObserver(() => (
    <Root>
      {basketStore.basketItems.length === 0 ? (
        <Title>Your cart is empty</Title>
      ) : (
        <FlexContainer flexDirection="column" justifyContent="center">
          <Title>Cart</Title>
          {basketStore.basketItems.map((item, index) => (
            <BasketItem id={item.id} quantity={item.amount} key={index} />
          ))}
          <Btn onClick={SubmitCheckout}>Check 0ut</Btn>
        </FlexContainer>
      )}
    </Root>
  ));
};
export default BasketPage;
