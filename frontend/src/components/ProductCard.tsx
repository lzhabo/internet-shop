import styled from "@emotion/styled";
import React from "react";
import { IProduct } from "shop-common/models";
import { FlexContainer } from "@components/FlexContainer";

interface IProps {
  product: IProduct;
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5px;
`;

const Title = styled.div`
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  font-style: normal;
`;
const ProductPic = styled.div``;

const ProductCard: React.FC<IProps> = ({ product }) => {
  console.log(product);
  return product != null ? (
    <Root>
      <ProductPic>
        <img
          src={product.photos !== undefined ? product.photos[0] : ""}
          alt={product.name}
        />
      </ProductPic>
      <Title>{product.name}</Title>
      <FlexContainer>{product}</FlexContainer>
    </Root>
  ) : (
    <Root></Root>
  );
};
export default ProductCard;
