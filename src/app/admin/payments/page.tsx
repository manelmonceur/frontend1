'use client';

import React, { useState } from 'react';
import { Form, Modal, Table, Input } from 'antd';
import { Button, Space } from 'antd';
import { FiMessageCircle } from 'react-icons/fi';

const Payments = () => {
  const [open, setOpen] = useState(false);

  const data = [
    {
      _id: '1',
      teacher: 'teacher1',
      teacher_email: 'ahmed@gmail.com',
      parent: 'Tawfik',
      parent_email: 'tawfik@gmail.com',
      child: 'child1',
      formation: 'Math',
      amount: '50dt',
      date: '22/07/2023',
    },
    {
      _id: '2',
      teacher: 'teacher2',
      teacher_email: 'walid@gmail.com',
      parent: 'Tawfik',
      parent_email: 'tawfik@gmail.com',
      child: 'child2',
      formation: 'Science',
      amount: '100dt',
      date: '03/01/2023',
    },
  ];

  const columns = [
    {
      title: 'Parent Name',
      dataIndex: 'parent',
      key: 'parent',
    },
    {
      title: 'Parent Email',
      dataIndex: 'parent_email',
      key: 'parent_email',
    },
    {
      title: 'Teacher',
      dataIndex: 'teacher',
      key: 'teacher',
    },
    {
      title: 'Teacher Email',
      dataIndex: 'teacher_email',
      key: 'teacher_email',
    },
    {
      title: 'Child',
      dataIndex: 'child',
      key: 'child',
    },
    {
      title: 'Formation',
      dataIndex: 'formation',
      key: 'formation',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    // {
    //   title: 'Action',
    //   key: 'action',
    //   render: (text: any, record: any) => (
    //     <Space>
    //       <Button
    //       // onClick={() => {
    //       //   setEditedMeet(record);
    //       //   setIsMeetModalOpen(true);
    //       // }}
    //       >
    //         Edit
    //       </Button>
    //       <Button
    //         type="primary"
    //         danger
    //         // onClick={() => {
    //         //   modal.confirm({
    //         //     title: "Are you sure you want to delete this child?",
    //         //     onOk: async () => {
    //         //       await axios.delete(`/child/${record._id}`);
    //         //       await mutate("/child");
    //         //       message.success("Child deleted successfully");
    //         //     },
    //         //   });
    //         // }}
    //       >
    //         Delete
    //       </Button>
    //     </Space>
    //   ),
    // },
  ];

  return (
    <div className="p-4 space-y-3">
      <div>
        <h1 className="text-xl">Payments</h1>
        <div className="flex justify-end">
          {/* <Button
            type="primary"
            onClick={() => {
              setOpen(true);
            }}
            className="!flex justify-center items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            Add Payment
          </Button> */}
        </div>
      </div>

      <Table dataSource={data} columns={columns} />
      <ModalAddPayment open={open} close={() => setOpen(false)} />
    </div>
  );
};

export default Payments;

const ModalAddPayment = ({ open, close }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();

  const onSubmit = async (values: any) => {};
  return (
    <div>
      <Modal title="Add Payment" open={open} onCancel={close} footer={null}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          className="min-h-[600px] flex flex-col justify-center items-center"
          layout="vertical"
          onFinish={onSubmit}
        >
          <Form.Item
            label="Parent Name"
            name="name"
            rules={[{ required: true, message: 'Please input Name!' }]}
          >
            <Input className="!w-[400px]" />
          </Form.Item>

          <Form.Item
            label="Parent Email"
            name="parent_email"
            rules={[{ required: true, message: 'Please input Name!' }]}
          >
            <Input type="email" className="!w-[400px]" />
          </Form.Item>

          <Form.Item
            label="Teacher Name"
            name="teacher_name"
            rules={[{ required: true, message: 'Please input Name!' }]}
          >
            <Input className="!w-[400px]" />
          </Form.Item>

          <Form.Item
            label="Teacher email"
            name="teacher_email"
            rules={[{ required: true, message: 'Please input Email!' }]}
          >
            <Input type="email" className="!w-[400px]" />
          </Form.Item>

          <Form.Item
            label="Child"
            name="Child"
            rules={[{ required: true, message: 'Please input Child!' }]}
          >
            <Input className="!w-[400px]" />
          </Form.Item>

          <Form.Item
            label="Formation"
            name="formation"
            rules={[{ required: true, message: 'Please input formation!' }]}
          >
            <Input className="!w-[400px]" />
          </Form.Item>

          <Form.Item
            label="Amount"
            name="amount"
            rules={[{ required: true, message: 'Please input amount!' }]}
          >
            <Input className="!w-[400px]" />
          </Form.Item>

          <Form.Item>
            <div className="flex flex-col items-center gap-4">
              {' '}
              <Button
                className="flex items-center gap-4"
                htmlType="submit"
                loading={loading}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>{' '}
                Create
              </Button>
              {error && <p className="text-red-500">{error}</p>}
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
