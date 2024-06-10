'use client';

import axios from '@/utils/axios';
import { Form, Input, Modal, Select } from 'antd';
import React, { FC, useState } from 'react';
import { mutate } from 'swr';

interface Props {
  isOpen: boolean;
  editedPayment?: any;
  setIsOpen: (isOpen: boolean) => void;
  _submit: any;
}

const AddPaymentModal: FC<Props> = ({
  isOpen,
  editedPayment,
  setIsOpen,
  _submit,
}) => {
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
        _submit={_submit}
      />
    </Modal>
  );
};

export default AddPaymentModal;

interface PropsForm {
  editedPayment?: any;
  setLoading: (loading: boolean) => void;
  setIsOpen: (isOpen: boolean) => void;
  _submit: any;
}

const AddPaymentForm: FC<PropsForm> = ({
  editedPayment,
  setLoading,
  setIsOpen,
  _submit,
}) => {
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    setLoading(true);
    await _submit(values);
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
            { label: 'Ahmed', value: 'teacher1' },
            { label: 'Walid', value: 'teacher2' },
          ]}
          placeholder="Teacher"
        />
      </Form.Item>
      <Form.Item
        label="Teacher Email"
        name="teacher_email"
        rules={[{ required: true, message: 'Teacher email' }]}
      >
        <Input placeholder="Teacher Email" type="text" />
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
        label="Formation"
        name="formation"
        rules={[{ required: true, message: 'Formation' }]}
      >
        <Input placeholder="Formation" type="text" />
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
