'use client';
import React, { useEffect, useState } from 'react';
import { Form, Button, Input, Select, DatePicker, Modal, Space } from 'antd';
import axios from '@/utils/axios';
import { MdMissedVideoCall } from 'react-icons/md';
import { Table } from 'antd';
import { createMeeting, getMeetings, getParent } from '@/services/apiService';

const Meetings = () => {
  const [open, setOpen] = useState(false);

  const [data, setData] = useState([]);

  const fetchMeetings = async () => {
    const response = await getMeetings();
    setData(response);
  };

  useEffect(() => {
    fetchMeetings();
  }, []);

  const _data = [
    {
      name: 'meeting',
      mentor: 'Ahmed ben Ahmida',
      mentor_email: 'ahmed@gmail.com',
      parent: 'Walid',
      parent_email: 'walid@gmail.com',
      admin: 'yassin',
      admin_email: 'yassin@gmail.com',
      date: '22/02/2024',
    },
  ];

  const columns = [
    {
      title: 'name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'mentor',
      dataIndex: 'mentor',
      key: 'mentor',
    },
    {
      title: 'Mentor Email',
      dataIndex: 'mentor_email',
      key: 'mentor_email',
    },
    {
      title: 'Parent',
      dataIndex: 'parent',
      key: 'parent',
    },
    {
      title: 'Parent Email',
      dataIndex: 'parent_email',
      key: 'parent_email',
    },
    {
      title: 'Admin',
      dataIndex: 'admin',
      key: 'admin',
    },
    {
      title: 'Admin Email',
      dataIndex: 'admin_email',
      key: 'admin_email',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text: any, record: any) => (
        <Space>
          <Button>Edit</Button>
          <Button type="primary" danger>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="p-4">
      <div>
        <h1 className="text-xl">Meetings</h1>
      </div>
      <div className="flex justify-end">
        <Button
          type="primary"
          onClick={() => {
            setOpen(true);
          }}
          className="!flex justify-center items-center gap-2"
        >
          <MdMissedVideoCall size={24} /> Add Meeting
        </Button>
      </div>

      <Table dataSource={_data} columns={columns} />
      <ModalAddMeeting
        open={open}
        close={() => setOpen(false)}
        fetchData={fetchMeetings}
      />
    </div>
  );
};

export default Meetings;

const ModalAddMeeting = ({ open, close, fetchData }) => {
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();

  const [parents, setParents] = useState([]);

  const fetchParents = async () => {
    const response = await getParent();
    setParents(response);
  };

  useEffect(() => {
    fetchParents();
  }, []);

  const onSubmit = async (values: any) => {
    setLoading(true);
    const data = {
      ...values,
      date: values.Date.format('YYYY-MM-DD HH:MM'),
    };

    try {
      await createMeeting(data);
      await fetchData();
      close();
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  return (
    <div>
      <Modal title="Add Meeting" open={open} onCancel={close} footer={null}>
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
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please input Name!' }]}
          >
            <Input className="!w-[400px]" />
          </Form.Item>
          <Form.Item
            label="Select Parent"
            name="parent"
            rules={[{ required: true, message: 'Please input Select Parent!' }]}
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
              options={parents.map((p: any) => ({
                label: p.firstName + ' ' + p.lastName + ' - ' + p.email,
                value: p.firstName + ' ' + p.lastName,
              }))}
              onChange={(value) => setRole(value)}
            />
          </Form.Item>
          <Form.Item
            label="Parent Email"
            name="parent_email"
            rules={[{ required: true, message: 'Please input Name!' }]}
          >
            <Input className="!w-[400px]" />
          </Form.Item>
          <Form.Item
            label="Select Mentor"
            name={'mentor'}
            rules={[{ required: true, message: 'Please input Select Mentor!' }]}
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
                  value: 'student',
                  label: 'student',
                },
              ]}
              onChange={(value) => setRole(value)}
            />
          </Form.Item>
          <Form.Item
            label="Mentor Email"
            name="mentor_email"
            rules={[{ required: true, message: 'Please input Name!' }]}
          >
            <Input className="!w-[400px]" />
          </Form.Item>
          <Form.Item
            label="Admin"
            name="Admin"
            rules={[{ required: true, message: 'Please input Name!' }]}
          >
            <Input className="!w-[400px]" />
          </Form.Item>
          <Form.Item
            label="Admin Email"
            name="Admin_email"
            rules={[{ required: true, message: 'Please input Name!' }]}
          >
            <Input className="!w-[400px]" />
          </Form.Item>
          <Form.Item
            label="Date"
            name="Date"
            rules={[{ required: true, message: 'Please input Date!' }]}
          >
            <DatePicker
              format="DD/MM/YYYY hh:mm A"
              onChange={(date, dateString) => console.log(date, dateString)}
              showTime={{ use12Hours: true }}
              className="!w-[400px]"
            />
          </Form.Item>
          <Form.Item
            label="Link"
            name="link"
            rules={[{ required: true, message: 'Please input Link!' }]}
          >
            <Input placeholder="Link " className="!w-[400px]" />
          </Form.Item>

          <Form.Item>
            <div className="flex flex-col items-center gap-4">
              {' '}
              <Button
                className="flex items-center gap-4"
                htmlType="submit"
                loading={loading}
              >
                <MdMissedVideoCall size={24} /> Create
              </Button>
              {error && <p className="text-red-500">{error}</p>}
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
