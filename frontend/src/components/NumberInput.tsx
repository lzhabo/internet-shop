import styled from "@emotion/styled";
import React from "react";

interface IProps {
  value: number;
  setValue: (active: number) => void;
}

const Root = styled.div`
  display: flex;
  font-size: 14px;
`;

const MinusBtn = styled.button`
  cursor: pointer;
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
  cursor: pointer;
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
  width: 50px;
  height: 40px;
  border-left: none;
  border-right: none;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  outline: none;
  text-align: center;
`;

const NumberInput: React.FC<IProps> = ({ value, setValue }) => {
  const handleIncrement = () => setValue(value + 1);
  const handleDecrement = () => value > 0 && setValue(value - 1);
  const handleOnChange = (e: any) =>
    !isNaN(+e.target.value) && setValue(+e.target.value);
  return (
    <Root>
      <MinusBtn onClick={handleDecrement}>-</MinusBtn>
      <Input value={value} onChange={handleOnChange} />
      <PlusBtn onClick={handleIncrement}>+</PlusBtn>
    </Root>
  );
};
export default NumberInput;
