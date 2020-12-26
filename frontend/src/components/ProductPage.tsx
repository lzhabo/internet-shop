import styled from "@emotion/styled";
import React from "react";
import { useObserver } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import { useStores } from "@stores";
import ProductCard from "@components/ProductCard";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

interface ParamIds {
  id: string;
}

const Img = styled.img``;
const ProductPage: React.FC<IProps> = () => {
  const { id } = useParams<ParamIds>();
  const { productStore } = useStores();

  const products = useObserver(function () {
    return productStore.products;
  });
  const product = products.find((p) => p._id === id);

  if (product !== undefined)
    return (
      <Root>
        {product.photos !== undefined ? (
          <Img src={product.photos[0] !== undefined ? product.photos[0] : ""} />
        ) : (
          <div></div>
        )}
      </Root>
    );
  else return <Root></Root>;
};
export default ProductPage;
