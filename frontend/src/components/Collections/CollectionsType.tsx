import styled from "@emotion/styled";
import React from "react";
import { useStores } from "@stores";
import ProductCard from "@components/ProductCard";
import { useParams } from "react-router-dom";
import { useObserver } from "mobx-react-lite";
import Page404 from "@components/Page404";
import Loading from "@components/Loading";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ProductsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const PageHeader = styled.div`
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  font-style: normal;
  color: #1c1b1b;
  letter-spacing: 0.2em;
  text-transform: uppercase;
`;

interface ParamTypes {
  type: string;
}

const CollectionsType: React.FC<IProps> = () => {
  const { type } = useParams<ParamTypes>();
  const { productStore } = useStores();
  const initialized = useObserver(() => productStore.initialized);

  const products = useObserver(function () {
    return productStore.products;
  });
  const rotes = Array(
    "all",
    "rings",
    "anklets",
    "necklaces",
    "bracelets",
    "earrings"
  );
  if (!initialized)
    return (
      <Root>
        <Loading />
      </Root>
    );
  return rotes.includes(type) ? (
    <Root>
      <PageHeader>{type}</PageHeader>
      <ProductsWrap>
        {type === "all"
          ? products.map((product, index) => (
              <ProductCard product={product} key={index} />
            ))
          : products
              .filter((p) => p.type === type)
              .map((product, index) => (
                <ProductCard product={product} key={index} />
              ))}
      </ProductsWrap>
    </Root>
  ) : (
    <Page404 />
  );
};
export default CollectionsType;
