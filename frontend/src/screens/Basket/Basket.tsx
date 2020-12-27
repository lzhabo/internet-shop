import styled from "@emotion/styled";
import React from "react";
import Title from "@components/Title";
import CloseIconBlack from "@components/icons/CloseIconBlack";
import { useObserver } from "mobx-react-lite";
import { useStores } from "@stores";
import { FlexContainer } from "../../../../admin-shop/src/components/FlexContaner";
import { Row } from "@components/flex";
import Subtitle from "@components/Subtitle";
import ProductCardForBasket from "@src/screens/Basket/ProductCardForBasket";

interface IProps {
  onClose: () => void;
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: center;
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

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1440px) {
    width: 640px;
  }
  & > * {
    border-bottom: 0.5px solid #ffff;
  }
`;

const CloseBtn = styled.img`
  position: absolute;
  right: 0;
  top: 0;
`;
const MenuTitle = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;
  padding: 12px 0 12px;

  line-height: 30px;

  letter-spacing: 2px;
  color: #ffff;
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
          <ProductCardForBasket id={""} quantity={1} />
        )}
      </Row>
    </Root>
  );
};
export default Basket;
