import styled from "@emotion/styled";
import React from "react";
import { Column } from "@components/flex";
import { FlexContainer } from "@components/FlexContaner";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #1d1d1f;
`;
const Title = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
  color: #a9afb7;
  padding: 5px 0 5px;
`;
const SubTitle = styled.div`
  font-family: Inter;
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
          <Title>Покупателям</Title>
          <SubTitle>Частые вопросы</SubTitle>
          <SubTitle>Каталог</SubTitle>
          <SubTitle>Доставка и самовывоз</SubTitle>
        </Column>
        <Column>
          <Title>О компании</Title>
          <SubTitle>Новости</SubTitle>
          <SubTitle>Отзывы о компании</SubTitle>
          <SubTitle>Политика конфиденциальности</SubTitle>
        </Column>
        <Column>
          <Title>Контакты</Title>
          <SubTitle>27083, г. Москва, ул. 8 Марта, д. 1, стр. 12.</SubTitle>
          <SubTitle>+7 (495) 210-79-36</SubTitle>
          <SubTitle>shop@mpamed.ru</SubTitle>
        </Column>
        <Column>
          <Title>Самовывоз</Title>
          <SubTitle>
            г. Москва, ул. Складочная, д. 1, стр. 1, <br /> вход 4 подъезд 5А
            "Бизнес парк Станколит"
            <br /> (склад «М.П.А. Медицинские партнеры»)
          </SubTitle>
          <SubTitle>с 9:30 до 17:45 в рабочие дни</SubTitle>
        </Column>
      </Container>
      <FlexContainer style={{ height: 80 }} alignItems="center">
        <Rights>© 2020 М.П.А. Медицинские партнеры</Rights>
        <div />
      </FlexContainer>
    </Root>
  );
};
export default Footer;
