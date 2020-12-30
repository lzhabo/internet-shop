import styled from "@emotion/styled";
import React from "react";
import { useStores } from "@stores";
import { useObserver } from "mobx-react-lite";
import { Card, Skeleton, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { FlexContainer } from "./FlexContaner";

const { Meta } = Card;

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
`;

const Products: React.FC<IProps> = () => {
  const { productStore } = useStores();
  return useObserver(() => (
    <Root>
      <FlexContainer>
        {productStore.products.map((product, index) => (
          <Card
            style={{ width: 300 }}
            actions={[
              <DeleteOutlined key="delete" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          ></Card>
        ))}
      </FlexContainer>
    </Root>
  ));
};
export default Products;
