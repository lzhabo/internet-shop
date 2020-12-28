import styled from "@emotion/styled";
import React from "react";
import { useObserver } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import { useStores } from "@stores";
import { Column } from "./flex";
import Title from "@components/Title";
import Loading from "@components/Loading";
import Page404 from "@components/Page404";
import { useForm } from "react-hook-form";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

interface ParamIds {
  id: string;
}

interface BasketValues {
  id: string;
  amount: number;
  material: string;
}

const Img = styled.img`
  width: 300px;
  height: 300px;
`;
const ProductPage: React.FC<IProps> = () => {
  const { id } = useParams<ParamIds>();
  const { productStore } = useStores();

  const initialized = useObserver(() => productStore.initialized);
  const products = useObserver(function () {
    return productStore.products;
  });
  const product = products.find((p) => p._id === id);

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (v: BasketValues) => {
    console.log(v);
  };
  if (!initialized)
    return (
      <Root>
        <Loading />
      </Root>
    );
  if (product !== undefined)
    return (
      <Root>
        {product.photos !== undefined ? (
          <Img src={product.photos[0] !== undefined ? product.photos[0] : ""} />
        ) : (
          <div></div>
        )}
        <Column>
          <Title>
            "{product.name}" {product.type}
          </Title>
          <Title>$ {product.price}</Title>
          <form onSubmit={handleSubmit(onSubmit)}>
            <select name="material" ref={register}>
              <option value="">Choose...</option>
              {product.material.map((m, index) => (
                <option value={m}>{m.toUpperCase()}</option>
              ))}
            </select>
            <input
              name="amount"
              type="number"
              ref={register({ pattern: /\d+/ })}
            />
            <input
              type="hidden"
              id="productId"
              name="id"
              value={product._id}
              ref={register}
            />
            <input type="submit" />
          </form>
        </Column>
      </Root>
    );
  else
    return (
      <Root>
        <Page404 />
      </Root>
    );
};
export default ProductPage;
