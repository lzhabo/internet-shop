import styled from "@emotion/styled";
import React from "react";
import { Form, Input, Button, Select } from "antd";
import { useHistory } from "react-router-dom";
import { useStores } from "@stores";
import Subtitle from "@components/Subtitle";
import { ROUTES } from "@stores/RouterStore";
import Title from "@components/Title";
import Btn from "@components/Btn";
import ArrowLeftIcon from "@components/icons/ArrowLeftIcon";
import { FlexContainer } from "@components/FlexContaner";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

interface IFormValues {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  apartment?: string;
  city: string;
  zipCode: string;
  country: string;
  phone: string;
}

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 10 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Checkout: React.FC<IProps> = () => {
  const history = useHistory();
  const { basketStore } = useStores();
  const handleFinish = (v: IFormValues) => {
    console.log("tada confirm");
  };

  return (
    <Root>
      <Title>Contact information</Title>
      <div>
        <Form
          // labelCol={{ span: 3 }}
          // wrapperCol={{ span: 10 }}
          // layout="horizontal"
          // onFinish={handleFinish}
          {...layout}
          name="checkoutForm"
          initialValues={{ remember: true }}
          onFinish={handleFinish}
        >
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: "Enter valid email" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="firstName" label="First name">
            <Input />
          </Form.Item>
          <Form.Item
            name="lastName"
            label="Last name"
            rules={[{ required: true, message: "Enter a last name" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="country" label="Country">
            <Select>
              <Select.Option value="ukraine">Ukraine</Select.Option>
              <Select.Option value="russia">Russia</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name="city" label="City">
            <Input />
          </Form.Item>
          <Form.Item
            name="address"
            label="Address"
            rules={[{ required: true, message: "Enter an address" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="zipCode"
            label="ZIP"
            rules={[{ required: true, message: "Enter a ZIP / postal code" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Phone"
            rules={[{ required: true, message: "Please enter phone" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item></Form.Item>
        </Form>
        <FlexContainer alignItems="center" justifyContent="space-between">
          <ArrowLeftIcon />
          <Subtitle onClick={() => history.push(ROUTES.BASKET)}>
            Return to cart
          </Subtitle>
        </FlexContainer>
      </div>
    </Root>
  );
};
export default Checkout;
