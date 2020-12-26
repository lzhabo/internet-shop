import React from "react";
import styled from "@emotion/styled";
import Footer from "@components/Footer";
import { Route, Switch } from "react-router-dom";
import { ROUTES } from "./stores/RouterStore";
import SalesHeader from "@components/SalesHeader";
import CollectionsType from "@components/Collections/CollectionsType";
import { useStores } from "@stores";
import ProductCard from "@components/ProductCard";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const data = {
  photos: [
    "https://cdn.shopify.com/s/files/1/0459/0744/3880/products/wave-bracelet_4769250c-cb59-4da5-a3cb-0da0a6d707f1_600x.jpg?v=1599236327",
  ],
  name: "ring",
  price: 100,
};
const App: React.FunctionComponent<IProps> = () => {
  return (
    <Root>
      <SalesHeader />
      {/*<Switch>*/}
      {/*  <Route path={ROUTES.COLLECTIONS}>*/}
      {/*    <All />*/}
      {/*  </Route>*/}
      {/*</Switch>*/}
      {/*<Footer />*/}
      <Switch>
        <Route path={ROUTES.COLLECTIONS_TYPE} exact>
          <CollectionsType />
        </Route>
        <Route path={ROUTES.COLLECTIONS} exact></Route>
      </Switch>
    </Root>
  );
};

export default App;
