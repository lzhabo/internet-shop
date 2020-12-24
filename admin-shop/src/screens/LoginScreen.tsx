import styled from "@emotion/styled";
import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { useStores } from "@stores";
import { useParams } from "react-router-dom";

interface IProps {}

interface IFormValues {
  login: string;
  password: string;
  remember?: boolean;
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  //align-items: center;
`;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const LoginScreen: React.FC<IProps> = () => {
  const { accountStore } = useStores();

  const handleFinish = (v: IFormValues) =>
    accountStore.signInWithEmailAndPassword(v.login, v.password, v.remember);

  return (
    <Root>
      <Form
        {...layout}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 8 }}
        layout="horizontal"
        name="basic"
        initialValues={{ remember: true }}
        onFinish={handleFinish}
      >
        <Form.Item
          label="Login"
          name="login"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </Root>
  );
};
export default LoginScreen;
