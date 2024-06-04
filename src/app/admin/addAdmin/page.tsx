'use client';
import React, { useState } from 'react';
import { Form, Button, Input, Select } from 'antd';
import { PiSignInThin } from 'react-icons/pi';
import axios from '@/utils/axios';
import { HiUserPlus } from 'react-icons/hi2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddAdmin = () => {
  const [role, setRole] = useState(null);
  const [gender, setGender] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();

  const onSubmit = async (values: any) => {
    setLoading(true);
    try {
      const response = await axios.post('/user', { ...values, role: role });
      toast.success('Form submitted successfully!');
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
          label="Name"
          name="name"
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
          <Select
            className="!w-[400px]"
            showSearch
            placeholder="Search to Select"
            options={[
              {
                value: 1,
                label: 'Male',
              },
              {
                value: 2,
                label: 'Female',
              },
            ]}
            onChange={(value) => setGender(value)}
          />
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
                value: 2,
                label: 'Admin',
              },
              {
                value: 3,
                label: 'Mentor',
              },
              {
                value: 4,
                label: 'Parent',
              },
              {
                value: 5,
                label: 'Teacher',
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
      <ToastContainer />
    </div>
  );
};

export default AddAdmin;
