import styled from "@emotion/styled";
import React from "react";
import { Layout, Menu } from "antd";
import Products from "@components/Products";
import { ROUTES } from "@stores/RouterStore";
import { PieChartOutlined, DiffOutlined } from "@ant-design/icons";
import { Route } from "react-router-dom";
import NewProductForm from "@components/NewProductForm";
import { useHistory } from "react-router-dom";
import RegistrationForm from "@components/RegistrationForm";

const { Header, Content, Footer, Sider } = Layout;

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const SideBar: React.FC<IProps> = () => {
  const history = useHistory();
  return (
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
              <Route path={ROUTES.NEW}>
                <NewProductForm />
              </Route>
              <Route path={ROUTES.REGISTER}>
                <RegistrationForm />
              </Route>
              <Route path={ROUTES.ROOT}>
                <div />
              </Route>
              <Route path={ROUTES.PRODUCTS}>
                <Products />
              </Route>
            </div>
          </Content>
        </Layout>
      </Layout>
    </Root>
  );
};
export default SideBar;
