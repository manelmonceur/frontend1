import React, { FC } from 'react';
import { Button, Modal, Rate } from 'antd';
import { Form, Input, InputNumber } from 'antd';
import { IoIosStar } from 'react-icons/io';

interface UpdateProfileProps {
  isOpen: boolean;
  close: () => void;
}

const RatingModal: FC<UpdateProfileProps> = ({ isOpen, close }) => {
  return (
    <Modal title="Rate" open={isOpen} onCancel={close}>
      <Form
        layout="vertical"
        name="nest-messages"
        className="pt-10 flex justify-center"
        style={{ maxWidth: 600 }}
      >
        <Form.Item
          name={'rate'}
          required
          rules={[{ required: true, message: 'Rate is required' }]}
        >
          <Rate character={<IoIosStar size={40} />} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default RatingModal;
