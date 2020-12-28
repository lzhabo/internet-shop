import styled from "@emotion/styled";
import React from "react";
import Title from "@components/Title";
import CloseIconBlack from "@components/icons/CloseIconBlack";
import { useObserver } from "mobx-react-lite";
import { useStores } from "@stores";
import { Row } from "@components/flex";
import Subtitle from "@components/Subtitle";
import BasketItem from "@src/screens/Basket/BasketItem";
import { ifError } from "assert";
import Btn from "@components/Btn";

interface IProps {
  onClose: () => void;
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 25%;
  padding: 0 16px;
  z-index: 3;
  @media (min-width: 660px) {
    left: 50%;
  }
  background: #ffff;
`;
const ScrollContainer = styled.div`
  overflow-y: auto;
`;
const Basket: React.FC<IProps> = ({ onClose }) => {
  const { basketStore } = useStores();
  const basketItems = useObserver(function () {
    return basketStore.basketItems;
  });

  return (
    <Root>
      <Row
        justifyContent="space-between"
        style={{ padding: "10px 0" }}
        alignItems="center"
      >
        <Title>Cart</Title>
        <CloseIconBlack onClick={onClose} />
      </Row>
      <Row>
        {basketItems.length === 0 ? (
          <Subtitle>Your cart is empty</Subtitle>
        ) : (
          <div>
            <ScrollContainer>
              {basketItems.map((item, index) => (
                <BasketItem id={item.id} quantity={item.amount} />
              ))}
            </ScrollContainer>
            <Btn backgroundColor="#52b48a" color="#ffff">
              Check 0ut {basketStore.totalCost}
            </Btn>
          </div>
        )}
      </Row>
    </Root>
  );
};
export default Basket;
