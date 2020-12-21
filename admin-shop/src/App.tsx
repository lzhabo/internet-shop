import React from "react";
import styled from "@emotion/styled";
import Products from "@components/Products";
import SideBar from "@components/SideBar";

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
      {/*<Products />*/}
      <SideBar />
      {/*<Switch>*/}
      {/*  <Route path={ROUTES.ROOT}>*/}
      {/*    <SideBar />*/}
      {/*  </Route>*/}
      {/*</Switch>*/}
    </Root>
  );
};

export default App;
