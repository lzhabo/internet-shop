import styled from "@emotion/styled";
import React, { useState } from "react";
import { useObserver } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import { useStores } from "@stores";
import Title from "@components/Title";
import Loading from "@components/Loading";
import Page404 from "@components/Page404";
import Carousel from "nuka-carousel";
import Btn from "@components/Btn";
import { FlexContainer } from "@components/FlexContaner";
import Subtitle from "@components/Subtitle";
import NumberInput from "@components/NumberInput";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 660px) {
    flex-direction: row;
  }
  justify-content: center;
  padding: 15px;
`;

interface ParamIds {
  id: string;
}

const CarouselWrap = styled.div`
  max-width: 610px;
`;

const Price = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #3dc560;
  padding-bottom: 5px;
`;

const ProductPage: React.FC<IProps> = () => {
  const { id } = useParams<ParamIds>();
  const { productStore, basketStore } = useStores();
  const [amount, setAmount] = useState<number>(1);
  const initialized = useObserver(() => productStore.initialized);
  const products = useObserver(function () {
    return productStore.products;
  });
  const product = products.find((p) => p._id === id);

  const onClick = () => {
    if (amount > 0)
      basketStore.add({ ...basketStore.emptyBasketItem, id, amount });
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
            <CarouselWrap>
              <Carousel>
                {product.photos.map((pic, index) => (
                  <img src={pic} key={index} />
                ))}
              </Carousel>
            </CarouselWrap>
          </div>
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
          <Btn backgroundColor="#52b48a" color="#ffff" onClick={onClick}>
            Add to cart
          </Btn>
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
