import React from 'react';
import { Form, Input } from 'antd';

const SignIn = () => {
  return (
    <>
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

      <a href="#" className="text-sky-600">
        Reset Password
      </a>
    </>
  );
};

export default SignIn;
