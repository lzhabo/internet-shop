import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { Observer } from "mobx-react-lite";
import { useStores } from "@stores";
import { ROUTES } from "@stores/RouterStore";

interface IProps extends RouteProps {}

const PrivateRoute: React.FC<IProps> = ({ children, ...rest }) => {
  const { accountStore } = useStores();
  console.log(accountStore.admin);
  return (
    <Route
      {...rest}
      render={({ location }) => (
        <Observer>
          {() =>
            accountStore.admin == null ? (
              <Redirect
                to={{ pathname: "/login", state: { from: location } }}
              />
            ) : (
              <React.Fragment>{children}</React.Fragment>
            )
          }
        </Observer>
      )}
    />
  );
};
export default PrivateRoute;
