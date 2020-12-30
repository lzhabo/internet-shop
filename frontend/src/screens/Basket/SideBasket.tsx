import styled from "@emotion/styled";
import React from "react";
import Title from "@components/Title";
import CloseIconBlack from "@components/icons/CloseIconBlack";
import { useObserver } from "mobx-react-lite";
import { useStores } from "@stores";
import { Row } from "@components/flex";
import Subtitle from "@components/Subtitle";
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
  top: 0;
  bottom: 0;
  right: 0;
  left: 15%;
  z-index: 3;
  @media (min-width: 660px) {
    left: 50%;
  }
  background: #ffff;
`;
const ScrollContainer = styled.div`
  overflow-y: auto;
  display: flex;
`;
const BasketHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);
  min-height: 65px;
  padding: 16px 24px;
`;
const SideBasket: React.FC<IProps> = ({ onClose }) => {
  const { basketStore } = useStores();
  const history = useHistory();
  return useObserver(() => (
    <Root>
      <BasketHeader>
        <Title>Cart</Title>
        <CloseIconBlack onClick={onClose} />
      </BasketHeader>
      <FlexContainer
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        {basketStore.basketItems.length === 0 ? (
          <Title>Your cart is empty</Title>
        ) : (
          <FlexContainer
            flexDirection="column"
            style={{ alignContent: "space-between" }}
          >
            <ScrollContainer>
              {basketStore.basketItems.map((item, index) => (
                <BasketItem id={item.id} quantity={item.amount} key={index} />
              ))}
            </ScrollContainer>
            <Btn
              backgroundColor="#52b48a"
              color="#ffff"
              onClick={() => history.push(ROUTES.CHECKOUT)}
            >
              Check 0ut
            </Btn>
          </FlexContainer>
        )}
      </FlexContainer>
    </Root>
  ));
};
export default SideBasket;
