import styled from "@emotion/styled";
import React from "react";
import { Column } from "@components/flex";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #7f9aa3;
`;
const Title = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
  color: #a9afb7;
  padding: 5px 0 5px;
`;
const SubTitle = styled.div`
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  & > * {
    margin: 0 40px;
  }
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  padding: 50px 0 50px;
  @media (min-width: 1440px) {
    flex-direction: row;
    & > * {
      margin: 20px 0 20px;
    }
  } ;
`;
const Rights = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #a9afb7;
`;

const Footer: React.FC<IProps> = () => {
  return (
    <Root>
      <Container>
        <Column>
          <Title>About Us</Title>
          <SubTitle>
            We donate a portion of every purchase to organizations that are
            cleaning our oceans and rescuing marine wildlife.
          </SubTitle>
          <SubTitle>Need to get in touch ?</SubTitle>
          <SubTitle>Доставка и самовывоз</SubTitle>
        </Column>
        <Column>
          <Title>О компании</Title>
          <SubTitle>Новости</SubTitle>
          <SubTitle>Отзывы о компании</SubTitle>
          <SubTitle>Политика конфиденциальности</SubTitle>
        </Column>
        <Column>
          <Title>Help</Title>
          <SubTitle>Contact Us</SubTitle>
          <SubTitle>Privacy Policy</SubTitle>
          <SubTitle>shop@mpamed.ru</SubTitle>
        </Column>
      </Container>
    </Root>
  );
};
export default Footer;
