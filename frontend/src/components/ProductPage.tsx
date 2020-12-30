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
import MinusIcon from "@components/icons/MinusIcon";
import PlusIcon from "@components/icons/PlusIcon";
import { FlexContainer } from "@components/FlexContaner";
import Subtitle from "@components/Subtitle";

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
const Input = styled.div`
  display: flex;
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  flex: 1;
  padding: 5px 10px;
  align-items: center;
  margin: 25px 0;
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
    basketStore.add({ ...basketStore.emptyBasketItem, id, amount });
  };
  const onChange = (e: any) => {
    setAmount(e.target.value);
    console.log(amount);
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
          <Input>
            <MinusIcon onClick={() => setAmount(amount - 1)} />
            <input
              readOnly
              value={amount}
              style={{
                borderWidth: 0,
                border: "none",
              }}
            />
            <PlusIcon onClick={() => setAmount(amount + 1)} />
          </Input>
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
