import styled from "@emotion/styled";
import React from "react";
import Title from "@components/Title";
import CloseIconBlack from "@components/icons/CloseIconBlack";
import { useObserver } from "mobx-react-lite";
import { useStores } from "@stores";
import BasketItem from "@src/screens/Basket/BasketItem";
import Btn from "@components/Btn";
import { ROUTES } from "@stores/RouterStore";
import { useHistory } from "react-router-dom";
import { FlexContainer } from "@components/FlexContaner";

interface IProps {
  onClose: () => void;
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  justify-content: space-between;
  top: 0;
  bottom: 0;
  right: 0;
  left: 15%;
  z-index: 10001;
  @media (min-width: 660px) {
    left: 50%;
  }
  @media (min-width: 1440px) {
    left: 70%;
  }

  background: #ffff;
`;
const ScrollContainer = styled.div`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  //justify-content: center;
  //align-items: flex-start;
`;
const BasketHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);
  min-height: 65px;
  padding: 16px 24px;
`;
const BasketFooter = styled.div`
  border-top: 0.5px solid rgba(0, 0, 0, 0.2);
  min-height: 65px;
  padding: 16px 24px;
`;

const SideBasket: React.FC<IProps> = ({ onClose }) => {
  const { basketStore } = useStores();
  const history = useHistory();
  const handleCheckout = () => {
    history.push(ROUTES.CHECKOUT);
    onClose();
  };
  return useObserver(() => (
    <Root>
      <BasketHeader>
        <Title>Cart</Title>
        <CloseIconBlack onClick={onClose} />
      </BasketHeader>
      {basketStore.basketItems.length === 0 ? (
        <FlexContainer
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Title>Your cart is empty</Title>
        </FlexContainer>
      ) : (
        <ScrollContainer>
          {basketStore.basketItems.map((item, index) => (
            <BasketItem id={item.id} quantity={item.amount} key={index} />
          ))}
        </ScrollContainer>
      )}
      {basketStore.basketItems.length !== 0 ? (
        <BasketFooter>
          <Btn onClick={handleCheckout}>Check 0ut</Btn>
        </BasketFooter>
      ) : (
        <div />
      )}
    </Root>
  ));
};
export default SideBasket;
