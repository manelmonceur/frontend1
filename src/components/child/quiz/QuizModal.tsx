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
        <Form.Item label="What shape has 3 sides?">
          <Radio.Group className="flex flex-col">
            <Radio value="Response1">Square</Radio>
            <Radio value="Response2">Circle</Radio>
            <Radio value="Response3">Triangle</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Which of the following is a fraction?">
          <Radio.Group className="flex flex-col">
            <Radio value="Response1">0.5</Radio>
            <Radio value="Response2">1/2</Radio>
            <Radio value="Response3">2</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="If a pizza is cut into 8 equal slices and you eat 3 slices, what fraction of the pizza is left?">
          <Radio.Group className="flex flex-col">
            <Radio value="Response1">5/8</Radio>
            <Radio value="Response2">3/8</Radio>
            <Radio value="Response3">1/2</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default QuizModal;
