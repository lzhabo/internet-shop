import styled from "@emotion/styled";
import React from "react";
import { useObserver } from "mobx-react-lite";
import { useStores } from "@stores";
import Subtitle from "@components/Subtitle";
import BasketItem from "@src/screens/Basket/BasketItem";
import Btn from "@components/Btn";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;
const ScrollContainer = styled.div`
  overflow-y: auto;
`;
const BasketPage: React.FC<IProps> = () => {
  const { basketStore } = useStores();
  const SubmitCheckout = () => {};
  return useObserver(() => (
    <Root>
      {basketStore.basketItems.length === 0 ? (
        <Subtitle>Your cart is empty</Subtitle>
      ) : (
        <div>
          <ScrollContainer>
            {basketStore.basketItems.map((item, index) => (
              <BasketItem id={item.id} quantity={item.amount} key={index} />
            ))}
          </ScrollContainer>
          <Btn backgroundColor="#52b48a" color="#ffff" onClick={SubmitCheckout}>
            Check 0ut
          </Btn>
        </div>
      )}
    </Root>
  ));
};
export default BasketPage;
