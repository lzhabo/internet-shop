import styled from "@emotion/styled";
import React, { useState } from "react";

interface IProps {
  images?: string[];
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const PicUpload: React.FC<IProps> = () => {
  const [imgs, setImgs] = useState<string[]>([]);
  return <Root></Root>;
};
export default PicUpload;
