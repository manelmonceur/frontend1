'use client';
import React, { useState } from 'react';
import { Form, Button, Input, Select } from 'antd';
import { PiSignInThin } from 'react-icons/pi';
import axios from '@/utils/axios';
import { HiUserPlus } from 'react-icons/hi2';

const AddAdmin = () => {
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();

  const onSubmit = async (values: any) => {
    setLoading(true);
    try {
      await axios.post('/user', { ...values, role: role });
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  return (
    <div className="flex w-full h-full items-center justify-center">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        className="min-h-[600px] flex flex-col justify-center items-center "
        layout="vertical"
        onFinish={onSubmit}
      >
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
          rules={[
            { required: true, message: 'Please input your phone number!' },
          ]}
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
          label="Gender"
          name="gender"
          rules={[{ required: true, message: 'Please input your gender!' }]}
        >
          <Input type="text" className="w-[400px]" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password className="w-[400px]" />
        </Form.Item>
        <Form.Item
          label="Role"
          name="role"
          rules={[{ required: true, message: 'Please input your role!' }]}
        >
          <Select
            className="!w-[400px]"
            showSearch
            placeholder="Search to Select"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? '').includes(input)
            }
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? '')
                .toLowerCase()
                .localeCompare((optionB?.label ?? '').toLowerCase())
            }
            options={[
              {
                value: 'parent',
                label: 'parent',
              },
              {
                value: 'admin',
                label: 'admin',
              },
              {
                value: 'teacher',
                label: 'teacher',
              },
              {
                value: 'mentor',
                label: 'mentor',
              },
            ]}
            onChange={(value) => setRole(value)}
          />
        </Form.Item>

        <Form.Item>
          <div className="flex flex-col items-center gap-4">
            {' '}
            <Button
              className="flex items-center gap-4"
              htmlType="submit"
              loading={loading}
            >
              <HiUserPlus size={24} /> Create
            </Button>
            {error && <p className="text-red-500">{error}</p>}
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddAdmin;
