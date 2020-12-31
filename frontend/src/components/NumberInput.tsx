import styled from "@emotion/styled";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

interface IProps {
  value: number;
  // onChange: () => Dispatch<SetStateAction<number>>;
  setValue: (active: number) => void;
}

const Root = styled.div`
  display: flex;
  font-size: 14px;
  margin: 10px;
`;
const MinusBtn = styled.button`
  width: 40px;
  height: 40px;
  box-shadow: none;
  outline: none;
  border-right: none;
  border-left: 1px solid rgba(0, 0, 0, 0.2);
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  background: #ffff;
`;
const PlusBtn = styled.button`
  width: 40px;
  height: 40px;
  boxshadow: none;
  outline: none;
  border-left: none;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  background: #ffff;
`;
const Input = styled.input`
  width: 70px;
  height: 5540;
  border-left: none;
  border-right: none;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  outline: none;
  text-align: center;
`;

const NumberInput: React.FC<IProps> = ({ value, setValue }) => {
  // const [count, setCount] = useState(value);
  const handleIncrement = () => setValue(value + 1);
  const handleDecrement = () => value > 0 && setValue(value - 1);
  const handleOnChange = (e: any) =>
    !isNaN(+e.target.value) && setValue(+e.target.value);
  useEffect(() => {
    console.log(value);
  });

  return (
    <Root>
      <MinusBtn onClick={handleDecrement}>-</MinusBtn>
      <Input value={value} onChange={handleOnChange} />
      <PlusBtn onClick={handleIncrement}>+</PlusBtn>
    </Root>
  );
};
export default NumberInput;
