import React from 'react';
import { Form, Input } from 'antd';

const SignUp = () => {
  return (
    <>
      <Form.Item
        label="First name"
        name="firstName"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input className="w-[400px]" />
      </Form.Item>
      <Form.Item
        label="Last name"
        name="lastName"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input className="w-[400px]" />
      </Form.Item>
      <Form.Item
        label="Phone Number"
        name="phone"
        rules={[{ required: true, message: 'Please input your phone number!' }]}
      >
        <Input className="w-[400px]" />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input type="email" className="w-[400px]" />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password className="w-[400px]" />
      </Form.Item>
      <Form.Item
        label="Confirm Password"
        name="confirmPassword"
        rules={[{ required: true, message: 'Please confirm your password!' }]}
      >
        <Input.Password className="w-[400px]" />
      </Form.Item>
    </>
  );
};

export default SignUp;
