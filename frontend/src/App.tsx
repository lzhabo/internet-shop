import React from "react";
import styled from "@emotion/styled";
import Footer from "@components/Footer";
import { Route, Switch } from "react-router-dom";
import { ROUTES } from "./stores/RouterStore";
import All from "@components/Collections/All";
import SalesHeader from "@components/SalesHeader";

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
      {/*<Switch>*/}
      {/*  <Route path={ROUTES.COLLECTIONS}>*/}
      {/*    <All />*/}
      {/*  </Route>*/}
      {/*</Switch>*/}
      {/*<Footer />*/}
      <Switch>
        <Route path={ROUTES.COLLECTIONS_TYPE} exact>
          <All />
        </Route>
        <Route path={ROUTES.COLLECTIONS} exact></Route>
      </Switch>
    </Root>
  );
};

export default App;
