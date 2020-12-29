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
import { IBasketItem } from "@src/stores/BasketStore";
import Carousel from "nuka-carousel";
import ArrowLeftIcon from "@components/icons/ArrowLeftIcon";
import ArrowRightIcon from "@components/icons/ArrowRightIcon";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

interface ParamIds {
  id: string;
}

const Img = styled.img`
  width: 300px;
  height: 300px;
`;

const ProductPage: React.FC<IProps> = () => {
  const { id } = useParams<ParamIds>();
  const { productStore, basketStore } = useStores();

  const initialized = useObserver(() => productStore.initialized);
  const products = useObserver(function () {
    return productStore.products;
  });
  const product = products.find((p) => p._id === id);

  const { register, handleSubmit } = useForm();

  const onSubmit = (v: IBasketItem) => {
    basketStore.add(v);
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
          <div>
            <Carousel>
              {product.photos.map((pic, index) => (
                <img src={pic} key={index} />
              ))}
            </Carousel>
          </div>
        ) : (
          <div />
        )}
        <Column>
          <Title>
            "{product.name}" {product.type}
          </Title>
          <Title>$ {product.price}</Title>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              name="amount"
              type="number"
              ref={register({ pattern: /\d+/ })}
              min={1}
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
