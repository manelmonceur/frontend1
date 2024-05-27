"use client";

import axios from "@/utils/axios";
import { Form, Input, Modal } from "antd";
import React, { FC, useState } from "react";
import { mutate } from "swr";
import { Child } from "../../../../types/api";

interface Props {
  isOpen: boolean;
  editedChild?: Child;
  setIsOpen: (isOpen: boolean) => void;
}

const AddChildModal: FC<Props> = ({ isOpen, editedChild, setIsOpen }) => {
  const [loading, setLoading] = useState(false);

  return (
    <Modal
      title="Select a child"
      open={isOpen}
      onCancel={() => setIsOpen(false)}
      okText={editedChild ? "Edit" : "Add"}
      okButtonProps={{ loading, form: "AddChildForm", htmlType: "submit" }}
      destroyOnClose={true}
    >
      <AddChildForm
        setLoading={setLoading}
        setIsOpen={setIsOpen}
        editedChild={editedChild}
      />
    </Modal>
  );
};

export default AddChildModal;

interface PropsForm {
  editedChild?: Child;
  setLoading: (loading: boolean) => void;
  setIsOpen: (isOpen: boolean) => void;
}

const AddChildForm: FC<PropsForm> = ({
  editedChild,
  setLoading,
  setIsOpen,
}) => {
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      if (editedChild) await axios.put(`/child/${editedChild._id}`, values);
      else await axios.post("/child", values);
      await mutate("/child");
      setIsOpen(false);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <Form
      name="AddChildForm"
      form={form}
      initialValues={editedChild}
      onFinish={onFinish}
      layout="vertical"
      onFinishFailed={(errorInfo) => {
        console.log("Failed:", errorInfo);
      }}
    >
      <Form.Item
        label="First name"
        name="firstName"
        rules={[{ required: true, message: "First name is required" }]}
      >
        <Input placeholder="First name" />
      </Form.Item>
      <Form.Item
        label="Last name"
        name="lastName"
        rules={[{ required: true, message: "Last name is required" }]}
      >
        <Input placeholder="Last name" />
      </Form.Item>
      <Form.Item
        label="Class"
        name="class"
        rules={[{ required: true, message: "Class is required" }]}
      >
        <Input placeholder="Class" />
      </Form.Item>
    </Form>
  );
};
