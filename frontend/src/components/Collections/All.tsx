import styled from "@emotion/styled";
import React from "react";
import { useStores } from "@stores";
import ProductCard from "@components/ProductCard";
import { useParams } from "react-router-dom";
import { IProduct } from "shop-common/models";
import { computed } from "mobx";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

interface ParamTypes {
  type: string;
}

const CollectionsType: React.FC<IProps> = () => {
  const { type } = useParams<ParamTypes>();
  const { productStore } = useStores();

  let products = productStore.products;
  switch (type) {
    // case "all":
    // default:
    //   break;
    case "rings":
    case "anklets":
    case "necklaces":
    case "bracelets":
    case "earrings":
      products = productStore.filterProductsByType;
    // break;
  }
  console.log(products);

  return (
    <Root>
      {products.map((product, index) => (
        <div>{product._id}</div>
      ))}
    </Root>
  );
};
export default CollectionsType;
