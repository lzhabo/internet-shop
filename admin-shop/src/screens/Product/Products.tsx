import styled from "@emotion/styled";
import React from "react";
import { useStores } from "@stores";
import { useObserver } from "mobx-react-lite";
import ProductCard from "@src/screens/Product/ProductCard";
import {
  EditOutlined,
  EllipsisOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { FlexContainer } from "@components/FlexContaner";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
`;
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  & > * {
    margin: 15px;
  }
`;
const Products: React.FC<IProps> = () => {
  const { productStore } = useStores();
  return useObserver(() => (
    <Root>
      <Container>
        {productStore.products.map((product, index) => (
          <ProductCard product={product} />
        ))}
      </Container>
    </Root>
  ));
};
export default Products;
