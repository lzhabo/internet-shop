import styled from "@emotion/styled";
import React from "react";
import { IProduct } from "shop-common/models";

interface IProps {
  product: IProduct;
  // photos: string[];
  // name: string;
  // price: number;
  // isOnSale?: boolean;
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

const Title = styled.div`
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  font-style: normal;
  text-transform: uppercase;
`;
const Img = styled.img`
  width: 270px;
  height: 270px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
`;
const noPic = "https://i.imgur.com/sjDBHUW.jpg";
const ProductCard: React.FC<IProps> = ({ product }) => {
  return (
    <Root>
      {product.photos != undefined ? (
        <Img src={product.photos[0] !== undefined ? product.photos[0] : ""} />
      ) : (
        <Img src={noPic} />
      )}
      <Container>
        <Title>{product.name}</Title>
        <Title>$ {product.price}</Title>
      </Container>
    </Root>
  );
};
export default ProductCard;
