import styled from "@emotion/styled";
import React, { useState } from "react";
import { useForm } from "antd/es/form/Form";
import uploadService from "shop-common/services/uploadService";
import {
  Form,
  Input,
  Button,
  InputNumber,
  notification,
  Select,
  Upload,
  Avatar,
  Space,
  Image,
} from "antd";
import { useStores } from "@stores";
import ImageUpload from "@components/ImageUpload";

interface IProps {}

interface IFormValues {
  name: string;
  description?: string;
  price: number;
  images?: string[];
  size: number;
  type: string;
  amount: number;
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const NewProductForm: React.FC<IProps> = () => {
  const [form] = useForm();
  const { productStore } = useStores();
  const [imgs, setImgs] = useState<string[]>([]);
  const handleFinish = (v: IFormValues) => {
    productStore
      .add({ ...productStore.emptyProductItem, ...v, images: imgs })
      .then(() => {
        form.resetFields();
        notification.success({ message: "success" });
      });
  };

  return (
    <Root>
      <Form
        form={form}
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 8 }}
        layout="horizontal"
        onFinish={handleFinish}
      >
        <ImageUpload values={imgs} onChange={setImgs} />
        <Space>
          {imgs?.map((i, k) => (
            <Image style={{ height: 64, width: "auto" }} src={i} key={k} />
          ))}
        </Space>
        <Form.Item
          name="name"
          label="Product Name"
          rules={[{ required: true, message: "Please input name" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="price"
          label="Price"
          rules={[{ required: true, message: "Please input price" }]}
        >
          <InputNumber
            formatter={(value) =>
              `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            min={0}
          />
        </Form.Item>
        <Form.Item
          name="size"
          label="Size"
          rules={[{ required: true, message: "Please input size" }]}
        >
          <InputNumber min={0} />
        </Form.Item>
        <Form.Item
          name="amount"
          label="Amount"
          rules={[{ required: true, message: "Please amount size" }]}
        >
          <InputNumber min={0} />
        </Form.Item>

        <Form.Item
          label="Type"
          name="type"
          rules={[{ required: true, message: "Please input type" }]}
        >
          <Select>
            <Select.Option value="Ring">Ring</Select.Option>
            <Select.Option value="Bracelet">Bracelet</Select.Option>
            <Select.Option value="Neckless">Neckless</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Material"
          name="material"
          rules={[{ required: true, message: "Please input material" }]}
        >
          <Select>
            <Select.Option value="gold">Gold</Select.Option>
            <Select.Option value="silver">Silver</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item name="description" label="Description">
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
        {/*<Upload {...props}>*/}
        {/*  <Button icon={<UploadOutlined />}>Upload</Button>*/}
        {/*</Upload>*/}
      </Form>
    </Root>
  );
};
export default NewProductForm;
