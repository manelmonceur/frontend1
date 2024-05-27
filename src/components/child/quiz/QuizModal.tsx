import { Form, Modal, Radio } from 'antd';
import React from 'react';

const QuizModal = ({ isOpen, setIsOpen }) => {
  return (
    <Modal title="Quiz 1" open={isOpen} onCancel={() => setIsOpen(false)}>
      <Form layout="vertical" name="nest-messages" style={{ maxWidth: 600 }}>
        <Form.Item label="What is 7 + 5?">
          <Radio.Group className="flex flex-col">
            <Radio value="Response1">10</Radio>
            <Radio value="Response2">12</Radio>
            <Radio value="Response3">14</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Which planet is known as the Red Planet?">
          <Radio.Group className="flex flex-col">
            <Radio value="Response1">Mars</Radio>
            <Radio value="Response2">Jupiter</Radio>
            <Radio value="Response3">Venus</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Who was the first President of the United States?">
          <Radio.Group className="flex flex-col">
            <Radio value="Response1">Abraham Lincoln</Radio>
            <Radio value="Response2">George Washington</Radio>
            <Radio value="Response3">Thomas Jefferson</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Which artist painted the Mona Lisa?">
          <Radio.Group className="flex flex-col">
            <Radio value="Response1">Vincent van Gogh</Radio>
            <Radio value="Response2">Pablo Picasso</Radio>
            <Radio value="Response3">Leonardo da Vinci</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default QuizModal;
