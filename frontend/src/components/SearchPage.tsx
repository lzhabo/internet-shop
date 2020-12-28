import styled from "@emotion/styled";
import React from "react";
import { useStores } from "@stores";
import { useParams } from "react-router-dom";
import { useObserver } from "mobx-react-lite";
import Loading from "@components/Loading";
// import ProductCard from "@components/ProductCard";
// import Title from "@components/Title";
// import { unique } from "mobx/lib/utils/utils";
// import { IProduct } from "shop-common/models";
// import Subtitle from "@components/Subtitle";

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

interface ParamTypes {
  params: string;
}

const SearchPage: React.FC<IProps> = () => {
  // const { params } = useParams<ParamTypes>();
  const { productStore } = useStores();
  const initialized = useObserver(() => productStore.initialized);
  //
  // const filteredProducts = useObserver(function () {
  //   const filterByName = productStore.products.filter((p) =>
  //     p.name.toLowerCase().includes(params.toLowerCase())
  //   );
  //   const filterByType = productStore.products.filter((p) =>
  //     p.type.toLowerCase().includes(params.toLowerCase())
  //   );
  //
  //   return unique<IProduct>(filterByName.concat(filterByType));
  //   return productStore.products;
  // });

  if (!initialized)
    return (
      <Root>
        <Loading />
      </Root>
    );
  return (
    <Root>
      {/*<Title>Search</Title>*/}
      {/*<Subtitle>*/}
      {/*  {filteredProducts.length} results for "{params}"*/}
      {/*</Subtitle>*/}
      {/*<ProductsWrap>*/}
      {/*  {filteredProducts.map((product, index) => (*/}
      {/*    <ProductCard product={product} key={index} />*/}
      {/*  ))}*/}
      {/*</ProductsWrap>*/}
    </Root>
  );
};
export default SearchPage;
