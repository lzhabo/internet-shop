import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { useObserver } from "mobx-react-lite";
import { useStores } from "@stores";
import { FlexContainer } from "@components/FlexContaner";
import NumberInput from "@components/NumberInput";

interface IProps {
  id: string;
  quantity: number;
}

const Root = styled.div`
  display: flex;
  margin: 10px 0 10px;
  padding: 10px 25px;
  justify-content: space-around;
`;

const ProductName = styled.div`
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  font-style: normal;
  color: #1c1b1b;
  transition: color 0.2s ease-in-out;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: 2px;
  text-transform: uppercase;
`;
const Color = styled.div`
  font-family: Montserrat, sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #6a6a6a;
  text-transform: uppercase;
  font-size: 12px;
  line-height: 30px;
  letter-spacing: 2px;
`;
const Flex = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const BasketItem: React.FC<IProps> = ({ id }) => {
  const { productStore, basketStore } = useStores();

  const product = useObserver(function () {
    return productStore.products.find((p) => p._id === id);
  });
  const basketItem = useObserver(function () {
    return basketStore.basketItems.find((p) => p.productId === id);
  });
  const [amount, setAmount] = useState(
    basketItem === undefined ? 0 : basketItem.quantity
  );
  const handleRemove = () => {
    basketStore.deleteItem(id);
  };
  useEffect(() => {
    if (amount === 0) {
      handleRemove();
      console.log("remove component from basket");
    }
  });

  return (
    <Flex>
      {product !== undefined ? (
        <Root>
          {product.photos !== undefined ? (
            <img
              src={product.photos[0]}
              alt={product.type}
              style={{ maxWidth: 150, maxHeight: 150 }}
            />
          ) : (
            <img src="" alt={product.type} />
          )}
          <FlexContainer flexDirection="column">
            <ProductName>{product.name}</ProductName>
            <Color>{product.material} color</Color>
            <Color>$ {product.price}</Color>
            <div>
              <NumberInput value={amount} setValue={setAmount} />
              <Color style={{ cursor: "pointer" }} onClick={handleRemove}>
                Remove
              </Color>
            </div>
          </FlexContainer>
        </Root>
      ) : (
        <div />
      )}
    </Flex>
  );
};
export default BasketItem;

//onmouseover="this.style.backgroundColor='#555';"
