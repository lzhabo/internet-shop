import styled from "@emotion/styled";
import React from "react";
import { Layout, Menu } from "antd";
import Products from "@components/Products";
import { ROUTES } from "@stores/RouterStore";
import { PieChartOutlined, DiffOutlined } from "@ant-design/icons";
import { Route, Switch } from "react-router-dom";
import NewProductForm from "@components/NewProductForm";
import { useHistory } from "react-router-dom";
import RegistrationForm from "@components/RegistrationForm";
import { useStores } from "@stores";
import { useObserver } from "mobx-react-lite";
import Loading from "@components/Loading";

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
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible>
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item
              key="1"
              icon={<PieChartOutlined />}
              onClick={() => history.push(ROUTES.PRODUCTS)}
            >
              All products
            </Menu.Item>
            <Menu.Item
              key="2"
              icon={<DiffOutlined />}
              onClick={() => history.push(ROUTES.NEW)}
            >
              Add product
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: "0 16px" }}>
            <div>
              <Switch>
                <Route path={ROUTES.NEW}>
                  <NewProductForm />
                </Route>
                <Route path={ROUTES.REGISTER}>
                  <RegistrationForm />
                </Route>
                <Route path={ROUTES.PRODUCTS}>
                  <Products />
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
