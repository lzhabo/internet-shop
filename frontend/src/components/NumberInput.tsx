import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import MinusIcon from "@components/icons/MinusIcon";
import PlusIcon from "@components/icons/PlusIcon";

interface IProps {
  value: number;
}

const Root = styled.div`
  display: flex;
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  flex: 1;
  padding: 5px 10px;
  align-items: center;
  margin: 25px 0;
`;

const NumberInput: React.FC<IProps> = ({ value }) => {
  const [amount, setAmount] = useState(value);
  useEffect(() => {
    // Обновляем заголовок документа с помощью API браузера
    console.log(`Вы нажали ${amount} раз`);
  });
  return (
    <Root>
      <MinusIcon onClick={() => setAmount(amount - 1)} />
      {/*<input*/}
      {/*  readOnly*/}
      {/*  disabled={true}*/}
      {/*  value={amount}*/}
      {/*  style={{*/}
      {/*    borderWidth: 0,*/}
      {/*    border: "none",*/}
      {/*  }}*/}
      {/*/>*/}
      <div style={{ padding: "5px 35px" }}>{amount}</div>
      <PlusIcon onClick={() => setAmount(amount + 1)} />
    </Root>
  );
};
export default NumberInput;
