import styled from "@emotion/styled";
import React from "react";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #000000;
  color: #ffff;
  justify-content: center;
  align-items: center;
`;
const Text = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;

  letter-spacing: 0.1em;
  padding: 4px;
  flex-wrap: wrap;
  padding: 12px 15px;
`;
const SalesHeader: React.FC<IProps> = () => {
  return (
    <Root>
      <Text>
        🎁 XMAS OFFER : PICK 3 JEWELS, PAY ONLY 2, with code : gift 🎁 🌎 FREE
        SHIPPING 🌎
      </Text>
    </Root>
  );
};
export default SalesHeader;
