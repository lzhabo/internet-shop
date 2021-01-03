import styled from "@emotion/styled";
import React from "react";
import { FlexContainer } from "@components/FlexContaner";

interface IProps {}

const Root = styled.div`
  display: flex;
  background-color: #7f9aa3;
  flex-direction: column;
  justify-content: space-around;
  padding: 34px 24px;
  @media (min-width: 660px) {
    flex-direction: row;
  }
  @media (min-width: 1440px) {
    padding: 75px 80px;
  }
`;
const Heading = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 30px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #ffff;
  padding-bottom: 10px;
`;
const Subtitle = styled.div`
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 2px;
  color: #ffff;
  padding: 5px 0;
`;
const Footer: React.FC<IProps> = () => {
  return (
    <Root>
      <FlexContainer flexDirection="column" style={{ maxWidth: 350 }}>
        <Heading>About us</Heading>
        <Subtitle>
          We are Atolea. We make Ocean-inspired Jewelry that helps contribute to
          saving our Oceans. We donate a portion of every purchase to
          organizations that are cleaning our oceans and rescuing marine
          wildlife.
        </Subtitle>
        <Subtitle>
          <b>We are available 24/7 at info@atoleajewelry.com</b>
        </Subtitle>
      </FlexContainer>
      <div>
        <Heading>Help</Heading>
        <Subtitle>Our story</Subtitle>
        <Subtitle>Contact Us</Subtitle>
        <Subtitle>Private Policy</Subtitle>
        <Subtitle>Refund Policy</Subtitle>
      </div>
    </Root>
  );
};
export default Footer;
