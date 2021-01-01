import styled from "@emotion/styled";
import React from "react";
import { Form, Input, Button, Select, notification } from "antd";
import { useHistory } from "react-router-dom";
import { useStores } from "@stores";
import Subtitle from "@components/Subtitle";
import { ROUTES } from "@stores/RouterStore";
import Title from "@components/Title";
import ArrowLeftIcon from "@components/icons/ArrowLeftIcon";
import { FlexContainer } from "@components/FlexContaner";
import { useObserver } from "mobx-react-lite";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

interface IFormValues {
  firstName: string;
  lastName: string;
  country: string;
  city: string;
  address: string;
  apartment?: string;
  postalCode: string;
  totalPrice: number;
  phone: string;
  email: string;
}

const layout = {
  // // wrapperCol: { span: 8 },
  // wrapperCol: { offset: 7, span: 10 },
};

const Checkout: React.FC<IProps> = () => {
  const history = useHistory();
  const { basketStore, orderStore } = useStores();
  const basket = useObserver(() => basketStore.basketItems);

  const handleFinish = (v: IFormValues) => {
    if (basket.length > 0) {
      orderStore
        .add({
          ...orderStore.emptyOrderItem,
          ...v,
          cart: basket,
        })
        .then(() => {
          notification.success({ message: "You order has been sent!" });
        });
      // basketStore.cleanBasket();
    }
  };

  return (
    <Root>
      <Title>Contact information</Title>
      <div>
        <Form
          {...layout}
          name="checkoutForm"
          initialValues={{ remember: true }}
          onFinish={handleFinish}
        >
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Enter valid email" },
              {
                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: "Please enter valid email",
              },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item name="firstName">
            <Input placeholder="First name" />
          </Form.Item>
          <Form.Item
            name="lastName"
            rules={[{ required: true, message: "Enter a last name" }]}
          >
            <Input placeholder="Last name" />
          </Form.Item>
          <Form.Item
            name="country"
            rules={[{ required: true, message: "Enter a country" }]}
          >
            <Select placeholder="Country">
              <Select.Option value="Ukraine">Ukraine</Select.Option>
              <Select.Option value="Russia">Russia</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name="city">
            <Input placeholder="City" />
          </Form.Item>
          <Form.Item
            name="address"
            rules={[{ required: true, message: "Enter an address" }]}
          >
            <Input placeholder="Address" />
          </Form.Item>
          <Form.Item
            name="postalCode"
            rules={[{ required: true, message: "Enter a ZIP / postal code" }]}
          >
            <Input placeholder="Postal code" />
          </Form.Item>
          <Form.Item
            name="phone"
            rules={[
              {
                required: true,
                message: "Please input you phone",
              },
            ]}
          >
            <Input placeholder="Phone" />
          </Form.Item>
          <Form.Item></Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Continue to shipping
            </Button>
          </Form.Item>
        </Form>
        <FlexContainer alignItems="center">
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
