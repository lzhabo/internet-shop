import styled from "@emotion/styled";
import React, { useState } from "react";
import { useObserver } from "mobx-react-lite";
import { useStores } from "@stores";
import { FlexContainer } from "@components/FlexContaner";

interface IProps {
  id: string;
  quantity: number;
}

const Root = styled.div`
  display: flex;
  margin: 10px 0 10px;
  padding: 10px 25px;
`;
const Img = styled.img`
  width: 100px;
`;

const ProductName = styled.div`
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  font-style: normal;
  color: #1c1b1b;
  transition: color 0.2s ease-in-out;
  font-size: 22px;
  line-height: 30px;
  letter-spacing: 2px;
  text-transform: uppercase;
`;
const Color = styled.div`
  font-family: Montserrat, sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #6a6a6a;
  text-transform: uppercase;
  font-size: 13px;
  line-height: 30px;
  letter-spacing: 2px;
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
    if (amount === 0) {
      handleRemove();
      console.log("remove component from basket");
    }
  };

  return (
    <div>
      {product !== undefined ? (
        <Root>
          <FlexContainer>
            {product.photos !== undefined ? (
              <img
                src={product.photos[0]}
                alt={product.type}
                style={{ width: 120 }}
              />
            ) : (
              <img src="" alt={product.type} />
            )}
          </FlexContainer>
          <FlexContainer flexDirection="column">
            <ProductName>{product.name}</ProductName>
            <Color>{product.material} color</Color>
            <Color>$ {product.price}</Color>
            <form>
              <label>
                <input
                  type="number"
                  name="amount"
                  value={amount}
                  onChange={onChange}
                />
              </label>

              <input value="Remove" onClick={handleRemove} />
            </form>
          </FlexContainer>
        </Root>
      ) : (
        <div />
      )}
    </div>
  );
};
export default BasketItem;
