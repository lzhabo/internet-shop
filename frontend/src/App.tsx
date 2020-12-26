import React from "react";
import styled from "@emotion/styled";
import Footer from "@components/Footer";
import { Route, Switch } from "react-router-dom";
import { ROUTES } from "./stores/RouterStore";
import SalesHeader from "@components/Header/SalesHeader";
import CollectionsType from "@components/Collections/CollectionsType";
import CollectionsList from "@components/Collections/CollectionsList";
import ProductPage from "@components/ProductPage";
import Header from "@components/Header/Header";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const App: React.FunctionComponent<IProps> = () => {
  return (
    <Root>
      <SalesHeader />
      <Header />
      <Switch>
        <Route path={ROUTES.COLLECTIONS_TYPE} exact>
          <CollectionsType />
        </Route>
        <Route path={ROUTES.COLLECTIONS} exact>
          <CollectionsList />
        </Route>
        <Route path={ROUTES.PRODUCT_ID} exact>
          <ProductPage />
        </Route>
      </Switch>
      <Footer />
    </Root>
  );
};

export default App;
