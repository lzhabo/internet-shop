import styled from "@emotion/styled";
import React from "react";
import { useStores } from "@stores";
import { useObserver } from "mobx-react-lite";
import { Table } from "antd";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Size, cm",
    dataIndex: "size",
    key: "size",
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "Material",
    dataIndex: "material",
    key: "material",
  },

  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
];

const Products: React.FC<IProps> = () => {
  const { productStore } = useStores();
  return useObserver(() => (
    <Root>
      <Table dataSource={productStore.products} columns={columns} />;
    </Root>
  ));
};
export default Products;
