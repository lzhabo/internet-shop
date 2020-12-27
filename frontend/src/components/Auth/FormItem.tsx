import styled from "@emotion/styled";
import React from "react";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 5px;
  font-family: "Nunito Sans";
  font-weight: 400;
  font-style: normal;
  display: block;
  padding: 12px 14px;
  border: 1px solid #ddd;
`;

const FormItem: React.FC<IProps> = () => {
  return <Root></Root>;
};
export default FormItem;
