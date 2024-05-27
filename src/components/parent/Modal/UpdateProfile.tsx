import React, { FC } from 'react';
import { Button, Modal } from 'antd';
import { Form, Input, InputNumber } from 'antd';

interface UpdateProfileProps {
  isOpen: boolean;
  close: () => void;
}

const UpdateProfile: FC<UpdateProfileProps> = ({ isOpen, close }) => {
  return (
    <Modal title="Update Profile" open={isOpen} footer={null} onCancel={close}>
      <Form
        layout="vertical"
        name="nest-messages"
        // onFinish={onFinish}
        style={{ maxWidth: 600 }}
        // validateMessages={validateMessages}
      >
        <Form.Item
          name={['user', 'name']}
          label="Name"
          rules={[{ required: true }]}
        >
          <Input placeholder="name" />
        </Form.Item>
        <Form.Item
          name={['user', 'email']}
          label="Email"
          rules={[{ type: 'email' }]}
        >
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item
          name={['user', 'phone']}
          label="Phone"
          rules={[{ type: 'number', min: 0, max: 99 }]}
        >
          <InputNumber placeholder="Phone number" className="!w-full" />
        </Form.Item>

        <Form.Item className="flex items-end justify-end">
          <Button type="primary" htmlType="submit">
            Update
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UpdateProfile;
