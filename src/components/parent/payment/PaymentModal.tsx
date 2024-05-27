'use client';

import axios from '@/utils/axios';
import { Form, Input, Modal, Select } from 'antd';
import React, { FC, useState } from 'react';
import { mutate } from 'swr';

interface Props {
  isOpen: boolean;
  editedPayment?: any;
  setIsOpen: (isOpen: boolean) => void;
}

const AddPaymentModal: FC<Props> = ({ isOpen, editedPayment, setIsOpen }) => {
  const [loading, setLoading] = useState(false);

  return (
    <Modal
      title="Add payment"
      open={isOpen}
      onCancel={() => setIsOpen(false)}
      okText={editedPayment ? 'Edit' : 'Add'}
      okButtonProps={{ loading, form: 'AddPaymentForm', htmlType: 'submit' }}
      destroyOnClose={true}
    >
      <AddPaymentForm
        setLoading={setLoading}
        setIsOpen={setIsOpen}
        editedPayment={editedPayment}
      />
    </Modal>
  );
};

export default AddPaymentModal;

interface PropsForm {
  editedPayment?: any;
  setLoading: (loading: boolean) => void;
  setIsOpen: (isOpen: boolean) => void;
}

const AddPaymentForm: FC<PropsForm> = ({
  editedPayment,
  setLoading,
  setIsOpen,
}) => {
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      if (editedPayment)
        await axios.put(`/payment/${editedPayment._id}`, values);
      else await axios.post('/payment', values);
      await mutate('/payment');
      setIsOpen(false);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <Form
      name="AddPaymentForm"
      form={form}
      initialValues={editedPayment}
      onFinish={onFinish}
      layout="vertical"
      onFinishFailed={(errorInfo) => {
        console.log('Failed:', errorInfo);
      }}
    >
      <Form.Item
        label="Teacher"
        name="teacher"
        rules={[{ required: true, message: 'Teacher is required' }]}
      >
        <Select
          options={[
            { label: 'Teacher1', value: 'teacher1' },
            { label: 'Teacher2', value: 'teacher2' },
          ]}
          placeholder="Teacher"
        />
      </Form.Item>
      <Form.Item
        label="Child"
        name="child"
        rules={[{ required: true, message: 'Child is required' }]}
      >
        <Select
          options={[
            { label: 'Child1', value: 'child1' },
            { label: 'Child2', value: 'child2' },
          ]}
          placeholder="Child"
        />
      </Form.Item>

      <Form.Item
        label="Amount"
        name="amount"
        rules={[{ required: true, message: 'Amount is required' }]}
      >
        <Input placeholder="Amount" type="number" />
      </Form.Item>
    </Form>
  );
};
