import styled from "@emotion/styled";
import React from "react";
import { IProduct } from "shop-common/models";
import { useHistory } from "react-router-dom";
import { EditOutlined, EllipsisOutlined } from "@ant-design/icons";
import { Card } from "antd";

const { Meta } = Card;

interface IProps {
  product: IProduct;
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 10px;
`;

const ProductCard: React.FC<IProps> = ({ product }) => {
  const history = useHistory();
  return (
    <Root>
      <Card
        actions={[
          <EditOutlined
            key="edit"
            onClick={() => history.push(`products/edit/${product._id}`)}
          />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            alt="example"
            src={product.photos !== undefined ? product.photos[0] : ""}
          />
        }
      >
        <Meta title={product.name} description="..." />
      </Card>
    </Root>
  );
};
export default ProductCard;
