import styled from "@emotion/styled";
import React from "react";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductPage: React.FC<IProps> = () => {
  return <Root></Root>;
};
export default ProductPage;
