import styled from "@emotion/styled";
import React from "react";
import { Spin } from "antd";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const Loading: React.FC<IProps> = () => {
  return (
    <Root>
      <Spin tip="Loading..." />
    </Root>
  );
};
export default Loading;
