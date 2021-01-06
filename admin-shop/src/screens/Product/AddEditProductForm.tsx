import styled from "@emotion/styled";
import React, { useState } from "react";
import { useForm } from "antd/es/form/Form";
import {
  Form,
  Input,
  Button,
  InputNumber,
  notification,
  Select,
  Space,
  Image,
  Typography,
} from "antd";
import { useStores } from "@stores";
import ImageUpload from "@components/ImageUpload";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { IProduct } from "shop-common/models";

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

interface IdParam {
  id: string;
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const AddEditProductForm: React.FC<IProps> = () => {
  const [form] = useForm();
  const { productStore } = useStores();
  const { id } = useParams<IdParam>();
  const isAddMode = !id;
  const [product, setProduct] = useState<IProduct>();
  useEffect(() => {
    form.resetFields();
    if (!isAddMode) {
      productStore.getProductById(id).then((product) => {
        form.setFieldsValue({
          name: product.name,
          price: product.price,
          oldPrice: product.oldPrice,
          type: product.type,
          material: product.material,
          description: product.description,
          photos: product.photos,
        });
        setProduct(product);
      });
    }
  }, []);
  const [imgs, setImgs] = useState<string[]>([]);
  const handleFinish = (v: IFormValues) => {
    return isAddMode ? createProduct(v) : updateProduct(id, v);
  };

  function createProduct(v: IFormValues) {
    productStore
      .add({ ...productStore.emptyProductItem, ...v, images: imgs })
      .then(() => {
        form.resetFields();
        notification.success({ message: "success" });
      });
  }

  function updateProduct(id: string, data: IFormValues) {
    // productStore
    //   .update({ ...productStore.emptyProductItem, ...data }, id)
    //   .then(() => {
    //     form.resetFields();
    //     notification.success({ message: "success" });
    //   })
    //   .catch((error) => {
    //     notification.error({ message: error });
    //   });
  }

  return (
    <Root>
      <Typography.Title level={4}>
        {isAddMode ? "Add User" : "Edit User"}
      </Typography.Title>
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
          name="material"
          label="Material"
          rules={[{ required: true, message: "Please input size" }]}
        >
          <Input />
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
export default AddEditProductForm;
