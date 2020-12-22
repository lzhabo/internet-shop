import React from "react";
import styled from "@emotion/styled";
import LoginScreen from "@src/screens/LoginScreen";
import Loading from "@components/Loading";
import { ROUTES } from "@stores/RouterStore";
import { Route, Switch } from "react-router-dom";
import { useStores } from "@stores";
import { useObserver } from "mobx-react-lite";
import PrivateRoute from "@components/PrivateRoute";
import MainScreen from "@src/screens/MainScreen";

interface IProps {}

const Root = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

const App: React.FunctionComponent<IProps> = () => {
  return (
    <Root>
      <Switch>
        <Route path={ROUTES.LOGIN} exact>
          <LoginScreen />
        </Route>
        <PrivateRoute>
          <MainScreen />
        </PrivateRoute>
      </Switch>
    </Root>
  );
};

export default App;
