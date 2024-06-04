import React from 'react';
import { DatePicker, Form, Input } from 'antd';

const { RangePicker } = DatePicker;

const SignUp = () => {
  return (
    <div className="w-full grid grid-cols-2">
      <Form.Item
        label="Name"
        name="name"
        className="w-full "
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input className="w-full" />
      </Form.Item>
      <Form.Item
        label="Phone"
        name="phone"
        className="w-full "
        rules={[{ required: true, message: 'Please input your phone number!' }]}
      >
        <Input className="min-w-full" />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        className="w-full"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input type="email" className="w-full" />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        className="w-full"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password className="w-full mt-5" />
      </Form.Item>
      <Form.Item
        label="Confirm password"
        name="confirmPassword"
        className="w-full"
        rules={[{ required: true, message: 'Please confirm your password!' }]}
      >
        <Input.Password className="w-full" />
      </Form.Item>

      <Form.Item
        label="Meet date"
        name="dateRange"
        className="w-full"
        rules={[{ required: true, message: 'Please select a date range!' }]}
      >
        <RangePicker className="w-full" />
      </Form.Item>
    </div>
  );
};

export default SignUp;
