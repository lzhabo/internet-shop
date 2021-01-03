import styled from "@emotion/styled";
import React, { useState } from "react";
import { useObserver } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import { useStores } from "@stores";
import Title from "@components/Title";
import Loading from "@components/Loading";
import Page404 from "@src/screens/Page404";
import Carousel from "nuka-carousel";
import Btn from "@components/Btn";
import { FlexContainer } from "@components/FlexContaner";
import Subtitle from "@components/Subtitle";
import NumberInput from "@components/NumberInput";
import SideBasket from "@src/screens/Basket";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px;
  @media (min-width: 660px) {
    //flex-direction: row;
    justify-content: space-around;
  }
`;

interface ParamIds {
  id: string;
}

const Description = styled.div`
  max-width: 610px;
  font-style: normal;
  font-size: 15px;
  font-family: "Nunito Sans", serif;
  font-weight: 400;
  color: #1c1b1b;
  background: #fff;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);
  border-top: 0.5px solid rgba(0, 0, 0, 0.2);
  padding: 15px 0;
  margin: 25px 0;
`;

const Price = styled.div`
  font-family: Montserrat, serif;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #3dc560;
  padding-bottom: 5px;
`;

const tags =
  "https://cdn.shopify.com/s/files/1/0459/0744/3880/files/FOOTER_purabaia-min_2.png?v=1598543760";
const ProductPage: React.FC<IProps> = () => {
  const { id } = useParams<ParamIds>();
  console.log(id);
  const { productStore, basketStore } = useStores();
  const [amount, setAmount] = useState<number>(1);
  const initialized = useObserver(() => productStore.initialized);
  const products = useObserver(function () {
    return productStore.products;
  });
  const product = products.find((p) => p._id === id);

  const price = typeof product === "undefined" ? 0 : product.price;
  const onClick = () => {
    if (amount > 0) {
      basketStore.add(id, amount, price);
      //setOpenedBasket(true);
    }
  };
  // const [openedBasket, setOpenedBasket] = useState(false);  todo
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
          <Carousel>
            {product.photos.map((pic, index) => (
              <img src={pic} key={index} />
            ))}
          </Carousel>
        ) : (
          <div />
        )}
        <FlexContainer
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Title style={{ padding: "15px 0" }}>{product.name}</Title>
          <Price>$ {product.price}</Price>
          <Subtitle>{product.material}</Subtitle>
          <div style={{ padding: "15px 0" }}>
            <NumberInput value={amount} setValue={setAmount} />
          </div>
          <Btn style={{ maxWidth: 450 }} onClick={onClick}>
            Add to cart
          </Btn>
          {/*{openedBasket && (*/}
          {/*  <SideBasket onClose={() => setOpenedBasket(false)} />*/}
          {/*)}*/}
          <FlexContainer flexDirection="column" alignItems="center">
            <Description>
              <h3>
                Embrace the beach vibes with our <b>{product.name}</b>! This is
                the perfect addition to any summer outfit.
              </h3>
              <ul>
                <li>
                  {product.type.charAt(0).toUpperCase() + product.type.slice(1)}{" "}
                  type
                </li>
                <li>Size : Adjustable, one size fits all</li>
                <li>
                  Delivered in a eco-friendly packaging & with a pack of
                  stickers
                </li>
              </ul>
            </Description>
            <Img src={tags} alt="tags" />
          </FlexContainer>
        </FlexContainer>
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

const Img = styled.img`
  width: 100%;
  @media (min-width: 660px) {
    max-width: 610px;
    padding: 25px 0;
  }
`;
