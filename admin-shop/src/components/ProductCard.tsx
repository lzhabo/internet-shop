import styled from "@emotion/styled";
import React, { useState } from "react";
import { useParams } from "react-router";
import { useStores } from "@stores";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductCard: React.FC<IProps> = () => {
  let id = useParams();
  const { productStore } = useStores();
  console.log(id);
  // let product = productStore.getProductById(id.toString());
  let product = productStore.products.filter((product) => product._id == id);
  console.log(product);
  // const goods = Object.entries(this.props.dataStore!.goods)
  //     .reduce((acc: IItem[], [key, value]) => [...acc, { ...value, id: key }], [])
  // const item = goods.find(item => item.id === id)
  return <Root></Root>;
};
export default ProductCard;
