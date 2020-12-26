import styled from "@emotion/styled";
import React from "react";
import { useStores } from "@stores";
import ProductCard from "@components/ProductCard";
import { useParams } from "react-router-dom";
import { useObserver } from "mobx-react-lite";
import Page404 from "@components/Page404";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

interface ParamTypes {
  type: string;
}

const CollectionsType: React.FC<IProps> = () => {
  const { type } = useParams<ParamTypes>();
  const { productStore } = useStores();

  const products = useObserver(function () {
    return productStore.products;
  });
  const rotes = Array(
    "all",
    "rings",
    "anklets",
    "necklaces",
    "bracelets",
    "earrings",
    "all"
  );
  return rotes.includes(type) ? (
    <Root>
      {type === "all"
        ? products.map((product, index) => (
            <ProductCard product={product} key={index} />
          ))
        : products
            .filter((p) => p.type === type)
            .map((product, index) => (
              <ProductCard product={product} key={index} />
            ))}
    </Root>
  ) : (
    <Page404 />
  );
};
export default CollectionsType;
