import styled from "@emotion/styled";
import React from "react";
import CollectionItem from "@components/Collections/CollectionItem";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const PageHeader = styled.div`
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 30px;

  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 30px 0 50px;
  @media (min-width: 660px) {
    margin: 50px 0 70px;
  }
`;
const slidesData = [
  {
    type: "rings",
    pic:
      "https://cdn.shopify.com/s/files/1/0459/0744/3880/products/MG_0800-min_1200x.jpg?v=1603900122",
  },
  {
    type: "anklets",
    pic:
      "https://cdn.shopify.com/s/files/1/0459/0744/3880/products/whale-tail-anklet_800x.jpg?v=1600527121",
  },
  {
    type: "necklaces",
    pic:
      "https://cdn.shopify.com/s/files/1/0459/0744/3880/products/MG_0513_1200x.jpg?v=1606125750",
  },
];
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const RootScreen: React.FC<IProps> = () => {
  return (
    <Root>
      <PageHeader>Let's dive into it!</PageHeader>
      <Container>
        {slidesData.map((slide, index) => (
          <CollectionItem {...slide} />
        ))}
      </Container>
    </Root>
  );
};
export default RootScreen;
