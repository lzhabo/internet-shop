import styled from "@emotion/styled";
import React from "react";
import { IProduct } from "shop-common/models";

interface IProps {
  id: string;
  quantity: number;
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductCardForBasket: React.FC<IProps> = ({ id, quantity }) => {
  return (
    <Root>
      <div></div>
    </Root>
  );
};
export default ProductCardForBasket;
