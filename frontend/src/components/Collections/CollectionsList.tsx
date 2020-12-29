import styled from "@emotion/styled";
import React from "react";
import CollectionItem from "@components/Collections/CollectionItem";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  {
    type: "bracelets",
    pic:
      "https://cdn.shopify.com/s/files/1/0459/0744/3880/products/wave-bracelet_4769250c-cb59-4da5-a3cb-0da0a6d707f1_600x.jpg?v=1599236327",
  },
  {
    type: "earrings",
    pic:
      "https://cdn.shopify.com/s/files/1/0459/0744/3880/products/wave-earrings_1000x.jpg?v=1599235784",
  },
  {
    type: "all",
    pic:
      "https://cdn.shopify.com/s/files/1/0459/0744/3880/products/wave-ring_700x.jpg?v=1599235646",
  },
];
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Title = styled.div`
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 30px;

  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 50px 0 20px;
`;
const CollectionsList: React.FC<IProps> = () => {
  return (
    <Root>
      <Title>All collections</Title>
      <Container>
        {slidesData.map((slide, index) => (
          <CollectionItem {...slide} />
        ))}
      </Container>
    </Root>
  );
};

export default CollectionsList;
