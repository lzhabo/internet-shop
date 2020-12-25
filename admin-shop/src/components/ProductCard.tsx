import styled from "@emotion/styled";
import React, { useState } from "react";
import { useParams } from "react-router";
import { useStores } from "@stores";
import { IProduct } from "shop-common/models";
import { Carousel } from "antd";
import { css } from "@emotion/core";

interface IProps {
  // product: IProduct;
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;
const Img = css`
  height: 160px;
  lineheight: 160px;
  textalign: center;
`;

const ProductCard: React.FC<IProps> = () => {
  let id = useParams();
  const { productStore } = useStores();
  const data = {
    _id: "2222222",
    title: "silver ring",
    type: "ring",
    material: "silver",
    size: "100",
    description: "10skskksks0",
    amount: 100,
    price: 100,
    // photos: null,
    photos: Array(
      "https://i.picsum.photos/id/473/1080/1080.jpg?hmac=msd8F_BzuiYQdz53yD_No3vwptiZRPlfZZBg5VP_rg0",
      "https://i.picsum.photos/id/473/1080/1080.jpg?hmac=msd8F_BzuiYQdz53yD_No3vwptiZRPlfZZBg5VP_rg0"
    ),
  };

  return (
    <Root>
      {/*{data.photos == null ? (*/}
      {/*  <Carousel>*/}
      {/*    <div />*/}
      {/*  </Carousel>*/}
      {/*) : (*/}
      {/*  <Carousel>*/}
      {/*    {data.photos.map((src: string, index: number) => (*/}
      {/*      <div css={Img}>*/}
      {/*        <img src={src} key={index} />*/}
      {/*      </div>*/}
      {/*    ))}*/}
      {/*  </Carousel>*/}
      {/*)}*/}
    </Root>
  );
};
export default ProductCard;
