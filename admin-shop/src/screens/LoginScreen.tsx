import styled from "@emotion/styled";
import React from "react";
import { Form, Input, Button, Checkbox, notification } from "antd";

interface IProps {}

interface IFormValues {
  name: string;
  password: string;
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
  const onFinishFailed = (errorInfo: IFormValues) => {
    notification.error({ message: "We couldn't log you in" });
  };
  const handleFinish = (v: IFormValues) => {
    notification.success({ message: "success" });
  };
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
        // onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
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
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Root>
  );
};
export default LoginScreen;
