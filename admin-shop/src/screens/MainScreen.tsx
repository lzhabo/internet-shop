import styled from "@emotion/styled";
import React from "react";
import { Layout, Menu } from "antd";
import Products from "@components/Products";
import { ROUTES } from "@stores/RouterStore";
import { PieChartOutlined, DiffOutlined } from "@ant-design/icons";
import { Route, Switch } from "react-router-dom";
import NewProductForm from "@components/NewProductForm";
import { useHistory } from "react-router-dom";
import { useStores } from "@stores";
import { useObserver } from "mobx-react-lite";
import Loading from "@components/Loading";
import Item from "antd/es/list/Item";
import RegistrationForm from "@components/RegistrationForm";
import ProductCard from "@components/ProductCard";

const { Header, Content, Footer, Sider } = Layout;

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainScreen: React.FC<IProps> = () => {
  const rootStore = useStores();
  const initialized = useObserver(() => rootStore.initialized);
  const history = useHistory();
  return !initialized ? (
    <Root>
      <Loading />
    </Root>
  ) : (
    <Root>
      <Header style={{ padding: 0 }}>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" onClick={() => history.push(ROUTES.PRODUCTS)}>
            All products
          </Menu.Item>
          <Menu.Item key="3" onClick={() => history.push(ROUTES.NEW)}>
            Add product
          </Menu.Item>
        </Menu>
      </Header>
      <Layout style={{ minHeight: "100vh" }}>
        <Layout className="site-layout">
          <Content style={{ margin: "0 16px" }}>
            <div>
              <Switch>
                <Route exec path={ROUTES.NEW}>
                  <NewProductForm />
                </Route>
                <Route exec path={ROUTES.REGISTER}>
                  <RegistrationForm />
                </Route>
                <Route exec path={ROUTES.PRODUCTS}>
                  <Products />
                </Route>
                <Route exec path={ROUTES.EDIT}>
                  <ProductCard />
                </Route>
              </Switch>
            </div>
          </Content>
        </Layout>
      </Layout>
    </Root>
  );
};
export default MainScreen;
