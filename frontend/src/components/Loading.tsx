import styled from "@emotion/styled";
import React from "react";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  min-height: 100px;

  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 30px;

  letter-spacing: 2px;
`;

const Loading: React.FC<IProps> = () => {
  return <Root>Loading...</Root>;
};
export default Loading;
