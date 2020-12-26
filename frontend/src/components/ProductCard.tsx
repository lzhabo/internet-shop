import styled from "@emotion/styled";
import React from "react";
import { IProduct } from "shop-common/models";
import { ROUTES } from "@stores/RouterStore";
import { useHistory } from "react-router-dom";
import NewProductForm from "../../../admin-shop/src/components/NewProductForm";

interface IProps {
  product: IProduct;
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  position: relative;
`;

const Title = styled.div`
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  font-style: normal;
  text-transform: uppercase;
`;

const Img = styled.img`
  width: 270px;
  height: 270px;
  cursor: pointer;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
`;

const OnSale = styled.div`
  background: #00e6b8;
  color: #ffff;
  left: 0;
  top: 0;
  font-family: Montserrat, sans-serif;
  font-weight: 300;
  font-style: normal;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  position: absolute;
  padding: 5px;
  margin: 5px;
`;

const noPic = "https://i.imgur.com/sjDBHUW.jpg";
const ProductCard: React.FC<IProps> = ({ product }) => {
  const history = useHistory();
  return (
    <Root>
      {product.isOnSale ? (
        <OnSale>
          on <br /> sale
        </OnSale>
      ) : (
        <div />
      )}
      {product.photos !== undefined ? (
        <Img
          src={product.photos[0] !== undefined ? product.photos[0] : ""}
          onClick={() => history.push(`products/${product._id}`)}
        />
      ) : (
        <Img src={noPic} />
      )}
      <Container>
        <Title>{product.name}</Title>
        <Title>$ {product.price}</Title>
      </Container>
    </Root>
  );
};
export default ProductCard;
