import styled from "@emotion/styled";
import React from "react";
import { useStores } from "@stores";
import { useObserver } from "mobx-react-lite";
import { Card, Skeleton, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Meta } = Card;

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Products: React.FC<IProps> = () => {
  const { productStore } = useStores();
  return useObserver(() => (
    <Root>
      {productStore.products.map((product, index) => (
        <Card
          style={{ width: 300, marginTop: 16 }}
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Skeleton avatar>
            avatar={<Avatar src={product.photos} alt="product pic" />}
            title={product.name}
            description="This is the description"
          </Skeleton>
        </Card>
      ))}
    </Root>
  ));
};
export default Products;
