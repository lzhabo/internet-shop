import styled from "@emotion/styled";
import React from "react";
import { useStores } from "@stores";
import ProductCard from "@components/ProductCard";
import { useParams } from "react-router-dom";
import { IProduct } from "shop-common/models";
import { useObserver } from "mobx-react-lite";

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

  return useObserver(() => (
    <Root>
      {productStore.products
        .filter((p) => p.type === type)
        .map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
    </Root>
  ));
};
export default CollectionsType;
