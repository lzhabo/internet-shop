import styled from "@emotion/styled";
import React from "react";
import { useObserver } from "mobx-react-lite";
import { useStores } from "@stores";
import { Column } from "@components/flex";
import Title from "@components/Title";
import Btn from "@components/Btn";

interface IProps {
  id: string;
  quantity: number;
}

const Root = styled.div`
  display: flex;
  margin: 10px 0 10px;
`;
const Img = styled.img`
  width: 250px;
  height: 250px;
`;
const BasketItem: React.FC<IProps> = ({ id, quantity }) => {
  const { productStore } = useStores();
  const product = useObserver(function () {
    return productStore.products.find((p) => p._id === id);
  });

  return (
    <Root>
      {product !== undefined ? (
        <div>
          {product.photos !== undefined ? (
            <Img src={product.photos[0]} alt={product.type} />
          ) : (
            <Img src="" alt={product.type} />
          )}
          <Column>
            <Title>{product.name}</Title>
            <Title>{product.material} color</Title>
            <Title>{product.price}</Title>
          </Column>
        </div>
      ) : (
        <div />
      )}
    </Root>
  );
};
export default BasketItem;
