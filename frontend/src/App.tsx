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
import LoginPage from "@components/Auth/LoginPage";
import RegistrationPage from "@components/Auth/RegistrationPage";
import SearchPage from "@components/SearchPage";

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
        <Route path={ROUTES.REGISTER} exact>
          <RegistrationPage />
        </Route>
        <Route path={ROUTES.LOGIN} exact>
          <LoginPage />
        </Route>
        <Route path={ROUTES.SEARCH} exact>
          <SearchPage />
        </Route>
      </Switch>
      <Footer />
    </Root>
  );
};

export default App;
