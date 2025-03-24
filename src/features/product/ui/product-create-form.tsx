import { cn } from "@/shared";
import { Button, Form, Input, InputNumber, Upload } from "antd";
import { RcFile } from "antd/es/upload";
import React, { useState } from "react";
import { ProductCreate } from "../types";
import { useProductStore } from "../model";

const { TextArea } = Input;

interface Props {
  className?: string;
}

type FormValues = {
  title: string;
  description: string;
  category: string;
  price: number;
};

export const ProductCreateForm: React.FC<Props> = ({ className }) => {
  const [form] = Form.useForm<FormValues>();

  const { createProduct } = useProductStore();
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const beforeUpload = (file: RcFile) => {
    if (!file) {
      return;
    }

    if (!file.type.startsWith("image/")) {
      return;
    }

    const fileSize = file.size / 1000 / 1000;

    if (fileSize > 2) {
      return;
    }

    const imageUrl = URL.createObjectURL(file);
    setImageUrl(imageUrl);

    return false;
  };

  const handleRemove = () => {
    imageUrl && URL.revokeObjectURL(imageUrl);
    setImageUrl(null);
  };

  const handleSubmit = async (values: FormValues) => {
    if (!imageUrl) return;

    const req: ProductCreate = {
      ...values,
      image: imageUrl,
    };

    createProduct(req);

    form.resetFields();
  };

  return (
    <Form
      form={form}
      className={cn("w-full", className)}
      layout="vertical"
      style={{ maxWidth: "500px" }}
      onFinish={handleSubmit}
    >
      <Form.Item
        name="title"
        label="Название"
        rules={[
          {
            required: true,
            message: "Поле обязательно",
          },
          {
            max: 100,
            message: "Максимум 100 символов",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="description"
        rules={[
          {
            required: true,
            message: "Поле обязательно",
          },
          {
            max: 400,
            message: "Максимум 400 символов",
          },
        ]}
        label="Описание"
      >
        <TextArea rows={4} />
      </Form.Item>
      <Form.Item
        name="category"
        label="Категория"
        rules={[
          {
            required: true,
            message: "Поле обязательно",
          },
          {
            max: 100,
            message: "Максимум 100 символов",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        rules={[
          {
            required: true,
            message: "Поле обязательно",
          },
        ]}
        name="price"
        label="Цена"
      >
        <InputNumber className="w-full!" type="number" min={1} />
      </Form.Item>
      <Form.Item>
        <Upload
          maxCount={1}
          showUploadList={{ showPreviewIcon: false }}
          beforeUpload={beforeUpload}
          onRemove={handleRemove}
          listType="picture-card"
        >
          Загрузить изображение
        </Upload>
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit">Отправить</Button>
      </Form.Item>
    </Form>
  );
};
