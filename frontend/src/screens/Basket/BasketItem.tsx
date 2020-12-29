import styled from "@emotion/styled";
import React, { useState } from "react";
import { useObserver } from "mobx-react-lite";
import { useStores } from "@stores";
import { Column } from "@components/flex";
import Title from "@components/Title";
import Subtitle from "@components/Subtitle";

interface IProps {
  id: string;
  quantity: number;
}

const Root = styled.div`
  display: flex;
  margin: 10px 0 10px;
`;
const Img = styled.img`
  width: 250px;
  height: 250px;
`;
const BasketItem: React.FC<IProps> = ({ id }) => {
  const { productStore, basketStore } = useStores();

  const product = useObserver(function () {
    return productStore.products.find((p) => p._id === id);
  });
  const basketItem = useObserver(function () {
    return basketStore.basketItems.find((p) => p.id === id);
  });
  const [amount, setAmount] = useState(
    basketItem === undefined ? 0 : basketItem.amount
  );
  const handleRemove = () => {
    basketStore.deleteItem(id);
  };
  const onChange = (event: any) => {
    setAmount(event.target.value);
    basketStore.changeAmount(id, amount);
    // if (event.target.value == 0) {
    if (amount === 0) {
      handleRemove();
      console.log("remove component from basket");
    }
  };

  return (
    <Root>
      {product !== undefined ? (
        <div>
          {product.photos !== undefined ? (
            <Img src={product.photos[0]} alt={product.type} />
          ) : (
            <Img src="" alt={product.type} />
          )}
          <Column>
            <Title>{product.name}</Title>
            <Subtitle>{product.material} color</Subtitle>
            <Subtitle>{product.price}</Subtitle>
          </Column>
          <form>
            <label>
              <input
                type="number"
                name="amount"
                // min={0}
                value={amount}
                onChange={onChange}
              />
            </label>
            <input value="Remove" onClick={handleRemove} />
          </form>
        </div>
      ) : (
        <div />
      )}
    </Root>
  );
};
export default BasketItem;
