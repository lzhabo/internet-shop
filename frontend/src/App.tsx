import React from "react";
import styled from "@emotion/styled";
import Footer from "@src/screens/Footer";
import { Route, Switch } from "react-router-dom";
import { ROUTES } from "./stores/RouterStore";
import SalesHeader from "@components/Header/SalesHeader";
import CollectionsType from "@src/screens/Collections/CollectionsType";
import CollectionsList from "@src/screens/Collections/CollectionsList";
import ProductPage from "@src/screens/Product/ProductPage";
import Header from "@components/Header/Header";
import LoginPage from "@components/Auth/LoginPage";
import RegistrationPage from "@components/Auth/RegistrationPage";
import Checkout from "@src/screens/Chekout";
import BasketPage from "@src/screens/Basket/BasketPage";
import "antd/dist/antd.css";
import RootScreen from "@src/screens/RootScreen";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
`;
const App: React.FunctionComponent<IProps> = () => {
  return (
    <Root>
      <SalesHeader />
      <Header />
      <Switch>
        <Route path={ROUTES.ROOT} exact>
          <RootScreen />
        </Route>
        <Route path={ROUTES.COLLECTIONS_TYPE} exact>
          <CollectionsType />
        </Route>
        <Route path={[ROUTES.COLLECTIONS, ROUTES.PRODUCTS]} exact>
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
        <Route path={ROUTES.BASKET} exact>
          <BasketPage />
        </Route>
        <Route path={ROUTES.CHECKOUT} exact>
          <Checkout />
        </Route>
      </Switch>
      <Footer />
    </Root>
  );
};

export default App;
