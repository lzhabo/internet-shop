import styled from "@emotion/styled";
import React from "react";
import { Route, Switch } from "react-router-dom";
import { ROUTES } from "@stores/RouterStore";
import Products from "@src/screens/Product/Products";
import AddEditProductForm from "@src/screens/Product/AddEditProductForm";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductRoute: React.FC<IProps> = () => {
  return (
    <Root>
      <Switch>
        <Route exact path={ROUTES.PRODUCTS}>
          <Products />
        </Route>
        <Route exact path={[ROUTES.NEW_PRODUCT, ROUTES.EDIT]}>
          <AddEditProductForm />
        </Route>
      </Switch>
    </Root>
  );
};
export default ProductRoute;
